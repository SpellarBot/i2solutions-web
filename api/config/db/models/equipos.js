'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equipos'
  let plural = 'equipos'
  let tableName = 'equipos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    foto_url: { type: DataTypes.STRING }

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
    define.belongsToMany(models.areas , { through: 'equipos_areas', foreignKey: `equipos_id` })
    define.belongsToMany(models.puestos , { through: 'equipos_puestos', foreignKey: `equipos_id` })
  }

  define.Crear = function ({ descripcion, nombre, foto_url }) {
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
