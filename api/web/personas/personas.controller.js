module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        db.personas.Crear(datos)
          .then((resp) => {
            if (resp['clave']) {
              delete resp['clave']
            }
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodos()
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
        db.personas.Obtener({ id })
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
        db.personas.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('Persona con ese id no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Borrar ({ id }) {
      // corroborar que se elimine de personasPuestos la tabla
      return new Promise((resolve, reject) => {
        db.personas.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('persona con es id no existe'))
            } else {
              resolve(responses.OK(resp))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    AnadirAPuesto (datos) {
      let { puestosId, personasId } = datos
      return new Promise((resolve, reject) => {
        db.personasPuestos.Crear({ puestosId, personasId })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorEstablecimiento ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorEstablecimiento({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorAreas ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorAreas({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorPuestos({ id })
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
