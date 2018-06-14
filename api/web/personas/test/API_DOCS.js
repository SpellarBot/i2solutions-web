module.exports = {
  API_1: {
    nombre: 'Obtener todas las personas',
    metodo: 'GET',
    descripcion: 'Obtener todas las personas',
    url: '/api/web/personas',
    params: [],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear persona',
    metodo: 'POST',
    descripcion: 'Crear una persona pero sin anadirla a ningun establecimiento',
    url: '/api/web/personas',
    params: [],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'apellidos', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'correo', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'cedula', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'clave', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'telefono', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'fechaNacimiento', tipo: 'ISOdate', descripcion: ' --- ' },
      { nombre: 'usuario', tipo: 'String', descripcion: ' ?, por definir ' },
      { nombre: 'rol', tipo: 'String', descripcion: ' ?, por definir ' }
    ],
    errors: []
  },
  API_3: {
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
      { nombre: 'cedula', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'clave', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'telefono', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'fechaNacimiento', tipo: 'ISOdate', descripcion: ' --- ' },
      { nombre: 'usuario', tipo: 'String', descripcion: ' ?, por definir ' },
      { nombre: 'rol', tipo: 'String', descripcion: ' ?, por definir ' }
    ],
    errors: []
  },
  API_4: {
    nombre: 'Eliminar Empresa',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/empresas/:empresasId',
    params: [],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Obtener una persona',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
