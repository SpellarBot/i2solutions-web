module.exports = {
  API_1: {
    nombre: 'Crear novedad',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/novedades',
    params: [],
    body: [
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'prioridad', tipo: 'string', descripcion: ' \'alta\', \'media\', \'baja\' ' },
      { nombre: 'fotoUrl', tipo: 'string', descripcion: ' url ' },
      { nombre: 'fecha', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
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
    body: [
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'prioridad', tipo: 'string', descripcion: ' \'alta\', \'media\', \'baja\' ' },
      { nombre: 'fotoUrl', tipo: 'string', descripcion: ' url ' },
      { nombre: 'fecha', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
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
  },
  API_5: {
    nombre: 'Obtener novedades por establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/novedades/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener novedades por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/novedades/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_7: {
    nombre: 'Obtener novedades por puesto',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/novedades/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
