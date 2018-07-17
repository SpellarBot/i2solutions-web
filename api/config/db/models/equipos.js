'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equipos'
  let plural = 'equipos'
  let tableName = 'equipos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    fotoUrl: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.INTEGER }
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
    define.belongsToMany(models.areas, { through: 'equiposAreas', foreignKey: 'equiposId' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.puestos, { through: 'equiposPuestos', foreignKey: 'equiposId' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ descripcion, nombre, fotoUrl, cantidad }) {
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

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { descripcion, nombre, fotoUrl, cantidad } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { descripcion, nombre, fotoUrl, cantidad },
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

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select eq.id as id, eq.descripcion as descripcion, eq.nombre as nombre, eq.fotoUrl as fotoUrl, eq.cantidad as cantidad, ap.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre, a.id as areasId, a.nombre as areasNombre from areas a inner join areasPuestos ap on ap.areasId = a.id inner join equiposPuestos ep on ep.puestosId = ap.puestosId inner join equipos eq on eq.id = ep.equiposId where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select eq.id as id, eq.descripcion as descripcion, eq.nombre as nombre, eq.fotoUrl as fotoUrl, eq.cantidad as cantidad, ap.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre from areasPuestos ap inner join equiposPuestos ep on ep.puestosId = ap.puestosId inner join equipos eq on eq.id = ep.equiposId where ap.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
