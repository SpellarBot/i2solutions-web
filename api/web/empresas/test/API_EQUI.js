module.exports = {
  API_1_EQUI: {
    nombre: 'Obtener todas las Empresas',
    codigo: 'API_1',
    descripcion: 'obtiene todas las empresas',
    metodo: 'GET',
    url: '/api/web/empresas',
    intersecciones: {
      '1': {
        descripcion: 'Con empresas existentes',
        url: '/api/web/empresas'
      },
      '2': {
        descripcion: 'Sin empresas existentes',
        url: '/api/web/empresas'
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Crear Empresa',
    codigo: 'API_2',
    descripcion: 'Crear una empresa',
    metodo: 'POST',
    url: '/api/web/empresas',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'actividadComercial',
        casos: [
          { codigo: '4', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '5', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '6', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'razonSocial',
        casos: [
          { codigo: '7', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '8', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '9', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'direccion',
        casos: [
          { codigo: '10', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '11', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '12', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      {
        nombre: 'ruc',
        casos: [
          { codigo: '13', descripcion: '1-2 digitos 00<valor<=24 and 3er digito valor={0,1,2,3,4,5,6,9} and 11-13 digitos 001=<valor<=999', valido: true },
          { codigo: '14', descripcion: '1-2 digitos valor>24', valido: false },
          { codigo: '15', descripcion: '1-2 digitos valor=00', valido: false },
          { codigo: '16', descripcion: '3er digito valor={7,8}', valido: false },
          { codigo: '17', descripcion: '11-13 digitos valor<001', valido: false },
          { codigo: '18', descripcion: 'minLength: !13, maxLength: !13', valido: false }
        ]
      }
    ],
    params: [
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear una empresa de forma correcta',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '2': {
        descripcion: 'nombre tamaño no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '3' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '3': {
        descripcion: 'actividadComercial tamaño no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '2' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '4': {
        descripcion: 'razonSocial tamaño no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '9' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '5': {
        descripcion: 'direccion tamaño no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '12' },
          'ruc': { codigo: '13' }
        }
      },
      '6': {
        descripcion: 'ruc tamaño no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '18' }
        }
      },
      '7': {
        descripcion: 'nombre tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '2' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '8': {
        descripcion: 'actividadComercial tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '5' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '9': {
        descripcion: 'razonSocial tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '8' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' }
        }
      },
      '10': {
        descripcion: 'direccion tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '11' },
          'ruc': { codigo: '13' }
        }
      },
      '11': {
        descripcion: 'ruc 1-2 digitos valor>24',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '14' }
        }
      },
      '12': {
        descripcion: 'ruc 1-2 digitos valor=00',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '15' }
        }
      },
      '13': {
        descripcion: 'ruc 3er digito valor={7,8}',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '16' }
        }
      },
      '14': {
        descripcion: 'ruc 11-13 digitos valor<001',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '17' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Actualizar una empresa',
    codigo: 'API_3',
    descripcion: 'actualizar',
    metodo: 'PUT',
    url: '/api/web/empresas/:empresasId',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'actividadComercial',
        casos: [
          { codigo: '4', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '5', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '6', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'razonSocial',
        casos: [
          { codigo: '7', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: '8', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '9', descripcion: 'minLength: !2 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: '10', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '11', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '12', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar una empresa de forma correcta',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '2': {
        descripcion: 'nombre no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '2' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '3': {
        descripcion: 'nombre no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '3' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '4': {
        descripcion: 'actividadComercial no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '5' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '5': {
        descripcion: 'actividadComercial no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '6' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '6': {
        descripcion: 'razonSocial no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '3' },
          'razonSocial': { codigo: '8' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '7': {
        descripcion: 'razonSocial no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '3' },
          'razonSocial': { codigo: '9' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      },
      '8': {
        descripcion: 'empresasId no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '11' }
        }
      },
      '9': {
        descripcion: 'empresasId no valido numero',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '12' }
        }
      },
      '10': {
        descripcion: 'empresasId no exite',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' }
        },
        params: {
          'empresasId': { codigo: '10' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Borrar una empresa',
    codigo: 'API_4',
    descripcion: 'Borrar',
    metodo: 'DELETE',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '3', descripcion: 'minimum: !1 }', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar una empresa de forma correcta',
        params: {
          'empresasId': { codigo: '1' }
        }
      },
      '2': {
        descripcion: 'empresasId no valido numero',
        params: {
          'empresasId': { codigo: '2' }
        }
      },
      '3': {
        descripcion: 'empresasId no valido tipo de dato',
        params: {
          'empresasId': { codigo: '3' }
        }
      },
      '4': {
        descripcion: 'empresasId no exite',
        params: {
          'empresasId': { codigo: '1' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener una empresa',
    codigo: 'API_5',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: '1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '3', descripcion: 'minimum: !1 }', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una empresa de forma correcta',
        params: {
          'empresasId': { codigo: '1' }
        }
      },
      '2': {
        descripcion: 'empresasId no valido numero',
        params: {
          'empresasId': { codigo: '2' }
        }
      },
      '3': {
        descripcion: 'empresasId no valido tipo de dato',
        params: {
          'empresasId': { codigo: '3' }
        }
      },
      '4': {
        descripcion: 'empresas no existe',
        params: {
          'empresasId': { codigo: '1' }
        }
      }
    }
  }
}
