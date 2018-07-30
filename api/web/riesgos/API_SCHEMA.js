module.exports = {
  API_1_SCHEMA: { // crear riesgo
    BODY: {
      'minProperties': 7,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'tipoRiesgo': { 'type': 'string', minLength: 2, maxLength: 20 },
        'personasExpuestas': { 'type': 'number', minimum: 0, maximun: 100 },
        'valoracion': { 'type': 'string', minLength: 2, maxLength: 30 },
        'valoracionLiteral': { 'type': 'string', minLength: 2, maxLength: 30 },
        'porcentajeRiesgo': { 'type': 'number', minimum: 0, maximun: 100 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: { // actualizar un riesgo
    BODY: {
      'minProperties': 7,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'tipoRiesgo': { 'type': 'string', minLength: 2, maxLength: 20 },
        'personasExpuestas': { 'type': 'number', minimum: 0, maximun: 100 },
        'valoracion': { 'type': 'string', minLength: 2, maxLength: 30 },
        'valoracionLiteral': { 'type': 'string', minLength: 2, maxLength: 30 },
        'porcentajeRiesgo': { 'type': 'number', minimum: 0, maximun: 100 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: { // eliminar un riesgo
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: { // obtener un riesgo
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: { // obtener riesgos por areas
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_6_SCHEMA: { // obtener riesgos por puestos
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
