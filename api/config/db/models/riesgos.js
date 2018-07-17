'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'riesgos'
  let plural = 'riesgos'
  let tableName = 'riesgos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    tipoRiesgo: { type: DataTypes.STRING },
    personasExpuestas: { type: DataTypes.INTEGER },
    valoracion: { type: DataTypes.STRING },
    valoracionLiteral: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    porcentajeRiesgo: { type: DataTypes.INTEGER }
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

  define.Crear = function ({
    tipoRiesgo,
    personasExpuestas,
    valoracion,
    valoracionLiteral,
    fecha,
    porcentajeRiesgo,
    puestosId
  }) {
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

  define.ObtenerPorPuesto = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestosId: id
        }
      })
        .then((res) => {
          return resolve(res)
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

  define.ObtenerPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select r.id as id, r.tipoRiesgo as tipoRiesgo, r.personasExpuestas as personasExpuestas, r.valoracion as valoracion, r.valoracionLiteral as valoracionLiteral, r.fecha as fecha, r.porcentajeRiesgo as porcentajeRiesgo, r.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre, a.id as areasId, a.nombre as areasNombre from areas a inner join areasPuestos ap on ap.areasId = a.id inner join riesgos r on r.puestosId = ap.puestosId where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(riesgos => {
          resolve(riesgos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select r.id as id, r.tipoRiesgo as tipoRiesgo, r.personasExpuestas as personasExpuestas, r.valoracion as valoracion, r.valoracionLiteral as valoracionLiteral, r.fecha as fecha, r.porcentajeRiesgo as porcentajeRiesgo, r.puestosId as puestosId, (select nombre from puestos where id = ap.puestosId) as puestosNombre from areasPuestos ap join riesgos r on r.puestosId = ap.puestosId where ap.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(riesgos => {
          resolve(riesgos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
