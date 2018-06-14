// const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      // console.log(datos)
      return new Promise((resolve, reject) => {
        db.establecimientos.Crear(datos)
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodos ({ empresasId }) {
      return new Promise((resolve, reject) => {
        db.establecimientos.ObtenerPorEmpresas({ empresasId })
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
      })
    },
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
        db.establecimientos.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('El id del establecimento no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
