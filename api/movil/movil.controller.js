const validator = require('validator')
module.exports = ({ responses, MovilDAL }) => {
  const proto = {
    PuestosDeAreaTrabajo ({ areaId }) {
      return new Promise((resolve, reject) => {
        MovilDAL.ObtenerPuestoTrabajoPorAreaId({ areaId })
          .then((puestos) => {
            resolve(responses.OK(puestos))
          }).catch(err => {
            console.error(err)
            reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    CrearNovedad ({ nombre, descripcion, prioridad, fotoUrl, puestoId }) {
      let datos = { nombre, descripcion, prioridad, fotoUrl, puestoId }
      return new Promise((resolve, reject) => {
        MovilDAL.CrearNovedad(datos)
        .then((novedadNueva) => {
          resolve(responses.OK(novedadNueva))
        }).catch(err => {
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    CargarDatos ({ puestoId }) {
      return new Promise((resolve, reject) => {
        MovilDAL.CargarDatos({ puestoId }).then((datos) => {
          resolve(responses.OK(datos))
        }).catch(err => {
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ActualizarEstadoNovedad ({ id, atendida, descripcionAtendida, nombre }) {
      return new Promise((resolve, reject) => {
        let datos = arguments['0']
        MovilDAL.ActualizarEstadoNovedad(datos).then((resp) => {
          resolve(responses.OK(true))
        }).catch(err => {
          console.error(err)
          reject(responses.ERROR_SERVIDOR)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
