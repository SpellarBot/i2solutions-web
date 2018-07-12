module.exports = {
  API_1: {
    nombre: 'Crear novedad',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/novedades',
    params: [],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar novedad',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/novedades/:novedadesId',
    params: [
      { nombre: 'novedadesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar novedad',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/novedades/:novedadesId',
    params: [
      { nombre: 'novedadesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener un novedad',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/novedades/:novedadesId',
    params: [
      { nombre: 'novedadesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
