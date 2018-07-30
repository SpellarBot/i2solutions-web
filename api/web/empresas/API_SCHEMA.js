module.exports = {
  API_2_SCHEMA: { // crear una empresa
    BODY: {
      'minProperties': 5,
      // 'additionalProperties': false, // porque el urlFoto no se enviara si la empresa no tiene logo
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'actividadComercial': { 'type': 'string', minLength: 2, maxLength: 50 },
        'razonSocial': { 'type': 'string', minLength: 2, maxLength: 50 },
        'direccion': { 'type': 'string', minLength: 2, maxLength: 50 },
        'urlFoto': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'ruc': { 'cedula': false } // validar que sean solo numero y http://www.sri.gob.ec/web/guest/RUC
      }
    }
  },
  API_3_SCHEMA: { // editar una empresa
    BODY: {
      'minProperties': 3,
      // 'additionalProperties': false,  // porque el urlFoto no se enviara si la empresa no tiene logo
      'type': 'object',
      'properties': {
        'nombre': { 'type': 'string', minLength: 2, maxLength: 50 },
        'actividadComercial': { 'type': 'string', minLength: 2, maxLength: 50 },
        'urlFoto': { 'type': 'string', 'format': 'url', maxLength: 100 },
        'razonSocial': { 'type': 'string', minLength: 2, maxLength: 50 }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: { // eliminar una empresa
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: { // obtener una empresa
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'empresasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_6_SCHEMA: {
    REQUEST: {
      'title': 'Empresas',
      'description': 'Empresas si tienen novedades',
      'type': 'array',
      'items': [{
        'type': 'object',
        'minProperties': 4,
        'properties': {
          'id': { 'type': 'number', minimum: 1 },
          'urlFoto': { 'type': 'string', 'format': 'url' },
          'nombre': { 'type': 'string', minLength: 2 },
          'tieneNovedades': { 'type': 'boolean' } // muestra si existen o no novedades sin atender algun puesto de la empresa
        },
        'required': ['id', 'urlFoto', 'nombre', 'tieneNovedades']
      }]
    }
  }
}
