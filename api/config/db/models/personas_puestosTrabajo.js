'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Personas_PuestosTrabajo'
  let plural = 'Personas_PuestosTrabajos'
  let tableName = 'personas_puestosTrabajo'
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

  define.Crear = function ({ personas_id, puestosTrabajo_id }) {
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
          model: sequelize.models['Persona']
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
