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
      { nombre: 'rol', tipo: 'String', descripcion: '\'admin-i2solutions\', \'inspector-seguridad\', \'jefe-seguridad\', \'admin-empresa\', \'empleado\'' }
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
  }
}
