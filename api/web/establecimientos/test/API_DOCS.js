module.exports = {
  API_1: {
    nombre: 'Obtener todos los establecimientos de una empresa',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/establecimientos/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear un establecimiento',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/establecimientos',
    params: [
    ],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'direccion', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'ruc', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Actualizar un establecimiento',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'nombres', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'direccion', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'ruc', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_4: {
    nombre: 'Eliminar Establecimiento',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Datos de establecimientos para front',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/principal/establecimientos/empresas/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
