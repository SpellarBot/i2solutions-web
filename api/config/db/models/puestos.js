'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'puestos'
  let plural = 'puestos'
  let tableName = 'puestos'
  let define = sequelize.define(singular, {
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING }
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
    define.belongsToMany(models.areas, { through: 'areasPuestos', foreignKey: 'puestosId' })
    define.belongsToMany(models.personas, { through: 'personasPuestos', foreignKey: 'puestosId' })
    define.belongsToMany(models.equipos, { through: 'equiposPuestos', foreignKey: 'puestosId' })
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
          { model: sequelize.models['areas'], attributes: ['id'] },
          { model: sequelize.models['personas'] }
        ]
      })
        .then((puesto) => {
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

  define.obtenerEquiposPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select * from equiposPuestos ep inner join equipos e on e.id = ep.equiposId where ep.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(equipos => {
          resolve(equipos)
        }).catch((err) => {
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

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select p.id as id, p.descripcion as descripcion, p.nombre as nombre, (select count(*) from personasPuestos where puestosId = ap.puestosId) as cantidadPersonas, (select count(*) from accidentes where puestosId = ap.puestosId) as cantidadAccidentes, (select count(*) from novedades where puestosId = ap.puestosId and fueAtendida = 0) as cantidadNovedadesSinAtender, (select count(*) from equiposPuestos where puestosId = ap.puestosId) as cantidadEquipos, (select count(*) from riesgos where puestosId = ap.puestosId) as cantidadRiesgos from areasPuestos ap inner join puestos p on p.id = ap.puestosId where ap.areasId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(puestos => {
          resolve(puestos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
