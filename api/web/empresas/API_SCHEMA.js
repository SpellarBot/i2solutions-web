module.exports = {
  API_2_SCHEMA: {
    BODY: {
      'minProperties': 5,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 1 },
        'actividadComercial': { 'type': 'string', minLength: 1 },
        'razonSocial': { 'type': 'string', minLength: 1 },
        'direccion': { 'type': 'string', minLength: 1 },
        'ruc': { 'type': 'string', minLength: 13, maxLength: 13 } // validar que sean solo numero y http://www.sri.gob.ec/web/guest/RUC
      }
    },
    PARAMS: {

    },
    RESPONSE: {

    }
  }
}
