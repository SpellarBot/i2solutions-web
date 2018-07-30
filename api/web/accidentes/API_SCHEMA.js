module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'heridos': { 'type': 'number', minimum: 0, maximun: 50 },
        'atendidoEnEmpresa': { 'type': 'boolean' },
        'muertos': { 'type': 'number', minimum: 0, maximun: 50 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'heridos': { 'type': 'number', minimum: 0, maximun: 50 },
        'atendidoEnEmpresa': { 'type': 'boolean' },
        'muertos': { 'type': 'number', minimum: 0, maximun: 50 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'accidentesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
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
  }
}
