const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let { puestosId } = datos
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!puesto) {
            resolve(responses.NO_OK('El id de puestos no existe'))
          } else {
            let equipoCreada = yield db.equipos.Crear(datos)
            let relacionCreada = yield db.equiposPuestos.Crear({ equiposId: equipoCreada['id'], puestosId })
            if (equipoCreada && relacionCreada) {
              resolve(responses.OK({ ...equipoCreada, puestosId }))
            } else {
              resolve(responses.NO_OK('Ocurrio un error al crearse'))
            }
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.equipos.Obtener({ id })
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
        db.equipos.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('El id de la equipos no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    AnadirAPuesto (datos) {
      let { puestosId, equiposId } = datos
      return new Promise((resolve, reject) => {
        Promise.all([
          db.equipos.Obtener({ id: equiposId }),
          db.puestos.Obtener({ id: puestosId })
        ])
          .then((values) => {
            let existeEquipo = values[0]
            let existePuesto = values[1]
            if (!existePuesto) {
              resolve(responses.NO_OK('El puesto no existe'))
            } else if (!existeEquipo) {
              resolve(responses.NO_OK('El equipo no existe'))
            } else {
              db.equiposPuestos.Crear({ equiposId, puestosId })
                .then((resp) => {
                  resolve(responses.OK(resp))
                })
                .catch((err) => {
                  console.error(err)
                  return reject(responses.ERROR_SERVIDOR)
                })
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    AnadirAArea (datos) {
      let { areasId, equiposId } = datos
      return new Promise((resolve, reject) => {
        Promise.all([
          db.equipos.Obtener({ id: equiposId }),
          db.areas.Obtener({ id: areasId })
        ])
          .then((values) => {
            let existeEquipo = values[0]
            let existeArea = values[1]
            if (!existeArea) {
              resolve(responses.NO_OK('El area no existe'))
            } else if (!existeEquipo) {
              resolve(responses.NO_OK('El equipo no existe'))
            } else {
              db.equiposAreas.Crear({ equiposId, areasId })
                .then((resp) => {
                  resolve(responses.OK(resp))
                })
                .catch((err) => {
                  console.error(err)
                  return reject(responses.ERROR_SERVIDOR)
                })
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
          db.equiposPuestos.BorrarPorEquipos({ id })
        ])
          .then((values) => {
            db.equipos.Borrar({ id }).then((resp) => {
              if (!resp) {
                resolve(responses.NO_OK('equipos con es id no existe'))
              } else {
                resolve(responses.OK(resp))
              }
            }).catch((err) => {
              console.error(err)
              return reject(responses.ERROR_SERVIDOR)
            })
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerPorAreas ({ id }) {
      return new Promise((resolve, reject) => {
        db.equipos.ObtenerPorAreas({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.equipos.ObtenerPorPuestos({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
