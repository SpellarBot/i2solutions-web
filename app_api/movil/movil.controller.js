module.exports = ({ responses, validator, inspector, MovilDAL }) => {
  const proto = {
    ObtenerTodasNovedadesSinAtender ({ params, query }) {
      return new Promise((resolve, reject) => {
        const puestoTrabajoId = params.puesto_trabajo_id
        let atendida = query.atendida
        if (atendida === 'false') {
          atendida = false
        } else if (atendida === 'true') {
          atendida = true
        } else {
          atendida = null
        }
        MovilDAL.ObtenerTodasNovedadesSinAtender({ puestoTrabajoId, atendida }).then((puestosSinAntender) => {
          resolve(responses.OK(puestosSinAntender))
        }).catch(err => {
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    // TODO: no existe la novedad con ese id, no existe un puesto con ese Id, error al actualizar
    ActualizarEstadoNovedad ({ params, body }) {
      return new Promise((resolve, reject) => {
        const puestoTrabajoId = params.puesto_trabajo_id
        const novedadId = params.novedad_id
        let atendida = body.atendida
        MovilDAL.ActualizarEstadoNovedad({ puestoTrabajoId, novedadId, atendida }).then((novedadEstado) => {
          if (novedadEstado.estado) {
            resolve(responses.OK({mensaje: novedadEstado.mensaje}))
          } else {
            resolve(responses.NO_ACTUALIZADO({mensaje: novedadEstado.mensaje}))
          }
        }).catch(err => {
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    PuestosDeAreaTrabajo ({ params }) {
      return new Promise((resolve, reject) => {
        const meBorras = true
        if (meBorras) {
          const areaId = params.area_id
          MovilDAL.ObtenerPuestoTrabajoPorAreaId({ areaId }).then((puestos) => {
            resolve(responses.OK(puestos))
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
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
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
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
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    // ademas de crear la novedad debe actualizar la cantidad de novedades
    CrearNovedad ({ body }) {
      return new Promise((resolve, reject) => {
        const puestoTrabajoId = body.puesto_trabajo_id
        const descripcion = body.descripcion || ''
        const prioridad = body.prioridad || ''
        const fotoUrl = body.foto_url || ''
        const valor = true
        if (valor) {
          MovilDAL.CrearNovedad({ puestoTrabajoId, descripcion, prioridad, fotoUrl })
            .then((estado) => {
              resolve(responses.CREADO)
            }).catch(err => {
              console.error(err)
              reject(responses.ERROR_SERVIDOR)
            })
        } else {
          reject(responses.ERROR_VALIDACION('id_puesto_trabajo no es un numero'))
        }
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
