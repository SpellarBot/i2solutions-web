const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Crear una novedad
      * @param {json} datos - datos para crear una novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener una novedad
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Actualizar una novedad
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Borrar una novedad
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.novedades.Borrar({ id })
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
      * Obtener una novedad por establecimiento
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorEstablecimientos ({ id }) {
      return new Promise((resolve, reject) => {
        db.novedades.ObtenerPorEstablecimiento({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener una novedad por areas
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorAreas ({ id }) {
      return new Promise((resolve, reject) => {
        db.novedades.ObtenerPorAreas({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener una novedad por puestos
      * @param {number} id - id de la novedad
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.novedades.ObtenerPorPuestos({ id })
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
