module.exports = {
  API_1_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'type': 'object',
      'properties': {
        'estaImplementado': { 'type': 'boolean' },
        'descripcion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'tipo': { 'type': 'string', 'enum': ['fuente', 'medio', 'individuo'] },
        'riesgosId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  }
}
