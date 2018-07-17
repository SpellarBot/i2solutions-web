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
    metrosCuadrados: { type: DataTypes.STRING }, // revisar
    descripcionLugar: { type: DataTypes.STRING }
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
    define.belongsTo(models.establecimientos, { foreignKey: 'establecimientosId', targetKey: 'id' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.puestos, { through: 'areasPuestos', foreignKey: 'areasId' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.equipos, { through: 'equiposAreas', foreignKey: 'areasId' }, {onDelete: 'CASCADE'})
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
              descripcion: puesto['puestos.descripcion']
            }
          })
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorEstablecimiento = function ({ establecimientosId }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          establecimientosId
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

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { ...datos },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Obtener = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findOne({ where: { id }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Borrar = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          id
        }})
        .then((rowDeleted) => {
          if (rowDeleted > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerAreasConPuestosPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select a.id as areaId , a.nombre as areaNombre, a.actividad as areaActividad, a.descripcionLugar as areaDescripcionLugar, p.id as puestoId, p.nombre as puestoNombre, p.descripcion as puestoDescripcion, (select count(*) from personasPuestos where puestosId = p.id) as cantidadPersonas, (select count(*) from accidentes where puestosId = p.id) as cantidadAccidentes, (select count(*) from novedades where puestosId = p.id and fueAtendida = 0) as cantidadNovedadesSinAtender from areas a inner join areasPuestos ap on ap.areasId = a.id inner join puestos p on p.id = ap.puestosId where a.establecimientosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(areas => {
          let areasLimpiada = areas.reduce(function (result, item, index, array) {
            if (item['areaId']) {
              let key = item['areaId']
              if (!result[key]) {
                result[key] = {
                  id: item['areaId'],
                  nombre: item['areaNombre'],
                  actividad: item['areaActividad'],
                  descripcionLugar: item['areaDescripcionLugar'],
                  puestos: [{
                    cantidadPersonas: item['cantidadPersonas'],
                    cantidadAccidentes: item['cantidadAccidentes'],
                    cantidadNovedadesSinAtender: item['cantidadNovedadesSinAtender'],
                    id: item['puestoId'],
                    nombre: item['puestoNombre'],
                    descripcion: item['puestoDescripcion']
                  }]
                }
              } else {
                result[key].puestos.push({
                  cantidadPersonas: item['cantidadPersonas'],
                  cantidadAccidentes: item['cantidadAccidentes'],
                  cantidadNovedadesSinAtender: item['cantidadNovedadesSinAtender'],
                  id: item['puestoId'],
                  nombre: item['puestoNombre'],
                  descripcion: item['puestoDescripcion']
                })
              }
              return result
            }
          }, {})
          let areasToArray = []
          for (let area in areasLimpiada) {
            areasToArray.push(areasLimpiada[area])
          }
          resolve(areasToArray)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
