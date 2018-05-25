'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equipos'
  let plural = 'equipos'
  let tableName = 'equipos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    fotoUrl: { type: DataTypes.STRING }

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
    define.belongsToMany(models.areas , { through: 'equiposAreas', foreignKey: `equiposId` })
    define.belongsToMany(models.puestos , { through: 'equiposPuestos', foreignKey: `equiposId` })
  }

  define.Crear = function ({ descripcion, nombre, fotoUrl }) {
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
