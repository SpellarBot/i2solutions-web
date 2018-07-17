module.exports = {
  API_1_EQUI: {
    nombre: 'Crear un riesgo',
    codigo: 'API_1',
    descripcion: 'Crear un riesgo',
    metodo: 'POST',
    url: '/api/web/riesgos',
    body: [
      { nombre: 'tipoRiesgo',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'personasExpuestas',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C13', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'valoracion',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'valoracionLiteral',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C33', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'porcentajeRiesgo',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !0', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C63', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un riesgo de forma correcta',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '2': {
        descripcion: 'tipoRiesgo tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C02' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '3': {
        descripcion: 'tipoRiesgo tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C03' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '4': {
        descripcion: 'personasExpuestas tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C12' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '5': {
        descripcion: 'personasExpuestas tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C13' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '6': {
        descripcion: 'valoracion tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C22' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '7': {
        descripcion: 'valoracion tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C23' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '8': {
        descripcion: 'valoracionLiteral tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C32' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '9': {
        descripcion: 'valoracionLiteral tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C33' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '10': {
        descripcion: 'porcentajeRiesgo tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C42' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '11': {
        descripcion: 'porcentajeRiesgo tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C43' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '12': {
        descripcion: 'fecha no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C52' },
          'puestosId': { codigo: 'C61' }
        }
      },
      '13': {
        descripcion: 'puestosId tipo no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C62' }
        }
      },
      '14': {
        descripcion: 'puestosId tamano no valido',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C63' }
        }
      },
      '15': {
        descripcion: 'puestosId no existe',
        url: '/api/web/riesgos',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Actualizar un riesgo',
    codigo: 'API_2',
    descripcion: 'Actualizar un riesgo',
    metodo: 'PUT',
    url: '/api/web/riesgos/:riesgosId',
    body: [
      { nombre: 'tipoRiesgo',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'personasExpuestas',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C13', descripcion: 'minimum: !0 ', valido: false }
        ]
      },
      { nombre: 'valoracion',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'valoracionLiteral',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C33', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'porcentajeRiesgo',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 0 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !0', valido: false }
        ]
      },
      { nombre: 'fecha',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C63', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'riesgosId',
        casos: [
          { codigo: 'C71', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C72', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C73', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un riesgo de forma correcta',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '2': {
        descripcion: 'tipoRiesgo tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C02' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '3': {
        descripcion: 'tipoRiesgo tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C03' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '4': {
        descripcion: 'personasExpuestas tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C12' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '5': {
        descripcion: 'personasExpuestas tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C13' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '6': {
        descripcion: 'valoracion tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C22' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '7': {
        descripcion: 'valoracion tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C23' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '8': {
        descripcion: 'valoracionLiteral tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C32' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '9': {
        descripcion: 'valoracionLiteral tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C33' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '10': {
        descripcion: 'porcentajeRiesgo tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C42' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '11': {
        descripcion: 'porcentajeRiesgo tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C43' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '12': {
        descripcion: 'fecha no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C52' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '13': {
        descripcion: 'puestosId tipo no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C62' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '14': {
        descripcion: 'puestosId tamano no valido',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C63' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '15': {
        descripcion: 'puestosId no existe',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '16': {
        descripcion: 'riesgosId no existe',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '17': {
        descripcion: 'riesgosId no existe',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      },
      '18': {
        descripcion: 'riesgosId no existe',
        body: {
          'tipoRiesgo': { codigo: 'C01' },
          'personasExpuestas': { codigo: 'C11' },
          'valoracion': { codigo: 'C21' },
          'valoracionLiteral': { codigo: 'C31' },
          'porcentajeRiesgo': { codigo: 'C41' },
          'fecha': { codigo: 'C51' },
          'puestosId': { codigo: 'C61' }
        },
        params: {
          'riesgosId': { codigo: 'C71' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar un riesgo',
    codigo: 'API_3',
    descripcion: 'Eliminar un riesgo',
    metodo: 'DELETE',
    url: '/api/web/riesgos/:riesgosId',
    params: [
      { nombre: 'riesgosId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar un puesto de forma correcta',
        params: {
          'riesgosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'riesgosId no valido tipo de dato',
        params: {
          'riesgosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'riesgosId  no valido numero',
        params: {
          'riesgosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'riesgosId no exite',
        params: {
          'riesgosId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Obtener una riesgo',
    codigo: 'API_4',
    descripcion: 'Obtener un riesgo',
    metodo: 'GET',
    url: '/api/web/riesgos/:riesgosId',
    params: [
      { nombre: 'riesgosId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una riesgo de forma correcta',
        params: {
          'riesgosId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'riesgosId no valido tipo de dato',
        params: {
          'riesgosId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'riesgosId  no valido numero',
        params: {
          'riesgosId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'riesgosId no exite',
        params: {
          'riesgosId': { codigo: 'C01' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener riesgos por areas',
    codigo: 'API_5',
    descripcion: 'Obtener riesgos por areas',
    metodo: 'GET',
    url: '/api/web/riesgos/areas/:areasId',
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
        descripcion: 'Obtener riesgos de forma correcta',
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
  API_6_EQUI: {
    nombre: 'Obtener riesgos por puestos',
    codigo: 'API_6',
    descripcion: 'Obtener riesgos por puestos',
    metodo: 'GET',
    url: '/api/web/riesgos/puestos/:puestosId',
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
        descripcion: 'Obtener riesgos de forma correcta',
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
