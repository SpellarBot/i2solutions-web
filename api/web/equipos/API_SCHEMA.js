module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fotoUrl': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'cantidad': { 'type': 'number', minimum: 1, maximun: 150 },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      },
      'required': ['nombre', 'puestosId', 'cantidad']
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 2,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fotoUrl': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'cantidad': { 'type': 'number', minimum: 1, maximun: 150 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 2,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 2,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_6_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_7_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_8_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'equiposId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
