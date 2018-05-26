// https://github.com/epoberezkin/ajv-errors
// https://github.com/epoberezkin/ajv#api
// https://jsonschema.net/previous/examples.html
module.exports = {
  NOVEDADES: {
    'minProperties': 3,
    'additionalProperties': false,
    'properties': {
      'id': { 'type': 'number' },
      'nombre': { 'type': 'string' },
      'descripcion': { 'type': 'string' }
    }
  },
  NOVEDADES_ERRORES: {
    type: 'should be an array a',
    properties: {
      nombre: 'should have an integer property "foo"',
      descripcion: 'should have a string property "bar"'
    },
    minProperties: 'should not have properties other than foo',
    _: 'data should have properties "foo" and "bar" only'
  }
}
