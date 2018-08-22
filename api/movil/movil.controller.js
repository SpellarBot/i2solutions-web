module.exports = ({ responses, db }) => {
  const proto = {
    /*
      * Obtener puestos de area de trabajo
      * @param {number} id - id del puesto
      * @return {json} respuestas para api
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    PuestosDeAreaTrabajo ({ id }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerPuestos({ id })
          .then((puestos) => {
            resolve(responses.OK(puestos))
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Crear una novedad
      * @param {json} json - datos de una novedad
      * @return {json} respuestas para api
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    CrearNovedad (json) {
      let datos = arguments['0']
      return new Promise((resolve, reject) => {
        db.novedades.Crear(datos)
          .then((novedad) => {
            resolve(responses.OK(novedad))
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Datos enviados al iniciar sesion en la aplicacion movil
      * @param {number} puestosId - id del puesto
      * @param {number} establecimientosId - id del establecimiento
      * @param {number} areasId - id del area
      * @return {json} respuestas para api
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    CargarDatos ({ puestosId, establecimientosId, areasId }) {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.areas.Obtener({ id: areasId }),
          db.puestos.Obtener({ id: puestosId }),
          db.novedades.ObtenerPorPuesto({ id: puestosId }),
          db.riesgos.ObtenerTodos(),
          db.personas.ObtenerCantidadPorPuestos({ id: puestosId }),
          db.puestos.obtenerEquiposPorPuestos({ id: puestosId }),
          db.accidentes.obtenerPorPuestoTrabajo({ id: puestosId }),
          db.capacitaciones.ObtenerPorPersonas({ id: areasId }),
          db.capacitaciones.ObtenerPorArea({ id: areasId })
        ])
          .then((datos) => {
            let [ area, puesto, novedades, riesgos, cantidadEmpleados, equiposProteccion, detallesAccidentes, capacitacionesPersonas, capacitaciones ] = datos
            let capacitacionesPersonasTmp = {}
            for (let capacitacion of capacitacionesPersonas) {
              let id = capacitacion['capacitacionId']
              if (capacitacionesPersonasTmp[id]) {
                capacitacionesPersonasTmp[id]['personas'].push({
                  nombres: capacitacion['nombres'],
                  apellidos: capacitacion['apellidos'],
                  correo: capacitacion['correo'],
                  cedula: capacitacion['cedula'],
                  telefono: capacitacion['telefono']
                })
              } else {
                capacitacionesPersonasTmp[id] = {}
                capacitacionesPersonasTmp[id]['id'] = capacitacion['capacitacionId']
                capacitacionesPersonasTmp[id]['personas'] = []
                capacitacionesPersonasTmp[id]['personas'].push({
                  id: capacitacion['id'],
                  nombres: capacitacion['nombres'],
                  apellidos: capacitacion['apellidos'],
                  correo: capacitacion['correo'],
                  cedula: capacitacion['cedula'],
                  telefono: capacitacion['telefono']
                })
              }
            }
            let detallesCapacitaciones = []
            for (let capacitacion of capacitaciones) {
              let id = capacitacion['id']
              let existe = capacitacionesPersonasTmp[id]
              if (existe) {
                capacitacion['capacitados'] = []
                capacitacion['capacitados'] = capacitacionesPersonasTmp[id]['personas']
                detallesCapacitaciones.push(capacitacion)
              } else {
                capacitacion['capacitados'] = []
                detallesCapacitaciones.push(capacitacion)
              }
            }
            // separar novedades
            let novedadesSinAtender = novedades.filter((novedad) => {
              if (novedad['fueAtendida'] === '0') {
                novedad['fueAtendida'] = false
                return novedad
              }
            })
            let novedadesAtendidas = novedades.filter((novedad) => {
              if (novedad['fueAtendida'] === '1') {
                novedad['fueAtendida'] = true
                return novedad
              }
            })
            resolve(responses.OK({
              area,
              ...puesto,
              areasId: parseInt(areasId),
              novedadesSinAtender,
              novedadesAtendidas,
              riesgos,
              cantidadEmpleados,
              equiposProteccion,
              detallesAccidentes,
              detallesCapacitaciones
            }))
          })
          .catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ActualizarEstadoNovedad ({ id, atendida, descripcionAtendida }) {
      return new Promise((resolve, reject) => {
        let datos = arguments['0']
        db.novedades.Atender(datos)
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('La novedad con ese id no exite'))
            } else {
              resolve(responses.OK(true))
            }
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    /*
      * Obtener novedades sin atender
      * @param {number} puestoId - id del puesto
      * @return {json} respuestas para api
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ObtenerNovedadesSinAtender ({ puestoId }) {
      return new Promise((resolve, reject) => {
        db.novedades.ObtenerPorPuesto({ id: puestoId })
          .then((resp) => {
            let novedadesSinAtender = resp.filter((novedad) => {
              if (novedad['fueAtendida'] === '0') {
                return novedad
              }
            })
            resolve(responses.OK(novedadesSinAtender))
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
