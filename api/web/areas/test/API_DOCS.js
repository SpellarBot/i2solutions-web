module.exports = {
  API_1: {
    nombre: 'Obtener todas las areas de un establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/areas/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear area',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/areas',
    params: [],
    body: [
      { nombre: 'actividad', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'nombre', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'fotoUrl', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'metrosCuadrados', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'descripcionLugar', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Actualizar un area',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'actividad', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'nombre', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'fotoUrl', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'metrosCuadrados', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'descripcionLugar', tipo: 'String', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_4: {
    nombre: 'Obtener una area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Eliminar Empresa',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/empresas/:empresasId',
    params: [],
    body: [],
    errors: []
  }
}
