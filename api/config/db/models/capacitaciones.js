'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'capacitaciones'
  let plural = 'capacitaciones'
  let tableName = 'capacitaciones'
  let define = sequelize.define(singular, {
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
    define.belongsTo(models.areas, { onDelete: 'CASCADE', hooks: true })
    define.belongsToMany(models.personas, { through: 'personasCapacitaciones', foreignKey: 'capacitacionesId' })
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

  define.ObtenerPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select c.nombre as nombre, c.id as id, c.descripcion as descripcion, c.fechaCapacitacion as fechaCapacitacion, c.tema as tema, c.areasId as areasId, a.actividad as areasActividad, a.nombre as areasNombre, a.descripcionLugar as areasDescripcionLugar from establecimientos e inner join areas a on a.establecimientosId = e.id inner join capacitaciones c on c.areasId = a.id where e.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorArea = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select c.nombre as nombre, c.id as id, c.fechaCapacitacion as fechaCapacitacion, c.tema as tema, c.areasId as areasId, c.descripcion as descripcion from areas a inner join capacitaciones c on c.areasId = a.id where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPersonasCapacitaciones = function (ids) {
    return new Promise((resolve, reject) => {
      let idsQuery = ids.join(',')
      let query = `select pc.capacitacionesId, p.usuario as usuario, p.correo as correo, p.nombres as nombres, p.apellidos as apellidos, p.id as id, p.rol as rol, p.cedula as cedula from personasCapacitaciones pc inner join personas p on p.id = pc.personasId where pc.capacitacionesId in (${idsQuery})`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { nombre, descripcion, tema, fechaCapacitacion } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombre, descripcion, tema, fechaCapacitacion },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPersonas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select p.nombres as nombres, p.apellidos as apellidos, p.id as id, p.correo as correo, p.cedula as cedula, p.telefono as telefono, c.id as capacitacionId, c.nombre as capacitacionNombre, c.tema as capacitacionTema, c.descripcion as capacitacionDescripcion, c.fechaCapacitacion as capacitacionFechaCapacitacion from capacitaciones c inner join personasCapacitaciones pc on pc.capacitacionesId = c.id inner join personas p on p.id = pc.personasId where c.areasId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
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

  return define
}
