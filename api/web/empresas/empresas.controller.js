const co = require('co')
module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let empresaCreada = yield db.empresas.Crear(datos)
          let establecimientoCreada = yield db.establecimientos.Crear({
            nombres: 'matriz',
            direccion: datos['direccion'],
            ruc: datos['ruc'],
            empresasId: empresaCreada['id']
          })
          empresaCreada['establecimiento'] = establecimientoCreada
          resolve(responses.OK(empresaCreada))
        }).catch((err) => {
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
        db.empresas.ObtenerTodos()
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Obtener ({ id }) {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.establecimientos.ObtenerPorEmpresas({ empresasId: id }),
          db.empresas.Obtener({ id })
        ])
          .then((resp) => {
            let empresa = resp[1]
            let establecimientos = resp[0]
            let datos = JSON.parse(JSON.stringify(empresa))
            datos['establecimientos'] = establecimientos
            resolve(responses.OK(datos))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
        db.empresas.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('La empresa con ese id no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
