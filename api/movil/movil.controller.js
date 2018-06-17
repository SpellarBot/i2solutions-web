module.exports = ({ responses, db }) => {
  const proto = {
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
    CargarDatos ({ puestosId, establecimientosId, areasId }) {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.puestos.obtenerPorId({ id: puestosId }),
          db.novedades.ObtenerPorPuesto({ id: puestosId }),
          db.riesgos.ObtenerPorPuesto({ id: puestosId }),
          db.puestos.obtenerEquipos({ id: puestosId }),
          db.accidentes.obtenerPorPuestoTrabajo({ id: puestosId }),
          db.capacitaciones.ObtenerPorAreas({ id: areasId }),
          db.personasEstablecimientos.CantidaPersonasEstablecimiento({ establecimientosId })
        ])
          .then((datos) => {
            let puesto = datos[0]
            let novedades = datos[1]
            let riesgos = datos[2]
            let detallesAccidentes = datos[4]
            let detallesCapacitaciones = datos[5] // personas que vieron esa capacitacion
            let cantidadEmpleados = datos[6]
            let equiposProteccion = datos[3].map((equipo) => {
              if (equipo['equipos.descripcion'] || equipo['equipos.nombre']) {
                return {
                  descripcion: equipo['equipos.descripcion'],
                  nombre: equipo['equipos.nombre'],
                  fotoUrl: equipo['equipos.fotoUrl'],
                  cantidad: equipo['equipos.equiposPuestos.cantidad']
                }
              } else {
                return {}
              }
            })
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
            let puestoFiltrado = {}
            if (puesto.length !== 0) {
              let puestoTmp = puesto[0]
              puestoFiltrado = {
                id: puestoTmp['id'],
                nombre: puestoTmp['nombre'],
                descripcion: puestoTmp['descripcion'],
                areaId: puestoTmp['areas.id']
              }
            }
            let d = {
              ...puestoFiltrado,
              cantidadEmpleados,
              novedadesSinAtender,
              novedadesAtendidas,
              riesgos,
              equiposProteccion,
              detallesAccidentes,
              detallesCapacitaciones
            }
            resolve(responses.OK(d))
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
