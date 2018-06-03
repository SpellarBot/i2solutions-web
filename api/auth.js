const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const responses = require('./responses')
const messages = require('./messages')
const utils = require('./utils')
const db = require('./config/db').db

function createAccessToken (user) {
  return jwt.sign({
    data: user
  }, 'secret', { expiresIn: '1d' })
}

app.route('/login')
  .post((req, res) => {
    const usuario = req.body
    db.personas.Login(usuario).then((usuarioEncontrado) => {
      if (usuarioEncontrado) {
        const token = createAccessToken(usuarioEncontrado)
        let resp = responses.OK({ token })
        res.status(resp.codigoEstado)
        res.json(resp)
      } else {
        let resp = responses.NO_OK(messages.AUTH.AUTH_1.ERROR)
        res.status(resp.codigoEstado)
        res.json(resp)
      }
    })
  })

app.route('/verify')
  .all(utils.verify)
  .get((req, res) => {
    res.json(responses.OK('Autorizado'))
  })

module.exports = app
