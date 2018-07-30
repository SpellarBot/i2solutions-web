'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'areasPuestos'
  let plural = 'areasPuestos'
  let tableName = 'areasPuestos'
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

  define.Crear = function ({ areasId, puestosId }) {
    return new Promise((resolve, reject) => {
      return this.create({
        areasId,
        puestosId
      })
        .then((areas) => {
          return resolve(areas.get({ plain: true }))
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
  return define
}
