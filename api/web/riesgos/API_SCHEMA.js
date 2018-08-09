module.exports = {
  API_1_SCHEMA: { // crear riesgo
    BODY: {
      'minProperties': 3,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'clasificacion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 200 },
        'fecha': { 'fecha': true }
      }
    }
  },
  API_2_SCHEMA: { // actualizar un riesgo
    BODY: {
      'minProperties': 3,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'clasificacion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 200 },
        'fecha': { 'fecha': true }
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
  API_5_SCHEMA: { // obtener un riesgo
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
  // API_5_SCHEMA: { // obtener riesgos por areas
  //   PARAMS: {
  //     'minProperties': 1,
  //     'additionalProperties': false,
  //     'type': 'object',
  //     'properties': {
  //       'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
  //     }
  //   }
  // },
  // API_6_SCHEMA: { // obtener riesgos por puestos
  //   PARAMS: {
  //     'minProperties': 1,
  //     'additionalProperties': false,
  //     'type': 'object',
  //     'properties': {
  //       'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
  //     }
  //   }
  // }
}
