'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'controles'
  let plural = 'controles'
  let tableName = 'controles'
  let define = sequelize.define(singular, {
    descripcion: { type: DataTypes.STRING },
    estaImplementado: { type: DataTypes.STRING, defaultValue: false },
    tipo: { type: DataTypes.ENUM('fuente', 'medio', 'individuo') }
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
    define.belongsTo(models.riesgos, { onDelete: 'CASCADE', hooks: true })
    define.belongsTo(models.puestos, { onDelete: 'CASCADE', hooks: true })
  }

  define.Crear = function (crearDatos) {
    let datos = crearDatos
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

  define.CrearBulk = function (ids) {
    return new Promise((resolve, reject) => {
      this.bulkCreate(ids)
        .then((datos) => {
          return this.findAll({ raw: true })
        })
        .then((datos) => {
          return resolve(datos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findAll({
        where: { puestosId: id },
        raw: true,
        include: [
          { model: sequelize.models['riesgos'] }
        ]
      })
        .then((project) => {
          let limpiado = project.map((currentValue, index, array) => {
            return {
              id: currentValue['id'],
              descripcion: currentValue['descripcion'],
              estaImplementado: currentValue['estaImplementado'],
              tipo: currentValue['tipo'],
              fechaCreacion: currentValue['fechaCreacion'],
              fechaActualizacion: currentValue['fechaActualizacion'],
              puestosId: currentValue['puestosId'],
              riesgo: {
                id: currentValue['riesgos.id'],
                clasificacion: currentValue['riesgos.clasificacion'],
                descripcion: currentValue['riesgos.descripcion'],
                fecha: currentValue['riesgos.fecha'],
                fechaCreacion: currentValue['riesgos.fechaCreacion'],
                fechaActualizacion: currentValue['riesgos.fechaActualizacion']
              }
            }
          })
          resolve(limpiado)
        }).catch((err) => {
          console.log(err)
          return reject(err)
        })
    })
  }

  define.ObtenerTodos = function () {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true
      })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestosYRiesgos = function ({ puestosId, riesgosId }) {
    return new Promise((resolve, reject) => {
      this.findAll({ where: { puestosId, riesgosId }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Implementar = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.update(
        { estaImplementado: true },
        { where: { id } })
        .then((resp) => {
          if (resp[0].toString() === '1') {
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

  return define
}
