const co = require('co')
let URL = process.env.NODE_ENV === 'production' ? 'https://i2s-app.herokuapp.com/' : 'http://localhost:3002/'
let domain = process.env.DOMAIN
let apiKey = process.env.APIKEY
const mailgun = require('mailgun-js')({ apiKey: apiKey, domain: domain })
const crypto = require('crypto')

function genCrypto () {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(20, function (err, buf) {
      if (err) {
        reject(err)
      } else {
        var token = buf.toString('hex')
        resolve(token)
      }
    })
  })
}

module.exports = ({ responses, db }) => {
  const proto = {
    Crear (datos) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let { puestosId } = datos
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!puesto) {
            resolve(responses.NO_OK('El id de puestos no existe'))
          } else {
            let rol = datos['rol']
            let valido = rol === 'admin-empresa' | rol === 'inspector-seguridad' | rol === 'jefe-seguridad'
            if (valido) {
              let token = yield genCrypto()
              datos['resetClaveToken'] = token
              // datos['resetClaveExpires'] = Date.now() + 3600000; // 1 hour
            }
            let personaCreada = yield db.personas.Crear(datos)
            let relacionCreada = yield db.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
            if (personaCreada && relacionCreada) {
              let usuario = personaCreada['usuario']
              let enviarCorreo = valido && process.env.NODE_ENV !== 'testing'
              let [err, mensaje] = [false, '']
              if (enviarCorreo) {
                let token = personaCreada['resetClaveToken']
                let correo = personaCreada['correo']
                let url = `${URL}#/crearClave/${token}`
                const enviarCorreo = (correo, url, usuario) => {
                  return new Promise((resolve, reject) => {
                    let data = {
                      from: 'Enviado de <i2solutions.ec@gmail.com>',
                      to: correo,
                      subject: 'Creación de usuario para I2Solutions',
                      text: 'Creación de la clave',
                      html: `
                        <h1> Cambio o Creación de clave </h1>
                        <p>Use el siguiente link para crear o cambiar la clave, solo tiene un intento con el usuario: ${usuario}</p>
                        <a href="${url}">${url}</a>
                      `
                    }
                    mailgun.messages().send(data, function (error, body) {
                      if (error) {
                        resolve([true, error])
                      } else {
                        resolve([false, body])
                      }
                    })
                  })
                }
                [err, mensaje] = yield enviarCorreo(correo, url, usuario)
                if (err) {
                  console.error(mensaje)
                  resolve(responses.NO_OK('El correo no existe'))
                }
              }
              let tmp = JSON.parse(JSON.stringify(personaCreada))
              tmp['puestosId'] = puestosId
              resolve(responses.OK(tmp))
            } else {
              resolve(responses.NO_OK('Ocurrio un error al crearse'))
            }
          }
        }).catch((err) => {
          console.log(err)
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerTodos () {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodos()
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
        db.personas.Obtener({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Actualizar (datos) {
      return new Promise((resolve, reject) => {
        db.personas.Actualizar(datos)
          .then((resp) => {
            if (resp[0].toString() === '1') {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('Persona con ese id no existe'))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    Borrar ({ id }) {
      // corroborar que se elimine de personasPuestos la tabla
      return new Promise((resolve, reject) => {
        db.personas.Borrar({ id })
          .then((resp) => {
            if (!resp) {
              resolve(responses.NO_OK('persona con es id no existe'))
            } else {
              resolve(responses.OK(resp))
            }
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    AnadirAPuesto (datos) {
      let { puestosId, personasId } = datos
      return new Promise((resolve, reject) => {
        co(function * () {
          let persona = yield db.personas.Obtener({ id: personasId })
          let puesto = yield db.puestos.Obtener({ id: puestosId })
          if (!persona) {
            return resolve(responses.NO_OK('persona con es id no existe'))
          } else if (!puesto) {
            return resolve(responses.NO_OK('puesto con es id no existe'))
          } else {
            let resp = yield db.personasPuestos.Crear({ puestosId, personasId })
            return resolve(responses.OK(resp))
          }
        }).catch((err) => {
          if (process.env.NODE_ENV === 'testing') { console.error(err) }
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    ObtenerTodosPorEstablecimiento ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorEstablecimiento({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorAreas ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorAreas({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    ObtenerTodosPorPuestos ({ id }) {
      return new Promise((resolve, reject) => {
        db.personas.ObtenerTodosPorPuestos({ id })
          .then((resp) => {
            resolve(responses.OK(resp))
          }).catch((err) => {
            console.error(err)
            return reject(responses.ERROR_SERVIDOR)
          })
      })
    },
    CrearClave ({ clave, token }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let persona = yield db.personas.ObtenerPorToken({ token })
          if (!persona) {
            resolve(responses.NO_OK('No existe ese token'))
          } else {
            let id = persona['id']
            let claveCreada = yield db.personas.CambiarClave({ clave, id })
            if (claveCreada) {
              resolve(responses.OK(true))
            } else {
              resolve(responses.NO_OK('No se pudo cambiar la clave'))
            }
          }
        }).catch((err) => {
          console.log(err)
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    }
  }
  return Object.assign(Object.create(proto), {})
}
