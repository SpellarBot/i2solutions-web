module.exports = {
  API_1_EQUI: {
    nombre: 'Crear una novedad',
    codigo: 'API_1',
    descripcion: 'Crear una novedad',
    metodo: 'POST',
    url: '/api/web/novedades',
    body: [
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'prioridad',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', \'enum\': [\'alta\', \'media\', \'baja\'] }', valido: true },
          { codigo: 'C12', descripcion: '\'enum\': ![\'alta\', \'media\', \'baja\']', valido: false }
        ]
      },
      { nombre: 'fotoUrl',
        casos: [
          { codigo: 'C21', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'format: !url ', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear una novedad de forma correcta',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '2': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C02' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '3': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C03' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '4': {
        descripcion: 'prioridad enum no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '5': {
        descripcion: 'fotoUrl tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '6': {
        descripcion: 'fotoUrl formato no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '7': {
        descripcion: 'fecha no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C32' },
          'puestosId': { codigo: 'C41' }
        }
      },
      '8': {
        descripcion: 'puestosId tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C42' }
        }
      },
      '9': {
        descripcion: 'puestosId tamano no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C43' }
        }
      },
      '10': {
        descripcion: 'puestosId no existe',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Actualizar una novedad',
    codigo: 'API_2',
    descripcion: 'Actualizar un novedad',
    metodo: 'PUT',
    url: '/api/web/novedades/:novedadesId',
    body: [
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'prioridad',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', \'enum\': [\'alta\', \'media\', \'baja\'] }', valido: true },
          { codigo: 'C12', descripcion: '\'enum\': ![\'alta\', \'media\', \'baja\']', valido: false }
        ]
      },
      { nombre: 'fotoUrl',
        casos: [
          { codigo: 'C21', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'format: !url ', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'novedadesId',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C53', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar un accidente de forma correcta',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '2': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C02' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '3': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C03' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '4': {
        descripcion: 'prioridad enum no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '5': {
        descripcion: 'fotoUrl tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '6': {
        descripcion: 'fotoUrl formato no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '7': {
        descripcion: 'fecha no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C32' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '8': {
        descripcion: 'puestosId tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C42' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '9': {
        descripcion: 'puestosId tamano no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C43' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '10': {
        descripcion: 'puestosId no existe',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      },
      '11': {
        descripcion: 'novedadesId tipo no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C52' }
        }
      },
      '12': {
        descripcion: 'novedadesId tamano no valido',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C53' }
        }
      },
      '13': {
        descripcion: 'novedadesId no existe',
        url: '/api/web/novedades',
        body: {
          'descripcion': { codigo: 'C01' },
          'prioridad': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'fecha': { codigo: 'C31' },
          'puestosId': { codigo: 'C41' }
        },
        params: {
          'novedadesId': { codigo: 'C51' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar una novedad',
    codigo: 'API_3',
    descripcion: 'Eliminar una novedad',
    metodo: 'DELETE',
    url: '/api/web/novedades/:novedadesId',
    params: [
      { nombre: 'novedadesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar una novedad de forma correcta',
        params: {
          'novedadesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'novedadesId no valido tipo de dato',
        params: {
          'novedadesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'novedadesId  no valido numero',
        params: {
          'novedadesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'novedadesId no exite',
        params: {
          'novedadesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Obtener una novedad',
    codigo: 'API_4',
    descripcion: 'Obtener una novedad',
    metodo: 'GET',
    url: '/api/web/novedades/:novedadesId',
    params: [
      { nombre: 'novedadesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una novedad de forma correcta',
        params: {
          'novedadesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'novedadesId no valido tipo de dato',
        params: {
          'novedadesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'novedadesId  no valido numero',
        params: {
          'novedadesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'novedadesId no exite',
        params: {
          'novedadesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener novedades por establecimiento',
    codigo: 'API_5',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/novedades/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener novedades de forma correcta',
        params: {
          'establecimientosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'establecimientosId no valido tipo de dato',
        params: {
          'establecimientosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'establecimientosId  no valido numero',
        params: {
          'establecimientosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'establecimientosId no exite',
        params: {
          'establecimientosId': { codigo: 'C01' }
        }
      }
    }
  },
  API_6_EQUI: {
    nombre: 'Obtener novedades por area',
    codigo: 'API_6',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/novedades/areas/:areasId',
    params: [
      { nombre: 'areasId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener novedades de forma correcta',
        params: {
          'areasId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'areasId no valido tipo de dato',
        params: {
          'areasId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'areasId  no valido numero',
        params: {
          'areasId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'areasId no exite',
        params: {
          'areasId': { codigo: 'C01' }
        }
      }
    }
  },
  API_7_EQUI: {
    nombre: 'Obtener novedades por puesto',
    codigo: 'API_7',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/novedades/puestos/:puestosId',
    params: [
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener novedades de forma correcta',
        params: {
          'puestosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'puestosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'puestosId  no valido numero',
        params: {
          'puestosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'puestosId no exite',
        params: {
          'puestosId': { codigo: 'C01' }
        }
      }
    }
  }
}
