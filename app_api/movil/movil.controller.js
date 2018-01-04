module.exports = ({ responses, validator, inspector, MovilDAL }) => {
  const proto = {
    PuestosDeAreaTrabajo ({ params }) {
      return new Promise((resolve, reject) => {
        if (validator.isInt(params.area_id)) {
          const areaId = params.area_id
          MovilDAL.ObtenerPuestoTrabajoPorAreaId({ areaId }).then((puestos) => {
            resolve(responses.OK(puestos))
          }).catch(err => {
            // throw new Error('Error movil controller: ', err)
            reject(err)
          })
        } else {
          reject(responses.ERROR_VALIDACION('area_id no es un numero'))
        }
      })
    },
    PuestoDeTrabajo ({ params }) {
      return new Promise((resolve, reject) => {
        if (validator.isInt(params.puesto_trabajo_id)) {
          const puestoTrabajoId = params.puesto_trabajo_id
          MovilDAL.ObtenerPuestoPorId({ puestoTrabajoId }).then((puesto) => {
            resolve(responses.OK(puesto))
          }).catch(err => {
            // throw new Error('Error movil controller: ', err)
            reject(err)
          })
        } else {
          reject(responses.ERROR_VALIDACION('puesto_trabajo_id no es un numero'))
        }
      })
    },
    ObtenerTodasNovedades () {
      return new Promise((resolve, reject) => {
        MovilDAL.ObtenerTodasNovedades().then((novedades) => {
          resolve(responses.OK(novedades))
        }).catch(err => {
          // throw new Error('Error movil controller: ', err)
          reject(err)
        })
      })
    },
    CrearNovedad ({ body }) {
      return new Promise((resolve, reject) => {
        const puestoTrabajoId = body.puesto_trabajo_id
        const descripcion = body.descripcion || ''
        const prioridad = body.prioridad || ''
        const fotoUrl = body.foto_url || ''
        if (validator.isInt(body.puesto_trabajo_id)) {
          MovilDAL.CrearNovedad({ puestoTrabajoId, descripcion, prioridad, fotoUrl })
            .then((estado) => {
              resolve(responses.CREADO)
            }).catch(err => {
              // throw new Error('Error movil controller: ', err)
              reject(err)
            })
        } else {
          reject(responses.ERROR_VALIDACION('id_puesto_trabajo no es un numero'))
        }
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
