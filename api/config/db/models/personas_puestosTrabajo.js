'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'personas_puestos'
  let plural = 'personas_puestos'
  let tableName = 'personas_puestos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false }
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

  define.Crear = function ({ personas_id, puestos_id }) {
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
      return this.findOne({
        raw: true,
        where: {
          id
        },
        include: [{
          model: sequelize.models['personas']
        }]
      })
      .then((puesto) => {
        return resolve(puesto)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
  return define
}
