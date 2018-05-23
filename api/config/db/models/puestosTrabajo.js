'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'PuestosTrabajo'
  let plural = 'PuestosTrabajos'
  let tableName = 'puestosTrabajo'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING }
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
    define.hasMany(models.EquiposSeguridad, {as : 'Equipos'})
    define.belongsToMany(models.AreasTrabajo , { through: 'AreasTrabajo_PuestosTrabajo', foreignKey: `puestos_trabajo_id` })
    define.belongsToMany(models.Persona, { through: 'Personas_PuestosTrabajo', foreignKey: `puestos_trabajo_id` })
    define.belongsToMany(models.EquiposSeguridad , { through: 'PuestosTrabajo_Equipo', foreignKey: `puestos_trabajo_id` })

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
        { model: sequelize.models['AreasTrabajo'],attributes: ['id'] },
        { model: sequelize.models['Persona'] }
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
        { model: sequelize.models['EquiposSeguridad'] }
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
