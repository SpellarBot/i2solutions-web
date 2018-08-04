module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'tema': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fechaCapacitacion': { 'fecha': true },
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'personas': {
          'type': 'array',
          'items': {
            'type': 'number'
          }
        }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 100 },
        'tema': { 'type': 'string', minLength: 2, maxLength: 50 },
        'fechaCapacitacion': { 'fecha': true }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'capacitacionesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'capacitacionesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'descripcion': 'Capacitaciones por establecimiento',
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
      'descripcion': 'Capacitaciones por areas',
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
      'descripcion': 'Obtener una capacitacion',
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'capacitacionesId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
