// const DB = require('./db')

const MOVIL = {
  API_1: {
    'minProperties': 1,
    'additionalProperties': false,
    'type': 'object',
    'properties': {
      'puestosId': { 'type': 'number' }
    },
    'errorMessage': {
      type: 'debe ser un objeto',
      properties: {
        puestosId: 'debe ser un string no vacio'
      },
      minProperties: 'minimo 3 propiedades'
    }
  }
}

module.exports = {
  MOVIL
}
