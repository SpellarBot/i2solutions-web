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
