module.exports = {
  API_2: {
    REQ: {
      'type': 'object',
      'minProperties': 5,
      'additionalProperties': false,
      'properties': {
        'nombre': { 'type': 'integer', minimum: 1 },
        'actividadComercial': { 'type': 'string', minLength: 1 },
        'razonSocial': { 'type': 'string', minLength: 1 },
        'direccion': { 'type': 'string', minLength: 1 },
        'ruc': { 'type': 'string', minLength: 13, maxLength: 13 }
      }
    }
  }
}
