const co = require('co')
let URL = process.env.NODE_ENV === 'production' ? 'https://i2s-app.herokuapp.com/' : 'http://localhost:3002/'
const nodemailer = require('nodemailer')
const crypto = require('crypto')

/*
  * Generar string aleatorio para url del cambio de clave
  * @param {string} random string
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
*/
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

/*
  * Para pruebas de correo el development
  * @param {string} correo - correo de la persona
  * @param {string} url
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
*/
function enviarCorreoTest (correo, url) {
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
        <p>Use el siguiente link para crear o cambiar la clave </p>
        <a href="${url}">${url}</a>
      `
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return resolve([true, error])
      } else {
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        return resolve([false, info])
      }
    })
  })
}

/*
  * Enviar correo de gmail
  * @param {string} correo - correo de la persona
  * @param {string} url
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
*/
function enviarCorreoNodemailer (correo, url) {
  return new Promise((resolve, reject) => {
    // http://masashi-k.blogspot.com/2013/06/sending-mail-with-gmail-using-xoauth2.html
    // https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one
    // https://github.com/nodemailer/nodemailer/issues/871
    // https://nodemailer.com/smtp/oauth2/#oauth-2lo
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'i2solutionsapp30',
        pass: 'i2solutionsapp30@'
      }
    })

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
    //             //accessToken: serverConfig.gmail.access_token,
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // });

    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,          // Not SSL
    //     requireTLS: true,
    //     auth: {
    //         type: 'OAuth2',
    //         user: 'i2solutions.ec@gmail.com',
    //         serviceClient: '115505613573447717224',
    //         privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDvFXRqxLAZYgTc\nZRTUOnHvuVwlqFRY75izAH3bdIzL4JWY5F8R7H2sPI8YGQoG8BjrPd8Uh03G31rR\nw2uCyRuo/RX0dKvakLkJ3QzekiIKr633AN4dlGjB2QesWPomf1tsSZNj+TPhy8my\nK78sprjfq2LZBN3mtfaH0EEoKr98PIzE8gogJr3v1v0GLSvnBc0ZidX9d8ejz8eS\nTC/3xGv94ZIvvtVcyKaQvvP9ilNr7K/BlGEIkigrHlmsqik3NTzsn7pq/FvDIpK5\nkuGM9dShiu+6EU752JDU7ammHe/S+Fd3Obbt57/5tjBYY/yUwo50qSlisC7kMZ21\n1D+W4LwfAgMBAAECggEAERjBKvNmvmHuhA4sZ6LITAK+zqiTY4q6qi5CUcOrX9bv\nC7BlBgSZ1gu8ldYQi/92YLgbcD3et3Z4aaCmWwNjmXmDrOf89BO+T7DBf1cG3SnD\n8HJc79ORjC8nZ9EzDja0RHGcex0ycxaeFUIgmSJQ/Rml52v8LEfd2cdwKV2pNMqC\nSlI+i8aBBOAqYXYIWx2llAoybw46G1EC2Jc/u0x1/wTE35ma7GOIeRkutW0nXmnu\nGaUBlFrneBjv7CXrvm3O44FRsGGyMLEXyorqxb1RNWAVaYCpB7x5ntMTkWeqPfER\nA0MqYi2rH5vs7Lk3U8lTkIwoRpP6kwNBkhykNTjDRQKBgQD42AFR5FLTXRm1/xBk\nsJDJMVfgfBkmOTZZaxNfZNfQJwZvjM3DhanXLQmJcbbeSv2pvbHLohfnHqxyiCTk\nlv3wBXtaZSERHZceDU7HAi/+5SrnHn5hOb3IpS0Tyjl6a+qXXCcfpwd3Wv8+76Fj\ngfeB7qGE8fL6NRlexfhO2w3gIwKBgQD19Ziy4R7Kg9EQpEXytqJs4tOtfu4YHTdz\nlTRDZJ56meFJWG8yj55d9BnvzEOBK3XBWPUr0Vor6J22B7bmmN25suHG0O5oCoDp\n//6oef9+kjdLhMOZCF+JDQ3+r3E4G4SP75TWE6mPbRXMJZdOC7z2vC2rxkuT11XU\nudLM7zo11QKBgAq853GtNJXCUrWzx/VQWS8VXgFl2X/4wAujvzZCl713saNmpApn\n3ihW3S59JbL58XA9q0pqODXU8QQQM+dZTKPq2KPR8VdXu4mkcV3NDl0lbnCCtFll\nsHbUCdnsxAYwWfMmGtoWzw+rcZA5rvEoTpHgxj+CYUXCvNGGIWzlrveZAoGBALKt\n+oJo3K+OV0DZth7+4rxrhA+UGG/YOcJz8AXNgPvb8jgQUKfQgeILRRRZteiOo/sU\nHvf4HKOtV3U34X1gLCONekuu2KMojkJwQJYwGpXeruDj0BzKYmzz2Ojel0eFZiYS\njHOA0Ttqqd0mqeZ+zIYKartRUPJUCvyBCkzqtcUJAoGBANSSNTYxrsSaE8xw3ARg\nofsxPDMcT3WdIpM11BvSSsWfmY81++Yey7n22jmmKUs+klLJrEzL2HObShrlP+3H\nAFD9THE35kQhbMataE1U2NDxBFoeMQQa8jYH+F6AWqn0dOWOgA3p6hbtB12BJJe6\ns7xcGAuAOEkYZGg+Geaz8OD0\n-----END PRIVATE KEY-----\n'
    //         // accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
    //     }
    // })

    // transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
    // let accessToken = userTokens[user]
    //   if(!accessToken) {
    //     return callback(new Error('Unknown user'))
    //   } else {
    //     return callback(null, accessToken)
    //   }
    // })

    let mailOptions = {
      from: 'Enviado de <i2solutions.ec@gmail.com>',
      to: correo,
      subject: 'Creación de usuario para I2Solutions',
      text: 'Creación de la clave',
      html: `
        <h1> Cambio o Creación de clave </h1>
        <p>Use el siguiente link para crear </p>
        <a href="${url}">${url}</a>
      `
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
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
    /*
      * Crear una persona
      * @param {json} datos - datos para crear una persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
            // let usuario = datos['usuario']
            let enviarCorreoDevelop = valido && process.env.NODE_ENV === 'development'
            let enviarCorreoProduction = valido && process.env.NODE_ENV === 'production'
            let token = yield genCrypto()
            let correo = datos['correo']
            let url = `${URL}#/crearClave/${token}`
            let err = false
            let mensaje = ''
            if (enviarCorreoDevelop) {
              [err, mensaje] = yield enviarCorreoTest(correo, url)
            } else if (enviarCorreoProduction) {
              [err, mensaje] = yield enviarCorreoNodemailer(correo, url)
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
    /*
      * Obtener todas las personas
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener una persona
      * @param {number} id - id de la persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Actualizar una persona
      * @param {number} id - id del persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Borrrar una persona
      * @param {number} id - eliminar una persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Anadir una persona
      * @param {json} datos - ids de puestos y de persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener todas la personas que pertenecen a un establecimiento
      * @param {number} id - id de una persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener todas las personas por areas
      * @param {number} id - id de la persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Obtener todas las personas de un puesto
      * @param {number} id - id del puesto
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    /*
      * Crear la clave de una persona
      * @param {string} clave - clave que desea
      * @param {string} token - token valido para cambio de clave
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
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
    },
    /*
      * Camviar clave de una persona
      * @param {string} correo - correo de la persona
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    CambioClave ({ correo }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let personasExiste = false
          personasExiste = yield db.personas.ObtenerCorreo({ correo })
          if (personasExiste) {
            let token = yield genCrypto()
            let id = personasExiste['id']
            let tokenGuardado = yield db.personas.CambioClave({ token, id })
            let enviarCorreoDevelop = process.env.NODE_ENV === 'development' && tokenGuardado
            let enviarCorreoProduction = process.env.NODE_ENV === 'production' && tokenGuardado
            let correo = personasExiste['correo']
            let url = `${URL}#/crearClave/${token}`
            let err = false
            let mensaje = ''
            if (enviarCorreoDevelop) {
              [err, mensaje] = yield enviarCorreoTest(correo, url)
            } else if (enviarCorreoProduction) {
              [err, mensaje] = yield enviarCorreoNodemailer(correo, url)
            }
            if (err) {
              console.log(mensaje)
              resolve(responses.NO_OK('El correo no existe'))
            } else {
              resolve(responses.OK('Revise el correo, se envio el url donde podra hacer el cambio de clave'))
            }
          } else {
            resolve(responses.NO_OK('No existe el correo o el usuario'))
          }
        }).catch((err) => {
          console.log(err)
          console.error(err)
          return reject(responses.ERROR_SERVIDOR)
        })
      })
    },
    /*
      * Buscar por los parametros si estos existen
      * @param {string} usuario - nombre del usuario
      * @param {string} cedula -
      * @param {string} correo -
      * @return {json} mensaje de respuesta con formato
      * @creator: Joel Rodriguez
      * @date: 22-08-2018
    */
    ExistenciaDe ({ usuario, cedula, correo }) {
      return new Promise((resolve, reject) => {
        co(function * () {
          let existeUsuario = yield db.personas.ObtenerExistenciaDe(usuario)
          let existeCedula = yield db.personas.ObtenerExistenciaDe(cedula)
          let existeCorreo = yield db.personas.ObtenerExistenciaDe(correo)
          let mensaje = { cedula: false, usuario: false, correo: false }
          if (existeUsuario) {
            mensaje['usuario'] = true
          }
          if (existeCedula) {
            mensaje['cedula'] = true
          }
          if (existeCorreo) {
            mensaje['correo'] = true
          }
          resolve(responses.OK(mensaje))
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
