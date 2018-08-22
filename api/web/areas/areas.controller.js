// const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Crear un area
      * @param {json} datos - datos para crear un area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Crear (datos) {
      return new Promise((resolve, reject) => {
        db.areas.Crear(datos)
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener un area
      * @param {number} id - id del area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener area por establecimiento
      * @param {number} establecimientosId - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Actualizar un area
      * @param {json} datos - datos para actualizar de un area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
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
      })
    },
    /*
      * Borrar un area
      * @param {number} id - id del area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener areas con puestos, esta divido por areas
      * @param {number} id - id del area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerAreasConPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerAreasConPuestosPorEstablecimiento({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener areas
      * @param {number} id - id del area
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerAreasDetalle ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerAreasDetalle({ id })
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
