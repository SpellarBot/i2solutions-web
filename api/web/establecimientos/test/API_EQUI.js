module.exports = {
  API_1_EQUI: {
    nombre: 'Obtener todas los establecimientos de una empresa',
    codigo: 'API_1',
    descripcion: 'obtiene todas los establecimientos de una empresa',
    metodo: 'GET',
    url: '/api/web/establecimientos/:empresasId',
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Con establecimientos existentes',
        params: {
          'empresasId': { codigo: '1' }
        }
      },
      '2': {
        descripcion: 'empresasId no es un numero',
        params: {
          'empresasId': { codigo: '2' }
        }
      },
      '3': {
        descripcion: 'empresasId debe ser minimo 1',
        params: {
          'empresasId': { codigo: '3' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Crear un establecimiento',
    codigo: 'API_2',
    descripcion: 'Crear un establecimiento',
    metodo: 'POST',
    url: '/api/web/establecimientos',
    body: [
      { nombre: 'nombres',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'direccion',
        casos: [
          { codigo: '4', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '5', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '6', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'empresasId',
        casos: [
          { codigo: '7', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '8', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '9', descripcion: 'minimum: !1 ', valido: false }
        ]
      },
      {
        nombre: 'ruc',
        casos: [
          { codigo: '10', descripcion: 'ruc valido', valido: true },
          { codigo: '11', descripcion: '1-2 digitos valor>24', valido: false },
          { codigo: '12', descripcion: '1-2 digitos valor=00', valido: false },
          { codigo: '13', descripcion: '3er digito valor={7,8}', valido: false },
          { codigo: '14', descripcion: '11-13 digitos valor<001', valido: false },
          { codigo: '15', descripcion: 'minLength: !13, maxLength: !13', valido: false }
        ]
      }
    ],
    params: [
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un establecimiento de forma correcta',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        }
      },
      '2': {
        descripcion: 'nombres tipo no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '2' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        }
      },
      '3': {
        descripcion: 'nombres tamano no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '3' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        }
      },
      '4': {
        descripcion: 'direccion tipo no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '5' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        }
      },
      '5': {
        descripcion: 'direccion tamano no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '6' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        }
      },
      '6': {
        descripcion: 'empresasId tipo no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '8' },
          'ruc': { codigo: '10' }
        }
      },
      '7': {
        descripcion: 'empresasId tamano no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '9' },
          'ruc': { codigo: '10' }
        }
      },
      '8': {
        descripcion: 'ruc 1-2 digitos valor>24',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '11' }
        }
      },
      '9': {
        descripcion: 'ruc 1-2 digitos valor=00',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '12' }
        }
      },
      '10': {
        descripcion: 'ruc 3er digito valor={7,8}',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '13' }
        }
      },
      '11': {
        descripcion: 'ruc 11-13 digitos valor<001',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '14' }
        }
      },
      '12': {
        descripcion: 'ruc tamano no valido',
        url: '/api/web/establecimientos',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '15' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Actualizar un establecimiento',
    codigo: 'API_3',
    descripcion: 'Actualizar un establecimiento',
    metodo: 'PUT',
    url: '/api/web/establecimientos/:establecimientosId',
    body: [
      { nombre: 'nombres',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'direccion',
        casos: [
          { codigo: '4', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '5', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '6', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'empresasId',
        casos: [
          { codigo: '7', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '8', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '9', descripcion: 'minimum: !1 ', valido: false }
        ]
      },
      {
        nombre: 'ruc',
        casos: [
          { codigo: '10', descripcion: 'ruc valido', valido: true },
          { codigo: '11', descripcion: '1-2 digitos valor>24', valido: false },
          { codigo: '12', descripcion: '1-2 digitos valor=00', valido: false },
          { codigo: '13', descripcion: '3er digito valor={7,8}', valido: false },
          { codigo: '14', descripcion: '11-13 digitos valor<001', valido: false },
          { codigo: '15', descripcion: 'minLength: !13, maxLength: !13', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: '16', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '17', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '18', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar un establecimiento de forma correcta',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '2': {
        descripcion: 'nombres tipo no valido',
        body: {
          'nombres': { codigo: '2' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '3': {
        descripcion: 'nombres tamano no valido',
        body: {
          'nombres': { codigo: '3' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '4': {
        descripcion: 'direccion tipo no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '5' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '5': {
        descripcion: 'direccion tamano no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '6' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '6': {
        descripcion: 'empresasId tipo no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '8' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '7': {
        descripcion: 'empresasId tamano no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '9' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '8': {
        descripcion: 'ruc 1-2 digitos valor>24',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '11' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '9': {
        descripcion: 'ruc 1-2 digitos valor=00',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '12' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '10': {
        descripcion: 'ruc 3er digito valor={7,8}',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '13' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '11': {
        descripcion: 'ruc 11-13 digitos valor<001',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '14' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '12': {
        descripcion: 'ruc tamano no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '15' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      },
      '13': {
        descripcion: 'establecimientosId tipo no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '15' }
        },
        params: {
          'establecimientosId': { codigo: '17' }
        }
      },
      '14': {
        descripcion: 'establecimientosId tamano no valido',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '15' }
        },
        params: {
          'establecimientosId': { codigo: '18' }
        }
      },
      '15': {
        descripcion: 'El establecimiento con ese id no existe',
        body: {
          'nombres': { codigo: '1' },
          'direccion': { codigo: '4' },
          'empresasId': { codigo: '7' },
          'ruc': { codigo: '10' }
        },
        params: {
          'establecimientosId': { codigo: '16' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Eliminar un establecimiento',
    codigo: 'API_4',
    descripcion: 'Borrar una establecimiento',
    metodo: 'DELETE',
    url: '/api/web/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminada una empresa de forma correcta',
        params: {
          'establecimientosId': { codigo: '1' }
        }
      },
      '2': {
        descripcion: 'establecimientosId no valido numero',
        params: {
          'establecimientosId': { codigo: '2' }
        }
      },
      '3': {
        descripcion: 'establecimientosId no valido tipo de dato',
        params: {
          'establecimientosId': { codigo: '3' }
        }
      },
      '4': {
        descripcion: 'establecimientosId no exite',
        params: {
          'establecimientosId': { codigo: '1' }
        }
      }
    }
  }
}
