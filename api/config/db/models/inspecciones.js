'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Inspeccion'
  let plural = 'Inspecciones'
  let tableName = 'inspecciones'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    fecha_inicio: { type: DataTypes.DATE },
    tipo_inspeccion: { type: DataTypes.STRING },
    fecha_fin: { type: DataTypes.DATE }
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

  define.Crear = function ({ nombre, fecha_inicio, tipo_inspeccion, fecha_fin }) {
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
