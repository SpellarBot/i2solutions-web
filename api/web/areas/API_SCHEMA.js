module.exports = {
  API_1_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 5, // por la fotoUrl
      'type': 'object',
      'properties': {
        'actividad': { 'type': 'string', minLength: 2 },
        'nombre': { 'type': 'string', minLength: 2 },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'metrosCuadrados': { 'type': 'string', minLength: 2 },
        'descripcionLugar': { 'type': 'string', minLength: 2 },
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'actividad': { 'type': 'string', minLength: 2 },
        'nombre': { 'type': 'string', minLength: 2 },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'metrosCuadrados': { 'type': 'string', minLength: 2 },
        'descripcionLugar': { 'type': 'string', minLength: 2 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
