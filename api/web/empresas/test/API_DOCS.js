module.exports = {
  API_1: {
    nombre: 'Obtener todas las empresas',
    metodo: 'GET',
    descripcion: 'Obtener todas las empresas de i2Solutions',
    url: '/api/web/empresas',
    params: [],
    body: [],
    errors: []
  },
  API_2: {
    nombre: 'Crear empresas',
    metodo: 'POST',
    descripcion: 'Crear una empresa, esto tambien deberia crear un establecimiento por defecto',
    url: '/api/web/empresas',
    params: [],
    body: [],
    errors: []
  },
  API_3: { // empresa no existe?
    nombre: 'Actualizar Empresa',
    metodo: 'PUT',
    descripcion: '',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_4: {
    nombre: 'Eliminar Empresa',
    metodo: 'DELETE',
    descripcion: '',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_5: {
    nombre: 'Obtener una empresa',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  },
  API_6: {
    nombre: 'Obtener una empresa con datos para front',
    metodo: 'GET',
    descripcion: '',
    url: '/api/web/administrador/empresas/:empresasId',
    params: [
      { nombre: 'empresasId', tipo: 'Number', descripcion: ' --- ' }
    ],
    body: [],
    errors: []
  }
}
