const co = require('co')

function agregarPersonasACapacitaciones (personas, capacitaciones) {
  let personasAgrupadas = {}
  for (let persona of personas) {
    let capacitacionesId = persona['capacitacionesId']
    if (personasAgrupadas[capacitacionesId]) {
      personasAgrupadas[capacitacionesId].push(persona)
    } else {
      personasAgrupadas[capacitacionesId] = [persona]
    }
  }
  let respuestaAgrupadaPorPersonas = []
  for (let capacitacion of capacitaciones) {
    let id = capacitacion['id']
    let personas = []
    if (personasAgrupadas[id]) {
      personas = personasAgrupadas[id]
    }
    respuestaAgrupadaPorPersonas.push({ ...capacitacion, personas: personas })
  }
  return respuestaAgrupadaPorPersonas
}

module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let capacitacionCreada = yield db.capacitaciones.Crear(datos)
          let personas = datos['personas']
          let personasEncontradas = yield db.personas.ObtenerVarias(personas)
          let personasArea = []
          for (let persona of personas) {
            personasArea.push({ personasId: persona, capacitacionesId: capacitacionCreada['id'] })
          }
          let personasAnadidas = yield db.personasCapacitaciones.CrearBulk(personasArea)
          if (personasAnadidas) {
            resolve(responses.OK({ ...capacitacionCreada, personas: personasEncontradas }))
          } else {
            resolve(responses.NO_OK('Ocurrio un error y no se crearon todas las personas'))
          }
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
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
        db.capacitaciones.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('El id de la capacitacion no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.capacitaciones.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('capacitacion con es id no existe'))
            } else {
              resolve(responses.OK(resp))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.capacitaciones.Obtener({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerPorEstablecimiento ({ id }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let resp = yield db.capacitaciones.ObtenerPorEstablecimiento({ id })
          let idsCapacitaciones = resp.reduce(function (anterior, actual) {
            anterior.push(actual['id'])
            return anterior
          }, [])
          let personas = yield db.capacitaciones.ObtenerPersonasCapacitaciones(idsCapacitaciones)
          let ret = agregarPersonasACapacitaciones(personas, resp)
          resolve(responses.OK(ret))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerPorArea ({ id }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let resp = yield db.capacitaciones.ObtenerPorArea({ id })
          let idsCapacitaciones = resp.reduce(function (anterior, actual) {
            anterior.push(actual['id'])
            return anterior
          }, [])
          let personas = yield db.capacitaciones.ObtenerPersonasCapacitaciones(idsCapacitaciones)
          let ret = agregarPersonasACapacitaciones(personas, resp)
          resolve(responses.OK(ret))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
