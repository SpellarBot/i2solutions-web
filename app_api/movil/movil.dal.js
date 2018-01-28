module.exports = ({ database, PuestoModel, PuestoDetalleModel, NovedadesModel }) => {
  const proto = {
    CargarDatos ({ areaId, puestoId }) {
      return new Promise((resolve, reject) => {
        PuestoModel.CargarDatos(areaId, puestoId).then((datos) => {
          resolve(datos)
        }).catch(err => {
          reject(err)
        })
      })
    },
    ObtenerTodasNovedadesSinAtender ({ puestoTrabajoId, atendida }) {
      return new Promise((resolve, reject) => {
        function sortfunction (a, b) {
          if (a.prioridad === 'urgente' && b.prioridad === 'alto') {
            return true
          } else if (a.prioridad === 'alto' && b.prioridad === 'medio') {
            return true
          } else if (a.prioridad === 'alto' && b.prioridad === 'bajo') {
            return true
          }
          return false
        }
        NovedadesModel.ObtenerTodasNovedadesSinAtender(puestoTrabajoId, atendida).then((novedades) => {
          let NOVEDADES_CLEAN = novedades.reduce((novedad, resp) => {
            novedad.push({id: resp.id, puesto_trabajo_id: resp.puesto_trabajo_id, descripcion: resp.descripcion, prioridad: resp.prioridad, foto_url: resp.foto_url, atendida: resp.atendida, fechaCreacion: resp.createdAt, descripcionAtendida: resp.descripcionAtendida})
            return novedad
          }, [])
          NOVEDADES_CLEAN.sort(sortfunction)
          resolve(NOVEDADES_CLEAN)
        }).catch(err => {
          reject(err)
        })
      })
    },
    ActualizarEstadoNovedad ({ puestoTrabajoId, novedadId, atendida, descripcionAtendida }) {
      return new Promise((resolve, reject) => {
        NovedadesModel.ActualizarEstadoNovedad(puestoTrabajoId, novedadId, atendida, descripcionAtendida).then((puestoActualizado) => {
          if (!puestoActualizado.nModified) {
            resolve({estado: false, mensaje: 'La novedad no fue actualizada correctamente'})
          } else {
            if (atendida) {
              NovedadesModel.NovedadesNoAtendidasEnPuestoTrabajo(puestoTrabajoId).then((novedades) => {
                let cantidadNovedades = novedades.length
                PuestoDetalleModel.ActualizarCantidadPuestoDeTrabajoPorNumeroNovedades(puestoTrabajoId, cantidadNovedades).then((puestoActualizado) => {
                  PuestoModel.NovedadAtendida(puestoTrabajoId, novedadId).then((puestoActualizado) => {
                    PuestoModel.NovedadAtender(puestoTrabajoId, novedadId).then((puestoActualizado) => {
                      NovedadesModel.ObtenerPorId(novedadId).then((novedad) => {
                        resolve({estado: true, datos: novedad})
                      })
                    })
                  })
                })
              })
            }
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    ObtenerPuestoTrabajoPorAreaId ({ areaId }) {
      return new Promise((resolve, reject) => {
        PuestoModel.ObtenerPuestoTrabajoPorAreaId(areaId).then((puestos) => {
          resolve(puestos)
        }).catch(err => {
          reject(err)
        })
      })
    },
    ObtenerPuestoPorId ({ puestoTrabajoId }) {
      return new Promise((resolve, reject) => {
        PuestoDetalleModel.ObtenerPuestoPorId(puestoTrabajoId).then((puesto) => {
          resolve(puesto)
        }).catch(err => {
          reject(err)
        })
      })
    },
    CrearNovedad ({ puestoTrabajoId, descripcion, prioridad, fotoUrl }) {
      var date = new Date()
      var novedad = new NovedadesModel({
        puesto_trabajo_id: puestoTrabajoId,
        descripcion,
        prioridad,
        foto_url: fotoUrl,
        atendida: false,
        fechaCreacion: date.toISOString()
      })
      return new Promise((resolve, reject) => {
        novedad.CrearNovedad(novedad).then((novedadGuardada) => {
          PuestoDetalleModel.ActualizarCantidadPuestoDeTrabajo(puestoTrabajoId).then((estado) => {
            PuestoModel.AnadirNovedad(puestoTrabajoId, novedadGuardada._id).then((estado) => {
              resolve(novedadGuardada)
            })
          })
        }).catch(err => {
          reject(err)
        })
      })
    },
    ObtenerTodasNovedades () {
      return new Promise((resolve, reject) => {
        NovedadesModel.ObtenerTodasNovedades().then((novedades) => {
          resolve(novedades)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
