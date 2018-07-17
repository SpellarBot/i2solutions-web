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
  },
  API_5: {
    nombre: 'Obtener riesgos por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/riesgos/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener riesgos por puestos',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/riesgos/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
