'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'establecimientos'
  let plural = 'establecimientos'
  let tableName = 'establecimientos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    ruc: { type: DataTypes.STRING }
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
    define.belongsTo(models.empresas, { foreignKey: `empresasId`,  targetKey: 'id' })
    define.belongsToMany(models.personas , { through: 'personasEstablecimientos', foreignKey: `establecimientosId` })
  }

  define.Crear = function ({ nombres, direccion, ruc, empresasId }) {
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
