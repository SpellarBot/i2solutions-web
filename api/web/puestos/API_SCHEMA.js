module.exports = {
  API_1_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 3,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 2,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
