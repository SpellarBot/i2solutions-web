'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'accidentes'
  let plural = 'accidentes'
  let tableName = 'accidentes'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    heridos: { type: DataTypes.STRING },
    atendidoEnEmpresa: { type: DataTypes.BOOLEAN },
    muertos: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE }
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
    define.belongsTo(models.puestos, { foreignKey: 'puestosId', targetKey: 'id' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }) {
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

  define.obtenerPorPuestoTrabajo = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestosId: id
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
    let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
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

  define.ObtenerPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select ac.id as id, ac.nombre as nombre, ac.descripcion as descripcion, ac.heridos as heridos, ac.atendidoEnEmpresa as atendidoEnEmpresa, ac.muertos as muertos, ac.fecha as fecha, ac.puestosId as puestosId, a.id as areasId, a.actividad as areasActividad, a.nombre as areasNombre, a.descripcionLugar as areasDescripcionLugar, (select nombre from puestos where id = ap.puestosId) as puestosNombre from establecimientos e inner join areas a on a.establecimientosId = e.id inner join areasPuestos ap on ap.areasId = a.id inner join accidentes ac on ac.puestosId = ap.puestosId where e.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(accidentes => {
          resolve(accidentes)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select ac.id as id, ac.nombre as nombre, ac.descripcion as descripcion, ac.heridos as heridos, ac.atendidoEnEmpresa as atendidoEnEmpresa, ac.muertos as muertos, ac.fecha as fecha, ac.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre, a.id as areasId, a.nombre as areasNombre from areas a inner join areasPuestos ap on ap.areasId = a.id inner join accidentes ac on ac.puestosId = ap.puestosId where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select ac.id as id, ac.nombre as nombre, ac.descripcion as descripcion, ac.heridos as heridos, ac.atendidoEnEmpresa as atendidoEnEmpresa, ac.muertos as muertos, ac.fecha as fecha, ac.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre from areasPuestos ap join accidentes ac on ac.puestosId = ap.puestosId where ap.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(capacitaciones => {
          resolve(capacitaciones)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
