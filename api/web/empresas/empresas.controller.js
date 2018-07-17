const co = require('co')
const _ = require('lodash')
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
            if (datos !== null) {
              datos['establecimientos'] = establecimientos
              return resolve(responses.OK(datos))
            } else {
              return resolve(responses.NO_OK('La empresa no existe'))
            }
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
    },
    Borrar ({ id }) {
      return new Promise((resolve, reject) => {
        db.empresas.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('empresa con es id no existe'))
            } else {
              resolve(responses.OK(resp))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerParaAdministrador () {
      return new Promise((resolve, reject) => {
        Promise.all([
          db.empresas.ObtenerTodos(),
          db.empresas.EmpresasNovedades()
        ])
          .then((values) => {
            let empresasTodas = values[0]
            let empresasNovedades = values[1]
            let empresasLimpiadas = []
            for (let empresa of empresasTodas) {
              let empresaExiste = _.find(empresasNovedades, { id: empresa['id'] })
              if (empresaExiste) {
                empresasLimpiadas.push({
                  id: empresa['id'],
                  nombre: empresa['nombre'],
                  urlFoto: empresa['urlFoto'],
                  actividadComercial: empresa['actividadComercial'],
                  tieneNovedades: empresaExiste['tieneNovedades']
                })
              } else {
                empresasLimpiadas.push({
                  id: empresa['id'],
                  nombre: empresa['nombre'],
                  urlFoto: empresa['urlFoto'],
                  actividadComercial: empresa['actividadComercial'],
                  tieneNovedades: false
                })
              }
            }
            resolve(responses.OK(empresasLimpiadas))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
