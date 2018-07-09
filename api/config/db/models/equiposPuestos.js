'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equiposPuestos'
  let plural = 'equiposPuestos'
  let tableName = 'equiposPuestos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false }
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

  define.Crear = function ({ puestosId, equiposId }) {
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

  define.ObtenerPorEquipos = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          equiposId: id
        }
      })
        .then((novedades) => {
          return resolve(novedades)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.BorrarPorEquipos = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          equiposId: id
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
