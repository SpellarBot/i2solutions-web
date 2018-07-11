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
          { codigo: '13', descripcion: 'ruc valido', valido: true },
          { codigo: '14', descripcion: 'digitos 1-2  valor>24', valido: false },
          { codigo: '15', descripcion: 'digitos 1-2  valor=00', valido: false },
          { codigo: '16', descripcion: '3er digito valor={7,8}', valido: false },
          { codigo: '17', descripcion: 'digitos 11-13 valor<001', valido: false },
          { codigo: '18', descripcion: 'minLength: !13, maxLength: !13', valido: false }
        ]
      },
      { nombre: 'urlFoto',
        casos: [
          { codigo: '19', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: '20', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '21', descripcion: 'format: !url ', valido: false }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '18' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '14' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '15' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '16' },
          'urlFoto': { codigo: '19' }
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
          'ruc': { codigo: '17' },
          'urlFoto': { codigo: '19' }
        }
      },
      '15': {
        descripcion: 'urlFoto tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '20' }
        }
      },
      '16': {
        descripcion: 'urlFoto formato no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'direccion': { codigo: '10' },
          'ruc': { codigo: '13' },
          'urlFoto': { codigo: '21' }
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
      },
      { nombre: 'urlFoto',
        casos: [
          { codigo: '10', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: '11', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: '12', descripcion: 'format: !url ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: '13', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: '14', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: '15', descripcion: 'minimum: !1 ', valido: false }
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
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '2': {
        descripcion: 'nombre no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '2' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '3': {
        descripcion: 'nombre no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '3' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '4': {
        descripcion: 'actividadComercial no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '5' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '5': {
        descripcion: 'actividadComercial no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '6' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '6': {
        descripcion: 'razonSocial no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '3' },
          'razonSocial': { codigo: '8' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '7': {
        descripcion: 'razonSocial no valido tamaño',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '3' },
          'razonSocial': { codigo: '9' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '8': {
        descripcion: 'empresasId no valido tipo de dato',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '14' }
        }
      },
      '9': {
        descripcion: 'empresasId no valido numero',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '15' }
        }
      },
      '10': {
        descripcion: 'empresasId no exite',
        url: '/api/web/empresas/:empresasId',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '10' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '11': {
        descripcion: 'urlFoto tipo no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '11' }
        },
        params: {
          'empresasId': { codigo: '13' }
        }
      },
      '12': {
        descripcion: 'urlFoto formato no válido',
        url: '/api/web/empresas',
        body: {
          'nombre': { codigo: '1' },
          'actividadComercial': { codigo: '4' },
          'razonSocial': { codigo: '7' },
          'urlFoto': { codigo: '12' }
        },
        params: {
          'empresasId': { codigo: '13' }
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
  },
  API_6_EQUI: {
    nombre: 'OBTENER EMPRESAS PARA PAGINA PRINCIPAL FRONT',
    codigo: 'API_6',
    descripcion: 'OBTENER EMPRESAS PARA PAGINA PRINCIPAL FRONT',
    metodo: 'GET',
    url: '/api/web/empresas/:empresasId',
    params: [
      { nombre: 'empresasId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 }', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'empresa con novedades',
        params: {
          'empresasId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'empresa sin novedades',
        params: {
          'empresasId': { codigo: 'C01' }
        }
      },
      '3': {
        descripcion: 'empresasId no valido tipo de dato',
        params: {
          'empresasId': { codigo: 'C02' }
        }
      },
      '4': {
        descripcion: 'empresasId no valido numero',
        params: {
          'empresasId': { codigo: 'C03' }
        }
      },
      '5': {
        descripcion: 'empresas no existe',
        params: {
          'empresasId': { codigo: 'C01' }
        }
      }
    }
  }
}
