const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (json) {
      let datos = arguments['0']
      return new Promise((resolve, reject) => {
        co(function * () {
          let riesgoCreada = yield db.riesgos.Crear(datos)
          resolve(responses.OK(riesgoCreada))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.riesgos.Obtener({ id })
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
        co(function * () {
          let riesgosCreada = yield db.riesgos.Actualizar(datos)
          if (riesgosCreada[0].toString() === '1') {
            resolve(responses.OK(true))
          } else {
            resolve(responses.NO_OK('Error en actualizar el riesgo'))
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.riesgos.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('riesgo con es id no existe'))
            } else {
              resolve(responses.OK(resp))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
        db.riesgos.ObtenerTodos()
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
    // ObtenerPorAreas ({ id }) {
    //   return new Promise((resolve, reject) => {
    //     db.riesgos.ObtenerPorAreas({ id })
    //       .then((resp) => {
    //         resolve(responses.OK(resp))
    //       }).catch((err) => {
    //         console.error(err)
    //         return reject(responses.ERROR_SERVIDOR)
    //       })
    //   })
    // },
    // ObtenerPorPuestos ({ id }) {
    //   return new Promise((resolve, reject) => {
    //     db.riesgos.ObtenerPorPuestos({ id })
    //       .then((resp) => {
    //         resolve(responses.OK(resp))
    //       }).catch((err) => {
    //         console.error(err)
    //         return reject(responses.ERROR_SERVIDOR)
    //       })
    //   })
    // }
  }
  return Object.assign(Object.create(proto), {})
}
