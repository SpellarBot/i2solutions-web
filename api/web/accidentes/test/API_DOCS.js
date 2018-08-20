module.exports = {
  API_1: {
    nombre: 'Crear accidentes',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/accidentes',
    params: [],
    body: [
      { nombre: 'nombre', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'heridos', tipo: 'number', descripcion: ' minimum: 0 ' },
      { nombre: 'atendidoEnEmpresa', tipo: 'boolean', descripcion: ' --- ' },
      { nombre: 'muertos', tipo: 'number', descripcion: ' minimum: 0 ' },
      { nombre: 'fecha', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'number', descripcion: ' minimum: 1 ' },
      { nombre: 'diasPerdidos', tipo: 'number', descripcion: ' minimum: 0, maximun: 360' }
    ],
    errors: []
  },
  API_2: {
    nombre: 'Actualizar accidentes',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/accidentes/:accidentesId',
    params: [
      { nombre: 'accidentesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [
      { nombre: 'nombre', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'descripcion', tipo: 'string', descripcion: ' minLength: 2 ' },
      { nombre: 'heridos', tipo: 'number', descripcion: ' minimum: 0 ' },
      { nombre: 'atendidoEnEmpresa', tipo: 'boolean', descripcion: ' --- ' },
      { nombre: 'muertos', tipo: 'number', descripcion: ' minimum: 0 ' },
      { nombre: 'fecha', tipo: 'fecha', descripcion: ' --- ' },
      { nombre: 'puestosId', tipo: 'number', descripcion: ' minimum: 1 ' },
      { nombre: 'diasPerdidos', tipo: 'number', descripcion: ' minimum: 0, maximun: 360' }
    ],
    errors: []
  },
  API_3: {
    nombre: 'Eliminar accidente',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/accidentes/:accidentesId',
    params: [
      { nombre: 'accidentesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Obtener un accidente',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/accidentes/:accidentesId',
    params: [
      { nombre: 'accidentesId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Obtener accidentes por establecimiento',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/accidentes/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener accidentes por area',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/accidentes/areas/:areasId',
    params: [
      { nombre: 'areasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_7: {
    nombre: 'Obtener accidentes por puesto',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/accidentes/puestos/:puestosId',
    params: [
      { nombre: 'puestosId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
