module.exports = {
  API_1_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2, maxLength: 50 },
        'direccion': { 'type': 'string', minLength: 2, maxLength: 150 },
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'ruc': { 'cedula': false }
      }
    }
  },
  API_3_SCHEMA: {
    BODY: {
      'minProperties': 4,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2, maxLength: 50 },
        'direccion': { 'type': 'string', minLength: 2, maxLength: 150 },
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'ruc': { 'cedula': false }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: {
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    },
    REQUEST: {
      'title': 'Establecimientos',
      'description': 'Datos de establecimientos para front',
      'type': 'array',
      'items': [{
        'type': 'object',
        'minProperties': 10,
        'additionalProperties': false,
        'properties': {
          'id': { 'type': 'number', minimum: 1 },
          'nombres': { 'type': 'string', minLength: 2 },
          'direccion': { 'type': 'string', minLength: 2 },
          'ruc': { 'cedula': false },
          'cantidadAreas': { 'type': 'number', minimum: 0 },
          'cantidadPuestos': { 'type': 'number', minimum: 0 },
          'cantidadPersonas': { 'type': 'number', minimum: 0 },
          'cantidadNovadadesSinAtender': { 'type': 'number', minimum: 0 },
          'cantidadAccidentes': { 'type': 'number', minimum: 0 },
          'cantidadCapacitaciones': { 'type': 'number', minimum: 0 }
        }
      }]
    }
  },
  API_6_SCHEMA: {
    QUERY: {
      'minProperties': 1,
      'type': 'array',
      'items': [
        {
          'ruc': { 'cedula': false }
        }
      ]
    }
  }
}
