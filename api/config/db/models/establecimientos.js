'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Establecimiento'
  let plural = 'Establecimientos'
  let tableName = 'establecimientos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    ruc: { type: DataTypes.STRING }
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
    define.belongsTo(models.Empresa, { foreignKey: `empresas_id`,  targetKey: 'id' })
    define.belongsToMany(models.Persona , { through: 'Personas_Establecimiento', foreignKey: `establecimientos_id` })
  }

  define.Crear = function ({ nombres, direccion, ruc, empresas_id }) {
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
