const jwt = require('jsonwebtoken')
const responses = require('./responses')
let localize = require('ajv-i18n')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv)
module.exports = {
  schemaFormato (schema, datos) {
    const validate = ajv.compile(schema)
    validate(datos)
    localize.es(validate.errors)
    let errores = validate.errors
    let erroresReturn = null
    if (errores) {
      erroresReturn = {}
      for (let error of errores) {
        let nombre = error['dataPath'].split('/')[1]
        erroresReturn[nombre] = error['message']
      }
      return { err: true, mensaje: `${JSON.stringify(erroresReturn, null, 2)}` }
    }
    return { err: false }
    // console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
  },
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
