'use strict'
module.exports = (sequelize, DataTypes) => {
  const singular = 'areas'
  const plural = 'areas'
  const tableName = 'areas'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    actividad: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    fotoUrl: { type: DataTypes.STRING },
    metrosCuadrados: { type: DataTypes.STRING },
    descripcionLugar: { type: DataTypes.STRING }
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
    define.belongsTo(models.establecimientos, { foreignKey: 'establecimientosId', targetKey: 'id' })
    define.belongsToMany(models.puestos , { through: 'areasPuestos', foreignKey: `areasId` })
    define.belongsToMany(models.equipos, { through: 'equiposAreas', foreignKey: `areasId` })
  }

  define.Crear = function ({ actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId }) {
    return new Promise((resolve, reject) => {
      return this.create({
        actividad,
        nombre,
        fotoUrl,
        metrosCuadrados,
        descripcionLugar,
        establecimientosId
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
