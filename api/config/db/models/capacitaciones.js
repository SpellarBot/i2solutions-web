'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Capacitacion'
  let plural = 'Capacitaciones'
  let tableName = 'capacitaciones'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    tema: { type: DataTypes.STRING }
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
    define.belongsTo(models.Establecimiento, { foreignKey: `establecimientos_id`,  targetKey: 'id' })
    define.belongsToMany(models.Persona , { through: 'Personas_Capacitacion', foreignKey: `capacitaciones_id` })
  }

  define.Crear = function ({ nombre, descripcion, tema, establecimientos_id }) {
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

  define.ObtenerPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          id
        }
      })
      .then((resp) => {
        return resolve(resp)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
  return define
}
