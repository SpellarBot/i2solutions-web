const DB = require('./db')

const MOVIL = {
  API_1: {
    'type': 'array',
    'items': {
      'type': 'object',
      ...DB.NOVEDADES
    },
    'errorMessage': DB.NOVEDADES_ERRORES
  }
}

module.exports = {
  MOVIL
}

// const PROFESOR_DATOS__PARALELOS = {
//   'minProperties': 4,
//   'additionalProperties': false,
//   'properties': {
//     'id': { 'type': 'string' },
//     'codigo': { 'type': 'string' },
//     'curso': { 'type': 'string' },
//     'nombre': { 'type': 'string' }
//   }
// }

// const PROFESOR_DATOS = {
//   'minProperties': 5,
//   'additionalProperties': false,
//   'properties': {
//     'correo': {
//       'type': 'string',
//       'format': 'email'
//     },
//     'tipo': {
//       'type': 'string',
//       'enum': ['peer', 'titular']
//     },
//     'nombres': { 'type': 'string' },
//     'apellidos': { 'type': 'string' },
//     'paralelos': {
//       'type': 'array',
//       'items': PROFESOR_DATOS__PARALELOS
//     }
//   }
// }

// const ERROR_SERVIDOR = {
//   'properties': {
//     'datos': { 'type': 'string' },
//     'codigoEstado': { 'type': 'integer', 'const': 200 },
//     'estado': { 'type': 'boolean' }
//   },
//   'additionalProperties': false
// }

// const OK_ERROR = {
//   'type': 'object',
//   'properties': {
//     'datos': { 'type': 'string' },
//     'codigoEstado': { 'type': 'integer', 'const': 200 },
//     'estado': { 'type': 'boolean' }
//   },
//   'additionalProperties': false
// }

// const ESTUDIANTE = {
//   'type': 'object',
//   'minProperties': 3,
//   'additionalProperties': false,
//   'properties': {
//     'correo': { 'type': 'string' },
//     'nombres': { 'type': 'string' },
//     'apellidos': { 'type': 'string' }
//   }
// }
