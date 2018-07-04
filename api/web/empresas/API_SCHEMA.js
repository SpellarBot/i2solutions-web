module.exports = {
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'actividadComercial': { 'type': 'string', minLength: 2 },
        'razonSocial': { 'type': 'string', minLength: 2 },
        'direccion': { 'type': 'string', minLength: 2 },
        'ruc': { 'cedula': false } // validar que sean solo numero y http://www.sri.gob.ec/web/guest/RUC
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 3,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2 },
        'actividadComercial': { 'type': 'string', minLength: 2 },
        'razonSocial': { 'type': 'string', minLength: 2 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
