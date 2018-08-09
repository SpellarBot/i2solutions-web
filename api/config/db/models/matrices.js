'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'matrices'
  let plural = 'matrices'
  let tableName = 'matrices'
  let define = sequelize.define(singular, {
    datos: { type: DataTypes.TEXT }
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
    define.belongsTo(models.establecimientos, { onDelete: 'CASCADE', hooks: true })
  }

  define.Crear = function (crearDatos) {
    let datos = crearDatos
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

  define.ObtenerPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          establecimientosId: id
        }
      })
        .then((respo) => {
          return resolve(respo)
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

  return define
}
