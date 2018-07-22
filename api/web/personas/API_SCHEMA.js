module.exports = {
  API_1_SCHEMA: { // crear una persona
    BODY: {
      'minProperties': 9,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2 }, // , pattern: '/^[a-zA-Z ]+$/'
        'apellidos': { 'type': 'string', minLength: 2 },
        'correo': { 'type': 'string', 'format': 'email' },
        'cedula': { 'cedula': true },
        'telefono': { 'type': 'string', minLength: 7 }, // max:0931823447 min: 2938373
        'fechaNacimiento': { 'fecha': true },
        'perfilOcupacional': { 'type': 'string', minLength: 2 },
        'usuario': { 'type': 'string', minLength: 2 },
        'rol': { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] }
      }
    }
  },
  API_2_SCHEMA: { // editar una persona
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'nombres': { 'type': 'string', minLength: 2 }, // , pattern: '/^[a-zA-Z ]+$/'
        'apellidos': { 'type': 'string', minLength: 2 },
        'correo': { 'type': 'string', 'format': 'email' },
        'cedula': { 'cedula': true },
        'telefono': { 'type': 'string', minLength: 2 },
        'fechaNacimiento': { 'fecha': true },
        'perfilOcupacional': { 'type': 'string', minLength: 2 },
        'usuario': { 'type': 'string', minLength: 2 },
        'rol': { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_3_SCHEMA: { // borrar una persona
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_4_SCHEMA: { // obtener una persona
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_5_SCHEMA: { // obtener personas por establecimiento
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_6_SCHEMA: { //  obtener personas por areas
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_7_SCHEMA: { //  obtener personas por puestos
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  },
  API_8_SCHEMA: { //  anadir persona a puesto
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1 },
        'puestosId': { 'type': 'number', minimum: 1 }
      }
    }
  }
}
