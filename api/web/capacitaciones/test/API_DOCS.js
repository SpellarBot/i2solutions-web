module.exports = {
  API_1: {
    nombre: 'Crear capacitacion',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/capacitaciones',
    params: [],
    body: [
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'tema', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'fechaCapacitacion', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'areasId', tipo: 'number', descripcion: ' minimum: 1 ' }
    ],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar capacitacion',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/capacitaciones/:capacitacionId',
    params: [
      { nombre: 'capacitacionId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'tema', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'fechaCapacitacion', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'areasId', tipo: 'number', descripcion: ' minimum: 1 ' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar capacitacion',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/capacitaciones/:capacitacionId',
    params: [
      { nombre: 'capacitacionId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener una capacitacion',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/capacitaciones/:capacitacionId',
    params: [
      { nombre: 'capacitacionId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Obtener por establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/capacitaciones/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/capacitaciones/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
