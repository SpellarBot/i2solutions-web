module.exports = {
  API_1_SCHEMA: { // crear riesgo
    BODY: {
      'minProperties': 7,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'tipoRiesgo': { 'type': 'string', minLength: 2 },
        'personasExpuestas': { 'type': 'number', minimum: 0 },
        'valoracion': { 'type': 'string', minLength: 2 },
        'valoracionLiteral': { 'type': 'string', minLength: 2 },
        'porcentajeRiesgo': { 'type': 'number', minimum: 0 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: { // actualizar un riesgo
    BODY: {
      'minProperties': 7,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'tipoRiesgo': { 'type': 'string', minLength: 2 },
        'personasExpuestas': { 'type': 'number', minimum: 0 },
        'valoracion': { 'type': 'string', minLength: 2 },
        'valoracionLiteral': { 'type': 'string', minLength: 2 },
        'porcentajeRiesgo': { 'type': 'number', minimum: 0 },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: { // eliminar un riesgo
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: { // obtener un riesgo
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: { // obtener riesgos por areas
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_6_SCHEMA: { // obtener riesgos por puestos
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
