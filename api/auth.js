const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const responses = require('./responses')
const messages = require('./messages')
const utils = require('./utils')
const db = require('./config/db').db
const co = require('co')
function createAccessToken (user) {
  return jwt.sign({
    data: user
  }, 'secret') // , { expiresIn: '1d' }
}

app.route('/login')
  .post((req, res) => {
    const { usuario, clave } = req.body
    co(function * () {
      let [err, usuarioEncontrado] = yield db.personas.Login({ usuario: usuario.trim(), clave })
      if (!err) {
        let tienePermisoDeLoggearse = usuarioEncontrado['creadaDump'] || usuarioEncontrado['claveCreada']
        if (tienePermisoDeLoggearse) {
          let empresasId = yield db.personas.ObtenerEmpresa({ id: usuarioEncontrado['id'] })
          let token = ''
          if (empresasId) {
            token = createAccessToken({ ...usuarioEncontrado, empresasId })
          } else {
            token = createAccessToken({ ...usuarioEncontrado })
          }
          let resp = responses.OK({ token })
          res.status(resp.codigoEstado)
          res.json(resp)
        } else {
          let resp = responses.NO_OK('El usuario no ha creado su clave')
          res.status(resp.codigoEstado)
          res.json(resp)
        }
      } else {
        let resp = responses.NO_OK(usuarioEncontrado)
        res.status(resp.codigoEstado)
        res.json(resp)
      }
    }).catch(err => {
      let resp = responses.NO_OK(messages.AUTH.AUTH_1.ERROR)
      res.status(resp.codigoEstado)
      res.json(err)
    })
  })

app.route('/verify')
  .all(utils.verify)
  .get((req, res) => {
    res.json(responses.OK('Autorizado'))
  })

module.exports = app
