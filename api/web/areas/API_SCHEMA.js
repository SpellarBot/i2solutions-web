module.exports = {
  API_1_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 5, // por la fotoUrl
      'type': 'object',
      'properties': {
        'actividad': { 'type': 'string', minLength: 2, maxLength: 25 },
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fotoUrl': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'metrosCuadrados': { 'type': 'string', minLength: 2 }, // cambiar a int
        'descripcionLugar': { 'type': 'string', minLength: 2, maxLength: 100 },
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'actividad': { 'type': 'string', minLength: 2, maxLength: 25 },
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fotoUrl': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'metrosCuadrados': { 'type': 'string', minLength: 2 },
        'descripcionLugar': { 'type': 'string', minLength: 2, maxLength: 100 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
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
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    },
    RESPONSE: {

    }
  },
  API_7_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    },
    RESPONSE: {

    }
  }
}
