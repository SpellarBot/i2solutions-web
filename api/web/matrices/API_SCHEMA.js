module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 2,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'datos': { 'type': 'string', minLength: 2, maxLength: 5000000 }
      }
    }
  },
  API_2_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'matricesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
