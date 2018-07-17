module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 2,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'cantidad': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 2,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'cantidad': { 'type': 'number', minimum: 1 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 2,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1 },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 2,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1 },
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_6_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_7_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_8_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
