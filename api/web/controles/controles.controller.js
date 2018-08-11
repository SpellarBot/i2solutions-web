const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let { puestosId, riesgosId } = datos
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          let riesgo = yield db.riesgos.Obtener({ id: riesgosId })
          if (!puesto) {
            resolve(responses.NO_OK('El id de puestos no existe'))
          } else if (!riesgo) {
            resolve(responses.NO_OK('El id de riesgo no existe'))
          } else {
            let creada = yield db.controles.Crear(datos)
            if (creada) {
              resolve(responses.OK({ ...creada }))
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
    CrearBulk (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let creada = yield db.controles.CrearBulk(datos)
          if (creada) {
            resolve(responses.OK(creada))
          } else {
            resolve(responses.NO_OK('Ocurrio un error al crearse'))
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let puestos = yield db.controles.ObtenerPorPuestos({ id })
          resolve(responses.OK(puestos))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerPorPuestosYRiesgos ({ puestosId, riesgosId }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let puestos = yield db.controles.ObtenerPorPuestosYRiesgos({ puestosId, riesgosId })
          resolve(responses.OK(puestos))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    Implementar ({ controlesId }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let fueImplementado = yield db.controles.Implementar({ id: controlesId })
          if (fueImplementado) {
            resolve(responses.OK(true))
          } else {
            resolve(responses.NO_OK('No existe este control'))
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
