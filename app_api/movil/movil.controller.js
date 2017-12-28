module.exports = ({ responses, validator, inspector, movilDAL }) => {
  const proto = {
    PuestosDeAreaTrabajo ({ params }) {
      return new Promise((resolve, reject) => {
        if ( validator.isInt(params.area_id) ) {
            const area_id = params.area_id
            movilDAL.ObtenerPuestoTrabajoPorAreaId({ area_id }).then((puestos) => {
               resolve(responses.OK(puestos))
               delete area_id
            })
        } else {
          reject(responses.ERROR_VALIDACION('area_id no es un numero'))
        }
      })
    },
    PuestoDeTrabajo({ params }) {
      return new Promise((resolve, reject) => {
        if ( validator.isInt(params.puesto_trabajo_id) ) {
          const puesto_trabajo_id = params.puesto_trabajo_id
          movilDAL.ObtenerPuestoPorId({ puesto_trabajo_id }).then((puesto) => {
            resolve(responses.OK(puesto))
          })
        } else {
          reject(responses.ERROR_VALIDACION('puesto_trabajo_id no es un numero'))
        }
      })
    },
    ObtenerTodasNovedades() {
      return new Promise((resolve, reject) => {
        movilDAL.ObtenerTodasNovedades().then((novedades) => {
          resolve(responses.OK(novedades))
        })
      })
    },
    CrearNovedad({ body }) {  
      return new Promise((resolve, reject) => {
        const puesto_trabajo_id = body.puesto_trabajo_id
        const descripcion = body.descripcion || ''
        const prioridad = body.prioridad || ''
        const foto_url = body.foto_url || ''
        if ( validator.isInt(body.puesto_trabajo_id)) {
          movilDAL.CrearNovedad({ puesto_trabajo_id, descripcion, prioridad, foto_url })
            .then((estado) => {
              resolve(responses.CREADO)
            })
        } else {
           reject(responses.ERROR_VALIDACION('id_puesto_trabajo no es un numero'))
        }
      })
    },
  }
  return Object.assign(Object.create(proto), {})
}
