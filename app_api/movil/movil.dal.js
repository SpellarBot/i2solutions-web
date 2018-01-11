module.exports = ({ database, PuestoModel, PuestoDetalleModel, NovedadesModel }) => {
  const proto = {
    ObtenerTodasNovedadesSinAtender ({ puestoTrabajoId, atendida }) {
      return new Promise((resolve, reject) => {
        NovedadesModel.ObtenerTodasNovedadesSinAtender(puestoTrabajoId, atendida).then((puestosSinAtender) => {
          resolve(puestosSinAtender)
        }).catch(err => {
          reject(err)
        })
      })
    },
    ActualizarEstadoNovedad ({ puestoTrabajoId, novedadId, atendida }) {
      return new Promise((resolve, reject) => {
        NovedadesModel.ActualizarEstadoNovedad(puestoTrabajoId, novedadId, atendida).then((puestoActualizado) => {
          if (!puestoActualizado.nModified) {
            resolve({estado: false, mensaje: 'La novedad no fue actualizada correctamente'})
          } else {
            resolve({estado: true, mensaje: 'La novedad fue actualizada correctamente'})
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
      var novedad = new NovedadesModel({
        puesto_trabajo_id: puestoTrabajoId,
        descripcion,
        prioridad,
        foto_url: fotoUrl,
        atendida: false
      })
      return new Promise((resolve, reject) => {
        novedad.CrearNovedad(novedad).then((estado) => {
          resolve({})
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
