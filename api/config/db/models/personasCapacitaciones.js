'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'personasCapacitaciones'
  let plural = 'personasCapacitaciones'
  let tableName = 'personasCapacitaciones'
  let define = sequelize.define(singular, {
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

  define.Crear = function ({ personasId, capacitacionesId }) {
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

  define.ObtenerPorCapacitaciones = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          capacitacionesId: id
        }
      })
        .then((puesto) => {
          return resolve(puesto)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.CrearBulk = function (ids) {
    return new Promise((resolve, reject) => {
      this.bulkCreate(ids)
        .then((datos) => {
          return this.findAll({ raw: true })
        })
        .then((datos) => {
          if (datos.length === ids.length) {
            return resolve(true)
          } else {
            return resolve(false)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
