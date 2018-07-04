module.exports = {
  API_1_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2 },
        'direccion': { 'type': 'string', minLength: 2 },
        'empresasId': { 'type': 'number', minimum: 1 },
        'ruc': { 'cedula': false }
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2 },
        'direccion': { 'type': 'string', minLength: 2 },
        'empresasId': { 'type': 'number', minimum: 1 },
        'ruc': { 'cedula': false }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
