// const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      let { puestosId } = datos
      return new Promise((resolve, reject) => {
        db.puestos.Obtener({ id: puestosId })
          .then((resp) => {
            if (resp) {
              db.accidentes.Crear(datos)
                .then((resp) => {
                  resolve(responses.OK(resp))
                }).catch((err) => {
                  console.error(err)
                  return reject(responses.ERROR_SERVIDOR)
                })
            } else {
              resolve(responses.NO_OK('el puesto no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.Obtener({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerPorEstablecimiento ({ establecimientosId }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerPorEstablecimiento({ establecimientosId })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Actualizar (datos) {
      let { puestosId } = datos
      return new Promise((resolve, reject) => {
        db.puestos.Obtener({ id: puestosId })
          .then((resp) => {
            if (resp) {
              db.areas.Actualizar(datos)
                .then((resp) => {
                  if (resp[0].toString() === '1') {
                    resolve(responses.OK(true))
                  } else {
                    resolve(responses.NO_OK('El id del area no existe'))
                  }
                }).catch((err) => {
                  console.error(err)
                  return reject(responses.ERROR_SERVIDOR)
                })
            } else {
              resolve(responses.NO_OK('el puesto no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('areas con es id no existe'))
            } else {
              resolve(responses.OK(resp))
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
