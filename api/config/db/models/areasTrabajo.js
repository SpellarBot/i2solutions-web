'use strict'
module.exports = (sequelize, DataTypes) => {
  const singular = 'areas'
  const plural = 'areas'
  const tableName = 'areas'
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
      plural
    },
    tableName,
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsTo(models.establecimientos, { foreignKey: 'establecimientos_id', targetKey: 'id' })
    define.belongsToMany(models.puestos , { through: 'areas_puestos', foreignKey: `areas_id` })
    define.belongsToMany(models.equipos, { through: 'equipos_areas', foreignKey: `areas_id` })
  }

  define.Crear = function ({ actividad, nombre, foto_url, metros_cuadrados, descripcion_lugar, establecimientos_id }) {
    return new Promise((resolve, reject) => {
      return this.create({
        actividad,
        nombre,
        foto_url,
        metros_cuadrados,
        descripcion_lugar,
        establecimientos_id
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
          model: sequelize.models['puestos'],
          through: {
            attributes: ['nombre', 'descripcion']
          }
        }]
      })
      .then((puestos) => {
        let resp = puestos.map(puesto => {
          return {
            id: puesto['puestos.id'],
            nombre: puesto['puestos.nombre'],
            descripcion: puesto['puestos.descripcion'],
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
