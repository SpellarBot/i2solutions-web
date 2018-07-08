module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'tema': { 'type': 'string', minLength: 2 },
        'fechaCapacitacion': { 'type': 'string', 'format': 'date-time' },
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'tema': { 'type': 'string', minLength: 2 },
        'fechaCapacitacion': { 'type': 'string', 'format': 'date-time' }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'capacitacionesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'capacitacionesId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
