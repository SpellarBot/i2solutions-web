module.exports = {
  API_1: {
    nombre: 'Obtener todos los puestos de un area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/puestos/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear un puesto',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/puestos',
    params: [
    ],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'descripcion', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Actualizar un puesto',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'descripcion', tipo: 'String', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_4: {
    nombre: 'Obtener un puesto',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Eliminar puesto',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
