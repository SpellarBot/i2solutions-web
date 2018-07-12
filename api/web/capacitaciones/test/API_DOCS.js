module.exports = {
  API_1: {
    nombre: 'Crear capacitacion',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/capacitaciones',
    params: [],
    body: [],
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
    body: [],
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
    nombre: 'Obtener un capacitacion',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/capacitaciones/:capacitacionId',
    params: [
      { nombre: 'capacitacionId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
