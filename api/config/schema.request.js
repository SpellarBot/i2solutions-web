const DB = require('./schema.db')

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
