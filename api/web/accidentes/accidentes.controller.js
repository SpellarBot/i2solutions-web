const co = require('co')
if (process.env.NODE_ENV === 'testing') {
  console.error = function () { return true }
}
module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Crear un accidente
      * @param {json} datos - datos para crear un accidente
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Crear (datos) {
      let { puestosId } = datos
      return new Promise((resolve, reject) => {
        co(function * () {
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!puesto) {
            resolve(responses.NO_OK('el puesto no existe'))
          } else {
            let resp = yield db.accidentes.Crear(datos)
            resolve(responses.OK(resp))
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    /*
      * Obtener un accidente
      * @param {number} id - id del accidente
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        db.accidentes.Obtener({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Actualizar un accidente
      * @param {json} datos - datos de un accidente a actualizar
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
            resolve(responses.NO_OK('el puesto no existe'))
          } else {
            let resp = yield db.accidentes.Actualizar(datos)
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('el accidente no existe'))
            }
          }
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    /*
      * Borrrar un accidente
      * @param {number} id - eliminar un accidente
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.accidentes.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('accidentes con es id no existe'))
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
      * Obtener accidentes por establecimiento
      * @param {number} id - id del establecimiento
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorEstablecimiento ({ id }) {
      return new Promise((resolve, reject) => {
        db.accidentes.ObtenerPorEstablecimiento({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener accidentes por areas
      * @param {number} id - id del areas
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorAreas ({ id }) {
      return new Promise((resolve, reject) => {
        db.accidentes.ObtenerPorAreas({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener accidentes por puestos
      * @param {number} id - id del puesto
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.accidentes.ObtenerPorPuestos({ id })
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
