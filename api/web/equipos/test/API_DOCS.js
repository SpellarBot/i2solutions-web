module.exports = {
  API_1: {
    nombre: 'Crear equipo',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/equipos',
    params: [],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar equipo',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/equipos/:equiposId',
    params: [
      { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar equipo',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/equipos/:equiposId',
    params: [
      { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  // API_4: {
  //   nombre: 'Obtener un equipo',
  //   metodo: 'GET',
  //   descripcion: '',
  //   url: '/api/web/equipos/:equiposId',
  //   params: [
  //     { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' }
  //   ],
  //   body: [],
  //   errors: []
  // },
  API_5: {
    nombre: 'ANADIR EQUIPO A UN AREA',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/equipos/:equiposId/areas/:areasId',
    params: [
      { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'ANADIR EQUIPO A UN PUESTO',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/equipos/:equiposId/puestos/:puestosId',
    params: [
      { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'OBTENER EQUIPOS POR AREAS',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/equipos/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_7: {
    nombre: 'OBTENER EQUIPOS POR PUESTOS',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/equipos/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_8: {
    nombre: 'OBTENER UN EQUIPO',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/equipos/:equiposId',
    params: [
      { nombre: 'equiposId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
