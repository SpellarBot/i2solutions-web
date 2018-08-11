module.exports = {
  API_1: {
    nombre: 'Crear un control',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/controles',
    params: [
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear un control por un array',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/controles/bulk',
    params: [
    ],
    body: [],
    errors: []
  },
  API_3: {
    nombre: 'Obtener por puestos',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/controles/puestos/:puestosId',
    params: [
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener por riesgos y puestos',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/controles/puestos/:puestosId/riesgos/:riesgosId',
    params: [
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Implementar un control',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/controles/implementar/:controlesId',
    params: [
    ],
    body: [],
    errors: []
  }
}
