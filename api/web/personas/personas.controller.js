const co = require('co')
const utils = require('../../utils')
let URL = process.env.NODE_ENV === 'production' ? 'https://i2s-app.herokuapp.com/' : 'http://localhost:3002/'
const nodemailer = require('nodemailer')
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

function enviarCorreoTest (correo, url, usuario) {
  return new Promise((resolve, reject) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    secure: false,
    port: 587,
    auth: {
        user: 'yrphn3hb4fi3ovmh@ethereal.email',
        pass: 'SxZM6GXzM52QMSqfUD'
    }
  })
  let mailOptions = {
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
    transporter.sendMail(mailOptions, function(error, info) {
      if(error){
          return resolve([true, error])
      } else {
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        return resolve([false, info])
      }
    })
  })
}

function enviarCorreoNodemailer (correo, url, usuario) {
  return new Promise((resolve, reject) => {
    // let transporter = nodemailer.createTransport({
    //  service: 'gmail',
    //  auth: {
    //         user: process.env.MAILCORREO,
    //         pass: process.env.MAILPASS
    //     }
    // })
    let transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
            user: 'i2solutionsapp30',
            pass: 'i2solutionsapp30@'
        }
    })
    // i2solutionsapp30@
    // i2solutionsapp30
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true, // secure:true for port 465, secure:false for port 587
    //     auth: {
    //         type: 'OAuth2',
    //         user: 'procarewebapp@gmail.com',
    //         clientId: '636471246614-f425frovl75hc6971hpq0hbh77iq4dta.apps.googleusercontent.com',
    //         clientSecret: "pJBQIxcaEN9BAALMKowo6zld",
    //         refreshToken: "1/D0LJMDXjVy3JCB5Wcr7069jLs1-lmtlh2GF-EfqUwVXnCHDk0NJ4sUXqeQuhKk4l"
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // })
    let mailOptions = {
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
    transporter.sendMail(mailOptions, function(error, info) {
      if(error){
          return resolve([true, error])
      } else {
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        return resolve([false, info])
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
            let usuario = datos['usuario']
            let enviarCorreoDevelop = valido && process.env.NODE_ENV === 'development'
            let enviarCorreoProduction = valido && process.env.NODE_ENV === 'production'
            let token = yield genCrypto()
            let correo = datos['correo']
            let url = `${URL}#/crearClave/${token}`
            let err = false, mensaje = ''
            if (enviarCorreoProduction) {
              [err, mensaje] = yield enviarCorreoNodemailer(correo, url, usuario)
            } else if (enviarCorreoDevelop) {
              [err, mensaje] = yield enviarCorreoNodemailer(correo, url, usuario)
            }
            if (err) {
              console.log(mensaje)
              resolve(responses.NO_OK('El correo no existe'))
            } else {
              datos['resetClaveToken'] = token
              let personaCreada = yield db.personas.Crear(datos)
              let relacionCreada = yield db.personasPuestos.Crear({ personasId: personaCreada['id'], puestosId })
              if (personaCreada && relacionCreada) {
                let tmp = JSON.parse(JSON.stringify(personaCreada))
                tmp['puestosId'] = puestosId
                resolve(responses.OK(tmp))
              } else {
                resolve(responses.NO_OK('Ocurrio un error al crearse'))
              }
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
