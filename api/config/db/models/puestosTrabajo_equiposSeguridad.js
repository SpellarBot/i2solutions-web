'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'PuestosTrabajo_Equipo'
  let plural = 'PuestosTrabajo_Equipos'
  let tableName = 'puestosTrabajo_equiposseguridad'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    cantidad: { type: DataTypes.INTEGER }
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

  define.Crear = function ({ cantidad, puestos_trabajo_id, equipos_id }) {
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
  return define
}
