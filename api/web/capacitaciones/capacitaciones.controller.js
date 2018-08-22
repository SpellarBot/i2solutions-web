const co = require('co')

/*
  * Anadir personas al json capacitaciones
  * @param {array} personas - array de personas
  * @param {array} capacitaciones - array de capacitaciones
  * @return {array} capacitaciones con las personas
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
*/
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
    /*
      * Crear una persona
      * Se enviar un correo para la creacion de la clave al correo cuando se crea
      * @param {datos} personas - array de personas
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener todas las persona
      * @param {number} empresasId - id de la empresa
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Actualizar una persona
      * @param {json} datos - datos para actualizar una persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Borrar una persona
      * @param {number} id - id de la persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener una persona
      * @param {number} id - id de la persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener personas por establecimiento
      * @param {number} id - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener personas por area
      * @param {number} id - id del area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
