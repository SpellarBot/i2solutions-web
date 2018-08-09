module.exports = {
  API_1: {
    nombre: 'Crear una matriz',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/matrices',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' },
      { nombre: 'datos', tipo: 'JSON', descripcion: ' JSON de datos para la matriz ' }
    ],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Obtener las matrices de un establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/matrices/establecimientos/:establecimientosId',
    params: [
    ],
    body: [],
    errors: []
  },
  API_3: {
    nombre: 'Obtener las matrices de un establecimiento',
    metodo: 'GET',
    descripcion: 'Devuelve archivo en base64',
    url: '/api/web/matrices/descargar/:matricesId',
    params: [
    ],
    body: [],
    errors: []
  }
}
