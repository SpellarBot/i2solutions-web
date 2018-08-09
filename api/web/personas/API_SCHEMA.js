module.exports = {
  API_1_SCHEMA: { // crear una persona
    BODY: {
      'minProperties': 9,
      'type': 'object',
      'properties': {
        'nombres': { 'nombres': 'string' },
        'apellidos': { 'nombres': 'string' },
        'correo': { 'type': 'string', 'format': 'email', maxLength: 100 },
        'cedula': { 'cedula': true },
        'telefono': { 'type': 'string', minLength: 10, maxLength: 10 },
        'fechaNacimiento': { 'fechaNacimiento': true },
        'perfilOcupacional': { 'type': 'string', minLength: 2, maxLength: 50 },
        'usuario': { 'type': 'string', minLength: 2, maxLength: 25 },
        'rol': { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_2_SCHEMA: { // editar una persona
    BODY: {
      'minProperties': 4,
      'type': 'object',
      'properties': {
        'nombres': { 'nombres': 'string', minLength: 2, maxLength: 30 },
        'apellidos': { 'nombres': 'string', minLength: 2, maxLength: 30 },
        'correo': { 'type': 'string', 'format': 'email' },
        'cedula': { 'cedula': true, minLength: 10, maxLength: 10 },
        'telefono': { 'type': 'string', minLength: 7, maxLength: 10 },
        'fechaNacimiento': { 'fechaNacimiento': true },
        'perfilOcupacional': { 'type': 'string', minLength: 2, maxLength: 50 },
        'usuario': { 'type': 'string', minLength: 2, maxLength: 25 },
        'rol': { 'type': 'string', 'enum': ['admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado'] }
      }
    },
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_3_SCHEMA: { // borrar una persona
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_4_SCHEMA: { // obtener una persona
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_5_SCHEMA: { // obtener personas por establecimiento
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'establecimientosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_6_SCHEMA: { //  obtener personas por areas
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'areasId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_7_SCHEMA: { //  obtener personas por puestos
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_8_SCHEMA: { //  anadir persona a puesto
    PARAMS: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'personasId': { 'type': 'number', minimum: 1, maximun: 500000 },
        'puestosId': { 'type': 'number', minimum: 1, maximun: 500000 }
      }
    }
  },
  API_9_SCHEMA: { // clave crear token
    BODY: {
      'minProperties': 1,
      'additionalProperties': false,
      'type': 'object',
      'properties': {
        'clave': { 'type': 'string', minLength: 5, maxLength: 40 }
      }
    }
  },
  API_10_SCHEMA: { // cambio crear token
    QUERY: {
      'minProperties': 1,
      'type': 'object',
      'properties': {
        'correo': { 'type': 'string', 'format': 'email', maxLength: 100 }
      }
    }
  },
  API_11_SCHEMA: { // clave crear token
    QUERY: {
      'minProperties': 1,
      'type': 'object',
      'properties': {
        'correo': { 'type': 'string', 'format': 'email', maxLength: 100 },
        'usuario': { 'type': 'string', minLength: 2, maxLength: 25 },
        'cedula': { 'type': 'string', minLength: 2, maxLength: 10 }
      }
    }
  }
}
