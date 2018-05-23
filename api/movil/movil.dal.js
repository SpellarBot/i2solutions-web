module.exports = ({ db }) => {
  let AreasTrabajo = db.AreasTrabajo
  let AreasTrabajo_PuestosTrabajo = db.AreasTrabajo_PuestosTrabajo
  let PuestosTrabajo = db.PuestosTrabajo
  let Personas_PuestosTrabajo = db.Personas_PuestosTrabajo
  let Novedad = db.Novedad
  let Riesgo = db.Riesgo
  let Accidente = db.Accidente
  let Capacitacion = db.Capacitacion
  const proto = {
    ObtenerPuestoTrabajoPorAreaId ({ areaId }) {
      return new Promise((resolve, reject) => {
        AreasTrabajo.ObtenerPuestos({ id: areaId }).then((puestos) => {
          resolve(puestos)
        }).catch(err => {
          reject(err)
        })
      })
    },
    CrearNovedad (datos) {
      return new Promise((resolve, reject) => {
        Novedad.Crear(datos).then((novedad) => {
          resolve(novedad)
        }).catch(err => {
          reject(err)
        })
      })
    },
    CargarDatos ({ puestoId }) {
      return new Promise((resolve, reject) => {
        Promise.all([
            PuestosTrabajo.obtenerPorId({ id: puestoId }),
            Novedad.ObtenerPorPuesto({ id: puestoId }),
            Riesgo.ObtenerPorPuesto({ id: puestoId }),
            PuestosTrabajo.obtenerEquipos({ id: puestoId }),
            Accidente.obtenerPorPuestoTrabajo({ id: puestoId }),
            Capacitacion.ObtenerPorEstablecimiento({ id: puestoId })
          ])
        .then((datos) => {
          let puesto = datos[0]
          let novedades = datos[1]
          let riesgos = datos[2]
          let detallesCapacitaciones = datos[5]
          let detallesAccidentes = datos[4]
          let equiposProteccion = datos[3].map((equipo) => {
            return {
              descripcion: equipo['EquiposSeguridades.descripcion'],
              nombre: equipo['EquiposSeguridades.nombre'],
              foto_url: equipo['EquiposSeguridades.foto_url'],

            }
          })
          let novedadesSinAtender = novedades.filter((novedad) => {
            if (novedad['fue_atendida'] === '0') {
              return novedad
            }
          })
          let novedadesAtendidas = novedades.filter((novedad) => {
            if (novedad['fue_atendida'] === '1') {
              return novedad
            }
          })
          let puestoFiltrado = {}
          let cantidadEmpleados = puesto.length // revisar
          if (puesto.length != 0) {
            let puestoTmp = puesto[0]
            puestoFiltrado = {
              id: puestoTmp['id'],
              nombre: puestoTmp['nombre'],
              descripcion: puestoTmp['descripcion'],
              area_id: puestoTmp['AreasTrabajos.id']
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
        }).catch(err => {
          reject(err)
        })
      })
    },
    ActualizarEstadoNovedad ({ nombre, id, atendida, descripcionAtendida }) {
      return new Promise((resolve, reject) => {
        let datos = arguments['0']
        Novedad.Atender(datos)
        .then((resp) => {
          resolve(resp)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
