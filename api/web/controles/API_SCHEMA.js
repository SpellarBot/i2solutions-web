module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'type': 'object',
      'properties': {
        'estaImplementado': { 'type': 'boolean' },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'tipo': { 'type': 'string', 'enum': ['fuente', 'medio', 'individuo'] },
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'type': 'object',
      'properties': {
        'controlesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
