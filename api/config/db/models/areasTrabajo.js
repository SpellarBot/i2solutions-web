'use strict'
module.exports = (sequelize, DataTypes) => {
  const singular = 'AreasTrabajo'
  const plural = 'AreasTrabajos'
  const tableName = 'areasTrabajo'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    actividad: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    foto_url: { type: DataTypes.STRING },
    metros_cuadrados: { type: DataTypes.STRING },
    descripcion_lugar: { type: DataTypes.STRING }
  }, {
    name : {
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
    define.belongsTo(models.Establecimiento, { foreignKey: 'establecimientos_id', targetKey: 'id' })
    define.belongsToMany(models.PuestosTrabajo , { through: 'AreasTrabajo_PuestosTrabajo', foreignKey: `areas_trabajo_id` })
    define.belongsToMany(models.EquiposSeguridad , { through: 'EquiposSeguridad_AreasTrabajo', foreignKey: `areas_trabajo_id` })
  }

  define.Crear = function ({ actividad, nombre, foto_url, metros_cuadrados, descripcion_lugar }) {
    return new Promise((resolve, reject) => {
      return this.create({
        actividad,
        nombre,
        foto_url,
        metros_cuadrados,
        descripcion_lugar
      })
      .then((area) => {
        return resolve(area.get({ plain: true }))
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.ObtenerPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          id
        },
        include: [{
          model: sequelize.models['PuestosTrabajo'],
          through: {
            attributes: ['nombre', 'descripcion']
          }
        }]
      })
      .then((puestos) => {
        let resp = puestos.map(puesto => {
          return {
            id: puesto['PuestosTrabajos.id'],
            nombre: puesto['PuestosTrabajos.nombre'],
            descripcion: puesto['PuestosTrabajos.descripcion'],
          }
        })
        return resolve(resp)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  return define
}
