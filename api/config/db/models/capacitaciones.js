'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'capacitaciones'
  let plural = 'capacitaciones'
  let tableName = 'capacitaciones'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    tema: { type: DataTypes.STRING },
    fechaCapacitacion: { type: DataTypes.DATE }
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
    define.belongsTo(models.areas, { foreignKey: 'areasId', targetKey: 'id' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.personas, { through: 'personasCapacitaciones', foreignKey: 'capacitacionesId' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ nombre, descripcion, tema, areasId, fechaCapacitacion }) {
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

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          areasId: id
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
