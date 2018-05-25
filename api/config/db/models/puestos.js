'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'puestos'
  let plural = 'puestos'
  let tableName = 'puestos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING }
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
    // define.hasMany(models.EquiposSeguridad, {as : 'Equipos'})
    define.belongsToMany(models.areas, { through: 'areas_puestos', foreignKey: `puestos_id` })
    define.belongsToMany(models.personas, { through: 'personas_puestos', foreignKey: `puestos_id` })
    define.belongsToMany(models.equipos, { through: 'equipos_puestos', foreignKey: `puestos_id` })
  }

  define.Crear = function ({ nombre, descripcion }) {
    return new Promise((resolve, reject) => {
      return this.create({
        nombre,
        descripcion
      })
      .then((areas) => {
        return resolve(areas.get({ plain: true }))
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.obtenerPorId = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          id
        },
        include: [
        { model: sequelize.models['areas'],attributes: ['id'] },
        { model: sequelize.models['personas'] }
        ]
      })
      .then((puesto) => {
        // console.log(puesto)
        return resolve(puesto)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.obtenerEquipos = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          id
        },
        include: [
          { model: sequelize.models['equipos'] }
        ]
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
