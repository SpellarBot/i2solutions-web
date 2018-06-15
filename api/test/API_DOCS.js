module.exports = {
  API_1: {
    nombre: 'Autenticarse',
    metodo: 'POST',
    descripcion: '',
    url: '/api/auth/login',
    params: [
    ],
    body: [
      { nombre: 'usuario', tipo: 'String', descripcion: ' --- ' },
      { nombre: 'clave', tipo: 'String', descripcion: ' --- ' }
    ],
    errors: []
  },
  API_2: {
    nombre: 'Verificar validez jwt',
    metodo: 'GET',
    descripcion: '{ Authorization: Bearer token}',
    url: '/api/auth/verify',
    params: [
    ],
    body: [
    ],
    errors: []
  }
}
