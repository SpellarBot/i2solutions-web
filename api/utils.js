const jwt = require('jsonwebtoken')
const responses = require('./responses')

module.exports = {
  verify (req, res, next) {
    let token = null
    let bits = req.headers.authorization.split(' ')
    if (bits.length === 2) {
      const scheme = bits[0]
      const credentials = bits[1]
      if (/^Bearer$/i.test(scheme)) {
        token = credentials
        jwt.verify(token, 'secret', function (err, decoded) {
          if (err) {
            let resp = responses.NO_AUTORIZADO
            res.status(resp.codigoEstado)
            res.json(resp)
          } else {
            next()
          }
        })
      }
    } else {
      let resp = responses.NO_ENVIO_JWT
      res.status(resp.codigoEstado)
      res.json(resp)
    }
  },
  rucVerificar (ruc) {
    return true
  },
  cedulaVerificar (cedula) {

  }
}
