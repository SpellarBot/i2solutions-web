'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'personasEstablecimientos'
  let plural = 'personasEstablecimientos'
  let tableName = 'personasEstablecimientos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    rol: { type: DataTypes.ENUM('inspector', 'jefe', 'empleado') }
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

  define.Crear = function ({ personasId, establecimientosId, rol }) {
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
  return define
}
