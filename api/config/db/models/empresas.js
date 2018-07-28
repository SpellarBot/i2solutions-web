'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'empresas'
  let plural = 'empresas'
  let tableName = 'empresas'
  let define = sequelize.define(singular, {
    nombre: { type: DataTypes.STRING },
    actividadComercial: { type: DataTypes.STRING },
    razonSocial: { type: DataTypes.STRING },
    urlFoto: { type: DataTypes.STRING }
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

  }

  define.Crear = function ({ nombres, actividadComercial, razonSocial, urlFoto }) {
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

  define.Actualizar = function ({ id, nombre, actividadComercial, razonSocial, urlFoto }) {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombre, actividadComercial, razonSocial, urlFoto },
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

  define.EmpresasNovedades = function () {
    return new Promise((resolve, reject) => {
      let query = 'select e.nombre as nombre, e.id as id, e.urlFoto as urlFoto, count(n.fueAtendida) as tieneNovedades  from empresas e inner join establecimientos as es on es.empresasId = e.id inner join areas a on a.establecimientosId = es.id inner join areasPuestos as ap on ap.areasId = a.id inner join novedades as n on n.puestosId = ap.puestosId and n.fueAtendida = 0 group by e.id'
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(empresas => {
          let empresasProcesado = empresas.map(function (currentValue) {
            return {
              nombre: currentValue['nombre'],
              id: currentValue['id'],
              urlFoto: currentValue['urlFoto'],
              tieneNovedades: currentValue['tieneNovedades'] > 0
            }
          })
          resolve(empresasProcesado)
        }).catch((err) => {
          return reject(err)
        })
    })
  }
  return define
}
