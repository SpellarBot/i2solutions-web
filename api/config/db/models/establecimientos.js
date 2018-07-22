'use strict'
const _ = require('lodash')
module.exports = (sequelize, DataTypes) => {
  let singular = 'establecimientos'
  let plural = 'establecimientos'
  let tableName = 'establecimientos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    ruc: { type: DataTypes.STRING, unique: true }
  }, {
    name: {
      singular,
      plural
    },
    tableName,
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsTo(models.empresas, { foreignKey: 'empresasId', targetKey: 'id' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.personas, { through: 'personasEstablecimientos', foreignKey: 'establecimientosId' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ nombres, direccion, ruc, empresasId }) {
    let datos = arguments['0']
    // console.log(datos)
    return new Promise((resolve, reject) => {
      return this.create(datos)
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorEmpresas = function ({ empresasId }) {
    return new Promise((resolve, reject) => {
      this.findAll({ where: { empresasId }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { nombres, direccion, ruc } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombres, direccion, ruc },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Borrar = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          id
        }})
        .then((rowDeleted) => {
          if (rowDeleted > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.VistaPrincipal = function ({ empresasId }) {
    return new Promise((resolve, reject) => {
      let query = `select e.id, e.nombres, e.ruc as ruc, e.direccion as direccion, (select count(*) from areas where establecimientosId = e.id ) as cantidadAreas, (select count(*) from areas a inner join areasPuestos ap on ap.areasId = a.id where a.establecimientosId = e.id ) as  cantidadPuestos,  (select count(*) from areas a inner join areasPuestos ap on ap.areasId = a.id inner join accidentes ac on ac.puestosId = ap.puestosId where a.establecimientosId = e.id) as cantidadAccidentes, (select count(*) from areas a inner join capacitaciones c on c.areasId = a.id where a.establecimientosId = e.id) as  cantidadCapacitaciones, (select count(*) from areas a inner join areasPuestos ap on ap.areasId = a.id inner join personasPuestos pp on pp.puestosId = ap.puestosId where a.establecimientosId = e.id )  as cantidadPersonas, (select count(*) from areas a inner join areasPuestos ap on ap.areasId = a.id inner join novedades n on n.puestosId = ap.puestosId and n.fueAtendida = 0 where a.establecimientosId = e.id) as cantidadNovadadesSinAtender from establecimientos e  where e.empresasId = ${empresasId}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(establecimientos => {
          resolve(establecimientos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.BuscarPorRucs = function ({ rucs }) {
    return new Promise((resolve, reject) => {
      this.findAll({
        where: {
          ruc: rucs
        },
        raw: true })
        .then((project) => {
          let respuestas = []
          for (let ruc of rucs) {
            let establecimiento = _.find(project, { ruc })
            if (establecimiento) {
              let r = {}
              r[ruc] = true
              respuestas.push(r)
            } else {
              let r = {}
              r[ruc] = false
              respuestas.push(r)
            }
          }
          resolve(respuestas)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
