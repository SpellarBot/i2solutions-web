const jwt = require('jsonwebtoken')
const responses = require('./responses')
let localize = require('ajv-i18n')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv)

function verificadorCedulaRuc (identificacion, tipo) {
  if (tipo === 'cedula' && identificacion.length !== 10) {
    return [true, 'cedula debe ser de tamano debe ser 10']
  } else if (tipo === 'ruc' && identificacion.length !== 13) {
    return [true, 'ruc debe ser de tamano debe ser 13']
  }

  let suma = 0
  let residuo = 0
  let pri = false
  let pub = false
  let nat = false
  let numeroProvincias = 24
  let modulo = 11
  let ok = 1
  let i
  let p1, p2, p3, p4, p5, p6, p7, p8, p9

  for (i = 0; i < identificacion.length && ok === 1; i++) {
    let n = parseInt(identificacion.charAt(i))
    if (isNaN(n)) ok = 0
  }
  if (ok === 0) {
    return [true, 'Tiene caracteres que no son numeros']
  }

  if (identificacion.length < 10) {
    return [true, 'Tamano no es válido, menor a 10']
  }

  /* Los primeros dos digitos corresponden al codigo de la provincia */
  let provincia = +identificacion.substring(0, 2)
  if (provincia < 1 || provincia > numeroProvincias) {
    return [true, 'El código de la provincia (dos primeros dígitos) es inválido, debe ser entre 01 y 24']
  }
  /* Aqui almacenamos los digitos de la cedula en variables. */
  let d1 = +identificacion.substring(0, 1)
  let d2 = +identificacion.substring(1, 2)
  let d3 = +identificacion.substring(2, 3)
  let d4 = +identificacion.substring(3, 4)
  let d5 = +identificacion.substring(4, 5)
  let d6 = +identificacion.substring(5, 6)
  let d7 = +identificacion.substring(6, 7)
  let d8 = +identificacion.substring(7, 8)
  let d9 = +identificacion.substring(8, 9)
  let d10 = +identificacion.substring(9, 10)
  /* El tercer digito es: */
  /* 9 para sociedades privadas y extranjeros   */
  /* 6 para sociedades publicas */
  /* menor que 6 (0,1,2,3,4,5) para personas naturales */
  if (d3 === 7 || d3 === 8) {
    return [true, 'El tercer dígito ingresado es inválido: debe ser 9 para sociedades privadas y extranjeros, 6 para sociedades publicas, menor que 6 (0,1,2,3,4,5) para personas naturales']
    // this.mensajeSnackbar = 'El tercer dígito ingresado es inválido'
    // this.snackbar = true
    // return false
  }
  /* Solo para personas naturales (modulo 10) */
  if (d3 < 6) {
    nat = true
    p1 = d1 * 2; if (p1 >= 10) p1 -= 9
    p2 = d2 * 1; if (p2 >= 10) p2 -= 9
    p3 = d3 * 2; if (p3 >= 10) p3 -= 9
    p4 = d4 * 1; if (p4 >= 10) p4 -= 9
    p5 = d5 * 2; if (p5 >= 10) p5 -= 9
    p6 = d6 * 1; if (p6 >= 10) p6 -= 9
    p7 = d7 * 2; if (p7 >= 10) p7 -= 9
    p8 = d8 * 1; if (p8 >= 10) p8 -= 9
    p9 = d9 * 2; if (p9 >= 10) p9 -= 9
    modulo = 10
  }
  /* Solo para sociedades públicas (modulo 11) */
  /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
  if (d3 === 6) {
    pub = true
    p1 = d1 * 3
    p2 = d2 * 2
    p3 = d3 * 7
    p4 = d4 * 6
    p5 = d5 * 5
    p6 = d6 * 4
    p7 = d7 * 3
    p8 = d8 * 2
    p9 = 0
  }

  /* Solo para entidades privadas (modulo 11) */
  if (d3 === 9) {
    pri = true
    p1 = d1 * 4
    p2 = d2 * 3
    p3 = d3 * 2
    p4 = d4 * 7
    p5 = d5 * 6
    p6 = d6 * 5
    p7 = d7 * 4
    p8 = d8 * 3
    p9 = d9 * 2
  }

  suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9
  residuo = suma % modulo
  /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo */
  let digitoVerificador = residuo === 0 ? 0 : modulo - residuo

  /* ahora comparamos el elemento de la posicion 10 con el dig. ver. */
  if (pub === true) {
    if (digitoVerificador !== d9 && identificacion.length === 13) {
      return [true, 'El ruc de la empresa del sector público es incorrecto']
    }
    /* El ruc de las empresas del sector publico terminan con 0001 */
    if (identificacion.substr(9, 14) !== '0001' && identificacion.length === 13) {
      return [true, 'El ruc de la empresa del sector público debe terminar con 0001']
    }
  }

  if (pri === true) {
    if (digitoVerificador !== d10 && identificacion.length === 13) {
      return [true, 'El ruc de la empresa del sector privado es incorrecto']
    }
    if (identificacion.substr(10, 14) !== '001' && identificacion.length === 13) {
      return [true, 'El ruc de la empresa del sector privado debe terminar con 001']
    }
  }
  if (nat === true) {
    if (digitoVerificador !== d10 && identificacion.length === 10) {
      return [true, 'El número de cédula de la persona natural es incorrecto']
    }
    if (identificacion.length > 10 && identificacion.substr(10, 14) !== '001') {
      return [true, 'El ruc de la persona natural debe terminar con 001']
    }
  }
  return [false, '']
}

ajv.addKeyword('cedula', {
  validate: function xyz (schema, data) {
    xyz.errors = []
    let type = 'cedula'
    if (!schema) {
      type = 'ruc'
    }
    let [ err, mensaje ] = verificadorCedulaRuc(`${data}`, type)
    if (err) {
      xyz.errors.push({
        keyword: type,
        message: mensaje,
        params: {
          keyword: type
        }
      })
    }
    return !err
  },
  errors: true
})
// const validator = require('validator')

// ajv.addKeyword('date-custom', function (data) {
//   validate: function xyz (schema, data) {
//     xyz.errors = []
//     let type = 'cedula'
//     if (!schema) {
//       type = 'ruc'
//     }
//     let [ err, mensaje ] = verificadorCedulaRuc(`${data}`, type)
//     if (err) {
//       xyz.errors.push({
//         keyword: type,
//         message: mensaje,
//         params: {
//           keyword: type
//         }
//       })
//     }
//     return !err
//     // return validator.isRFC3339(data)
//   }
//   errors: true
// })

module.exports = {
  jsonToInt (json, propiedades) {
    let datos = { }
    for (let propiedad of propiedades) {
      let numero = parseInt(json[propiedad])
      if (!isNaN(numero)) {
        datos[propiedad] = numero
      } else {
        datos[propiedad] = ''
      }
    }
    return datos
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
  // return [err, mensajeError]
  verificadorCedulaRuc,
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
      return [true, erroresReturn]
    }
    return [false, {}]
    // console.log(ajv.errorsText(validate.errors, { separator: '\n' }))
  }
}
