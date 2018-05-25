'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'riesgos'
  let plural = 'riesgos'
  let tableName = 'riesgos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    tipo_riesgo: { type: DataTypes.STRING },
    personas_expuestas: { type: DataTypes.STRING },
    valoracion: { type: DataTypes.STRING },
    valoracion_literal: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    porcentaje_riesgo: { type: DataTypes.STRING }
  },{
  name :{
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
    define.belongsTo(models.puestos, { foreignKey: 'puestos_id', targetKey: 'id' })
  }

  define.Crear = function ({
    tipo_riesgo,
    personas_expuestas,
    valoracion,
    valoracion_literal,
    fecha,
    porcentaje_riesgo
    }) {
    let datos = arguments['0']
    return new Promise( (resolve, reject) => {
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
          id
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
