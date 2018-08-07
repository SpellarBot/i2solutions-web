module.exports = {
  API_1: {
    nombre: 'Crear persona',
    metodo: 'POST',
    descripcion: 'La clave se genera en el back y enviar el correo dependiendo del rol',
    url: '/api/web/personas',
    params: [],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'apellidos', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'correo', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'cedula', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'telefono', tipo: 'String', descripcion: ' 0931823448, 2988383 ' },
      { nombre: 'fechaNacimiento', tipo: 'ISOdate', descripcion: ' --- ' },
      { nombre: 'usuario', tipo: 'String', descripcion: ' ?, por definir ' },
      { nombre: 'rol', tipo: 'String', descripcion: '\'admin-i2solutions\', \'inspector-seguridad\', \'jefe-seguridad\', \'admin-empresa\', \'empleado\'' },
      { nombre: 'personasId', tipo: 'Number', descripcion: ' ' }
    ],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar persona',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'apellidos', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'correo', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'cedula', tipo: 'String', descripcion: ' 0931823448, 2988383 ' },
      { nombre: 'telefono', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'fechaNacimiento', tipo: 'ISOdate', descripcion: ' --- ' },
      { nombre: 'usuario', tipo: 'String', descripcion: ' ?, por definir ' },
      { nombre: 'rol', tipo: 'String', descripcion: '\'admin-i2solutions\', \'inspector-seguridad\', \'jefe-seguridad\', \'admin-empresa\', \'empleado\'' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar persona',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener una persona',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Obtener personas por establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener personas por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_7: {
    nombre: 'Obtener personas por puesto',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_8: {
    nombre: 'Anadir una persona a un puesto',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/:personasId/puestos/:puestosId',
    params: [
      { nombre: 'personasId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_09: {
    nombre: 'Crear clave enviando el token',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/personas/crear_clave/:token',
    params: [
      { nombre: 'token', tipo: 'string', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_10: {
    nombre: 'Cambiar clave',
    metodo: 'PUT',
    descripcion: 'Puedo enviar el correo o  el usuario en el body, me acepta cualquiera de los dos para el cambio de clave',
    url: '/api/web/personas/CambioClave/enviarToken',
    params: [
    ],
    body: [
      { nombre: 'correo', tipo: 'string', descripcion: ' --- ' },
      { nombre: 'usuario', tipo: 'string', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_11: {
    nombre: 'Verificador exitencia correo, cedula, usuario',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/buscar/existenciaDe?cedula=0987654321&correo=joel@gmail.com&usuario=joel',
    params: [
    ],
    body: [],
    errors: []
  }
}
