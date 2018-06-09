'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'empresas'
  let plural = 'empresas'
  let tableName = 'empresas'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    actividadComercial: { type: DataTypes.STRING },
    razonSocial: { type: DataTypes.STRING }
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

  define.Crear = function ({ nombres, actividadComercial, razonSocial }) {
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
  return define
}
