// https://github.com/epoberezkin/ajv-errors
// https://github.com/epoberezkin/ajv#api
// https://jsonschema.net/previous/examples.html
module.exports = {
  NOVEDADES: {
    'minProperties': 3,
    'additionalProperties': false,
    'properties': {
      'id': { 'type': 'integer', minimum: 1 },
      'nombre': { 'type': 'string', minLength: 1 },
      'descripcion': { 'type': 'string' }
    }
  },
  NOVEDADES_ERRORES: {
    type: 'debe ser un array',
    properties: {
      id: 'debe ser un numero',
      nombre: 'debe ser un string no vacio',
      descripcion: 'debe ser un string no vacio'
    },
    minProperties: 'minimo 3 propiedades'
  }
}
