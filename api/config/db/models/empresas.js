'use strict'
let knex = {}
if (process.env.NODE_ENV === 'testing') {
  knex = require('knex')({
    client: 'sqlite',
    useNullAsDefault: true
  })
} else {
  knex = require('knex')({
    client: 'mysql',
    useNullAsDefault: true
  })
}
module.exports = (sequelize, DataTypes) => {
  let singular = 'empresas'
  let plural = 'empresas'
  let tableName = 'empresas'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    actividadComercial: { type: DataTypes.STRING },
    razonSocial: { type: DataTypes.STRING },
    urlFoto: { type: DataTypes.STRING }
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

  }

  define.Crear = function ({ nombres, actividadComercial, razonSocial, urlFoto }) {
    let datos = arguments['0']
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

  define.ObtenerTodos = function () {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true
      })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Obtener = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findOne({ where: { id }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function ({ id, nombre, actividadComercial, razonSocial }) {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombre, actividadComercial, razonSocial },
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

  define.ExistenNovedades = function ({ id }) {
    return new Promise((resolve, reject) => {
      let establecimientosQuery = knex('establecimientos').select('id').where('empresasId', '=', id)
      let areasQuery = knex.select('id').from('areas').where('establecimientosId', 'in', establecimientosQuery)
      let puestosAreasQuery = knex.select('puestosId').from('areasPuestos').where('areasId', 'in', areasQuery)
      let cantidadNovedades = knex.count('*').from('novedades').where('puestosId', 'in', puestosAreasQuery).andWhere('fueAtendida', 0).toString()
      sequelize.query(cantidadNovedades, { type: sequelize.QueryTypes.SELECT })
        .then(cantidad => {
          if (cantidad.length !== 0) {
            let query = cantidad[0]['count(*)']
            if (parseInt(query) !== 0) {
              resolve(true)
            } else {
              resolve(false)
            }
          } else {
            return reject(new Error('Error al extraer el query'))
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }
  return define
}
