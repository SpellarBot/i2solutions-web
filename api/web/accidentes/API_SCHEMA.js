module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'heridos': { 'type': 'number', minimum: 0 },
        'atendidoEnEmpresa': { 'type': 'boolean' },
        'muertos': { 'type': 'number', minimum: 0 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'descripcion': { 'type': 'string', minLength: 2 },
        'heridos': { 'type': 'number', minimum: 0 },
        'atendidoEnEmpresa': { 'type': 'boolean' },
        'muertos': { 'type': 'number', minimum: 0 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
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
  }
}
