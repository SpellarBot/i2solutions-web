module.exports = ({ db }) => {
  const proto = {
    ObtenerPuestoTrabajoPorAreaId ({ areaId }) {
      return new Promise((resolve, reject) => {
        db.areas.ObtenerPuestos({ id: areaId })
          .then((puestos) => {
            resolve(puestos)
          }).catch(err => {
            reject(err)
          })
      })
    },
    CrearNovedad (datos) {
      return new Promise((resolve, reject) => {
        db.novedades.Crear(datos)
          .then((novedad) => {
            resolve(novedad)
          }).catch(err => {
            reject(err)
          })
      })
    },
    CargarDatos ({ puestoId }) {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.puestos.obtenerPorId({ id: puestoId }),
          db.novedades.ObtenerPorPuesto({ id: puestoId }),
          db.riesgos.ObtenerPorPuesto({ id: puestoId }),
          db.puestos.obtenerEquipos({ id: puestoId }),
          db.accidentes.obtenerPorPuestoTrabajo({ id: puestoId }),
          db.capacitaciones.ObtenerPorEstablecimiento({ id: puestoId })
        ])
          .then((datos) => {
            let puesto = datos[0]
            let novedades = datos[1]
            let riesgos = datos[2]
            let detallesCapacitaciones = datos[5]
            let detallesAccidentes = datos[4]
            let equiposProteccion = datos[3].map((equipo) => {
              return {
                descripcion: equipo['equipos.descripcion'],
                nombre: equipo['equipos.nombre'],
                fotoUrl: equipo['equipos.fotoUrl'],
                cantidad: equipo['equipos.equiposPuestos.cantidad']
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
            let cantidadEmpleados = puesto.length // revisar
            if (puesto.length !== 0) {
              let puestoTmp = puesto[0]
              puestoFiltrado = {
                id: puestoTmp['id'],
                nombre: puestoTmp['nombre'],
                descripcion: puestoTmp['descripcion'],
                areaId: puestoTmp['areas.id']
              }
            }

            resolve({
              ...puestoFiltrado,
              cantidadEmpleados,
              novedadesSinAtender,
              novedadesAtendidas,
              riesgos,
              equiposProteccion,
              detallesAccidentes,
              detallesCapacitaciones
            })
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    ActualizarEstadoNovedad ({ nombre, id, atendida, descripcionAtendida }) {
      return new Promise((resolve, reject) => {
        let datos = arguments['0']
        db.novedades.Atender(datos)
          .then((resp) => {
            resolve(resp)
          }).catch(err => {
            reject(err)
          })
      })
    },
    ObtenerNovedadesSinAtender ({ puestosId }) {
      return new Promise((resolve, reject) => {
        db.novedades.ObtenerPorPuesto({ id: puestosId })
          .then((resp) => {
            let novedadesSinAtender = resp.filter((novedad) => {
              if (novedad['fueAtendida'] === '0') {
                return novedad
              }
            })
            console.log(novedadesSinAtender)
            resolve(novedadesSinAtender)
          }).catch(err => {
            reject(err)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
