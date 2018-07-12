module.exports = {
  API_1: {
    nombre: 'Crear accidentes',
    metodo: 'POST',
    descripcion: '',
    url: '/api/web/accidentes',
    params: [],
    body: [],
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
    body: [],
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
  }
}
