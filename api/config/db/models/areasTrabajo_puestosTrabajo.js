'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Areas_PuestosTrabajo'
  let plural = 'AreasTrabajos_PuestosTrabajos'
  let tableName = 'areas_puestos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false }
  },{
  name :{
    singular,
    plural,
    tableName
  },
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {

  }

  define.Crear = function ({ areas_trabajo_id, puestos_trabajo_id }) {
    return new Promise( (resolve, reject) => {
      return this.create({
        areas_trabajo_id,
        puestos_trabajo_id
      })
      .then((areas) => {
        return resolve(areas.get({ plain: true }))
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
  return define
}
