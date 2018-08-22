const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Crear un equipo
      * @param {json} datos - datos para crear un equipo
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener un equipo
      * @param {number} id - id del equipo
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Actualizar un equipo
      * @param {json} datos - datos de un equipo a actualizar
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Anadir un puesto a un equipo
      * @param {json} datos - ids de puestos y equipos
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Anadir a un area
      * @param {json} datos - ids de ara y equipos
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Borrrar un equipo
      * @param {number} id - id del equipo
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener por areas
      * @param {number} id - id del equipo
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener accidentes por establecimiento
      * @param {number} id - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
