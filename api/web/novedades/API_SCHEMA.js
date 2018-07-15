module.exports = {
  API_1_SCHEMA: { // crear novedad
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'descripcion': { 'type': 'string', minLength: 2 },
        'prioridad': { 'type': 'string', 'enum': ['alta', 'media', 'baja'] },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_2_SCHEMA: { // actualizar una novedad
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'descripcion': { 'type': 'string', minLength: 2 },
        'prioridad': { 'type': 'string', 'enum': ['alta', 'media', 'baja'] },
        'fotoUrl': { 'type': 'string', 'format': 'url' },
        'fecha': { 'fecha': true },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'novedadesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: { // eliminar una novedad
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'novedadesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: { // obtener una novedad
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'novedadesId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: { // obtener novedades por establecimiento
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_6_SCHEMA: { // obtener novedades por area
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_7_SCHEMA: { // obtener novedades por puesto
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
