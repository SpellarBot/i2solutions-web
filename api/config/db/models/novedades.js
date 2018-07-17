'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'novedades'
  let plural = 'novedades'
  let tableName = 'novedades'
  let define = sequelize.define(singular, {
    // PK
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },

    // PROPERTIES
    descripcion: { type: DataTypes.STRING },
    descripcionAtendida: { type: DataTypes.STRING }, // MIGRACION
    // nombre: { type: DataTypes.STRING },
    prioridad: { type: DataTypes.ENUM('alta', 'media', 'baja') },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    fotoUrl: { type: DataTypes.STRING, defaultValue: '' },
    fueAtendida: { type: DataTypes.STRING, defaultValue: false },

    // FK
    puestosId: { type: DataTypes.INTEGER.UNSIGNED }
    // inspeccionesId: { type: DataTypes.INTEGER.UNSIGNED }
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
    define.belongsTo(models.puestos, { foreignKey: 'puestosId', targetKey: 'id' })
    // define.belongsTo(models.inspecciones, { foreignKey: 'inspeccionesId', targetKey: 'id' })
  }

  define.Crear = function ({ descripcion, prioridad, fotoUrl, puestosId, fueAtendida, descripcionAtendida }) {
    return new Promise((resolve, reject) => {
      return this.create({
        descripcion,
        prioridad,
        fotoUrl,
        puestosId,
        fueAtendida,
        descripcionAtendida
      })
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuesto = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestosId: id
        }
      })
        .then((novedades) => {
          return resolve(novedades)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Atender = function ({ id, atendida, descripcionAtendida }) {
    return new Promise((resolve, reject) => {
      return this.update(
        { fueAtendida: atendida, descripcionAtendida },
        { where: { id: id } })
        .then((resp) => {
          if (resp[0] > 0) {
            return resolve(true)
          } else {
            return resolve(false)
          }
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.BorrarPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          puestosId: id
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

  define.ObtenerPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select n.id as id, n.descripcion as descripcion, n.prioridad as prioridad, n.fecha as fecha, n.fotoUrl as fotoUrl, n.fueAtendida as fueAtendida, n.puestosId as puestosId, a.id as areasId, a.actividad as areasActividad, a.nombre as areasNombre, a.descripcionLugar as areasDescripcionLugar, (select nombre from puestos where id = ap.puestosId) as puestosNombre from establecimientos e inner join areas a on a.establecimientosId = e.id inner join areasPuestos ap on ap.areasId = a.id inner join novedades n on n.puestosId = ap.puestosId where e.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(novedades => {
          let novedadesAtendidas = []
          let novedadesNoAtendidas = []
          for (let novedad of novedades) {
            if (parseInt(novedad['fueAtendida']) === 1) {
              novedadesAtendidas.push(novedad)
            } else {
              novedadesNoAtendidas.push(novedad)
            }
          }
          resolve({ novedadesAtendidas, novedadesNoAtendidas })
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select n.id as id, n.descripcion as descripcion, n.prioridad as prioridad, n.fecha as fecha, n.fotoUrl as fotoUrl, n.fueAtendida as fueAtendida, n.puestosId as puestosId from  areas a  inner join areasPuestos ap on ap.areasId = a.id inner join novedades n on n.puestosId = ap.puestosId where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(novedades => {
          let novedadesAtendidas = []
          let novedadesNoAtendidas = []
          for (let novedad of novedades) {
            if (parseInt(novedad['fueAtendida']) === 1) {
              novedadesAtendidas.push(novedad)
            } else {
              novedadesNoAtendidas.push(novedad)
            }
          }
          resolve({ novedadesAtendidas, novedadesNoAtendidas })
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select n.id as id, n.descripcion as descripcion, n.prioridad as prioridad, n.fecha as fecha, n.fotoUrl as fotoUrl, n.fueAtendida as fueAtendida, n.puestosId as puestosId from areasPuestos ap inner join novedades n on n.puestosId = ap.puestosId where ap.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(novedades => {
          let novedadesAtendidas = []
          let novedadesNoAtendidas = []
          for (let novedad of novedades) {
            if (parseInt(novedad['fueAtendida']) === 1) {
              novedadesAtendidas.push(novedad)
            } else {
              novedadesNoAtendidas.push(novedad)
            }
          }
          resolve({ novedadesAtendidas, novedadesNoAtendidas })
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
