'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equipos_puestos'
  let plural = 'equipos_puestos'
  let tableName = 'equipos_puestos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    cantidad: { type: DataTypes.INTEGER }
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

  }

  define.Crear = function ({ cantidad, puestos_id, equipos_id }) {
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
