const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (json) {
      let datos = arguments['0']
      let { puestosId } = datos
      return new Promise((resolve, reject) => {
        co(function * () {
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!puesto) {
            resolve(responses.NO_OK('El puesto no existe'))
          } else {
            let novedadCreada = yield db.novedades.Crear(datos)
            resolve(responses.OK(novedadCreada))
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.novedades.Obtener({ id })
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
        co(function * () {
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!puesto) {
            resolve(responses.NO_OK('El puesto no existe'))
          } else {
            let novedadCreada = yield db.novedades.Actualizar(datos)
            if (novedadCreada[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('Error en actualizar la novedad'))
            }
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
    },
    ActualizarEstadoNovedad ({ id, atendida, descripcionAtendida }) {
      return new Promise((resolve, reject) => {
        let datos = arguments['0']
        db.novedades.Atender(datos)
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('La novedad con ese id no exite'))
            } else {
              resolve(responses.OK(true))
            }
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
