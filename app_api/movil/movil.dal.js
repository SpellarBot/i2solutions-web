module.exports = ({ database, PuestoModel, PuestoDetalleModel, NovedadesModel }) => {
  const proto = {
    ObtenerPuestoTrabajoPorAreaId ({ areaId }) {
      return new Promise((resolve, reject) => {
        PuestoModel.ObtenerPuestoTrabajoPorAreaId(areaId).then((puestos) => {
          resolve(puestos)
        }).catch(err => {
          // throw new Error('Error en crear novedad DAL: ', err)
          reject(err)
        })
      })
    },
    ObtenerPuestoPorId ({ puestoTrabajoId }) {
      return new Promise((resolve, reject) => {
        PuestoDetalleModel.ObtenerPuestoPorId(puestoTrabajoId).then((puesto) => {
          resolve(puesto)
        }).catch(err => {
          // throw new Error('Error en crear novedad DAL: ', err)
          reject(err)
        })
      })
    },
    CrearNovedad ({ puestoTrabajoId, descripcion, prioridad, fotoUrl }) {
      var novedad = new NovedadesModel({
        puesto_trabajo_id: puestoTrabajoId,
        descripcion,
        prioridad,
        foto_url: fotoUrl
      })
      return new Promise((resolve, reject) => {
        novedad.CrearNovedad(novedad).then((estado) => {
          novedad({})
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
