module.exports = {
  API_1: {
    nombre: 'Crear riesgo',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/riesgos',
    params: [],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar riesgo',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/riesgos/:riesgosId',
    params: [
      { nombre: 'riesgosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar riesgo',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/riesgos/:riesgosId',
    params: [
      { nombre: 'riesgosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener un riesgo',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/riesgos/:riesgosId',
    params: [
      { nombre: 'riesgosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
