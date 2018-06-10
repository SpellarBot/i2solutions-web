// const co = require('co')
module.exports = (app) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
      })
    },
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
