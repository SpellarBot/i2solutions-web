module.exports = {
  API_1: {
    nombre: 'Obtener todos los puestas dada un area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/movil/puestosDeUnArea/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear una novedad',
    metodo: 'POST',
    descripcion: '',
    url: '/api/movil/novedad',
    params: [
    ],
    body: [
      { nombre: 'descripcion', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'prioridad', tipo: 'String', descripcion: ' [alta,media,baja] ' },
      { nombre: 'fotoUrl', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'inspeccionesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Obtener un puesto',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/movil/area/:areasId/puesto/:puestosId/:establecimientosId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
    ],
    errors: []
  },
  API_4: {
    nombre: 'Atender una novedad',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/movil/novedad',
    params: [
    ],
    body: [
      { nombre: 'descripcion', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'prioridad', tipo: 'String', descripcion: ' [alta,media,baja] ' },
      { nombre: 'fotoUrl', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'inspeccionesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  }
}
