'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'controles'
  let plural = 'controles'
  let tableName = 'controles'
  let define = sequelize.define(singular, {
    descripcion: { type: DataTypes.STRING },
    estaImplementado: { type: DataTypes.STRING, defaultValue: false },
    tipo: { type: DataTypes.ENUM('fuente', 'medio', 'individuo') }
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
    define.belongsTo(models.riesgos, { onDelete: 'CASCADE', hooks: true })
    define.belongsTo(models.puestos, { onDelete: 'CASCADE', hooks: true })
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

  define.CrearBulk = function (ids) {
    return new Promise((resolve, reject) => {
      this.bulkCreate(ids)
        .then((datos) => {
          return this.findAll({ raw: true })
        })
        .then((datos) => {
          return resolve(datos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
