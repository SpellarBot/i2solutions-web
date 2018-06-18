// const _ = require('lodash')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        db.puestos.Crear(datos)
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.puestos.Obtener({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorArea ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerPuestos({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
        db.puestos.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('El id del puesto no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.novedades.BorrarPorPuestos({ id }),
          db.riesgos.BorrarPorPuestos({ id }),
          db.accidentes.BorrarPorPuestos({ id }),
          db.puestos.Borrar({ id })
        ])
          .then((resp) => {
            // let valido = _.every(resp)
            if (!resp[3]) {
              resolve(responses.NO_OK('puesto con es id no existe'))
            } else {
              resolve(responses.OK(resp[3]))
            }
          }).catch((err) => {
            console.log(err)
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
