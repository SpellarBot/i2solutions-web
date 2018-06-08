'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'riesgos'
  let plural = 'riesgos'
  let tableName = 'riesgos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    tipoRiesgo: { type: DataTypes.STRING },
    personasExpuestas: { type: DataTypes.INTEGER },
    valoracion: { type: DataTypes.STRING },
    valoracionLiteral: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    porcentajeRiesgo: { type: DataTypes.INTEGER }
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
    define.belongsTo(models.puestos, { foreignKey: 'puestosId', targetKey: 'id' })
  }

  define.Crear = function ({
    tipoRiesgo,
    personasExpuestas,
    valoracion,
    valoracionLiteral,
    fecha,
    porcentajeRiesgo
  }) {
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

  define.ObtenerPorPuesto = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestosId: id
        }
      })
        .then((res) => {
          return resolve(res)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
  return define
}
