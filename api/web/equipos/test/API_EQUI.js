module.exports = {
  API_1_EQUI: {
    nombre: 'Crear un equipo',
    codigo: 'API_1',
    descripcion: 'Crear un equipo',
    metodo: 'POST',
    url: '/api/web/equipos',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'fotoUrl',
        casos: [
          { codigo: 'C21', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'format: !url ', valido: false }
        ]
      },
      { nombre: 'cantidad',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C33', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un equipo de forma correcta',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '6': {
        descripcion: 'fotoUrl tipo no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '7': {
        descripcion: 'fotoUrl formato no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'cantidad': { codigo: 'C31' }
        }
      },
      '8': {
        descripcion: 'cantidad tipo no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'cantidad': { codigo: 'C32' }
        }
      },
      '9': {
        descripcion: 'cantidad tamano no valido',
        url: '/api/web/equipos',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'cantidad': { codigo: 'C33' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Actualizar una equipo',
    codigo: 'API_2',
    descripcion: 'Actualizar un equipo',
    metodo: 'PUT',
    url: '/api/web/equipos/:equiposId',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'fotoUrl',
        casos: [
          { codigo: 'C21', descripcion: '\'type\': \'string\', \'format\': \'url\'', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'format: !url ', valido: false }
        ]
      },
      { nombre: 'cantidad',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C33', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'equiposId',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar equipo de forma correcta',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '6': {
        descripcion: 'fotoUrl tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '7': {
        descripcion: 'fotoUrl formato no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '8': {
        descripcion: 'cantidad tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C32' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '9': {
        descripcion: 'cantidad tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C33' }
        },
        params: {
          'equiposId': { codigo: 'C41' }
        }
      },
      '10': {
        descripcion: 'equiposId tipo no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C42' }
        }
      },
      '11': {
        descripcion: 'equiposId tamano no valido',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'cantidad': { codigo: 'C31' }
        },
        params: {
          'equiposId': { codigo: 'C43' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar un equipo',
    codigo: 'API_3',
    descripcion: 'Eliminar un equipo',
    metodo: 'DELETE',
    url: '/api/web/equipos/:equiposId',
    params: [
      { nombre: 'equiposId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar un equipo de forma correcta',
        params: {
          'equiposId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'equiposId no valido tipo de dato',
        params: {
          'equiposId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'equiposId  no valido numero',
        params: {
          'equiposId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'equiposId no exite',
        params: {
          'equiposId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Anadir equipo a un puesto',
    codigo: 'API_4',
    descripcion: 'Anadir equipo a un puesto',
    metodo: 'PUT',
    url: '/api/web/equipos/:equiposId/puestos/:puestosId',
    body: [
    ],
    params: [
      { nombre: 'equiposId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      },
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C13', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Anadir equipo a un puesto de forma correcta',
        params: {
          'equiposId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '2': {
        descripcion: 'equiposId no valido tipo de dato',
        params: {
          'equiposId': { codigo: 'C02' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '3': {
        descripcion: 'equiposId  no valido numero',
        params: {
          'equiposId': { codigo: 'C03' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '4': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'equiposId': { codigo: 'C01' },
          'puestosId': { codigo: 'C12' }
        }
      },
      '5': {
        descripcion: 'puestosId  no valido numero',
        params: {
          'equiposId': { codigo: 'C02' },
          'puestosId': { codigo: 'C13' }
        }
      },
      '6': {
        descripcion: 'equipo no existe',
        params: {
          'equiposId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '7': {
        descripcion: 'puesto no existe',
        params: {
          'equiposId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Anadir equipo a un area',
    codigo: 'API_5',
    descripcion: 'Anadir equipo a un area',
    metodo: 'PUT',
    url: '/api/web/equipos/:equiposId/areas/:areasId',
    params: [
      { nombre: 'equiposId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      },
      { nombre: 'areasId',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C13', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Anadir equipo a un puesto de forma correcta',
        params: {
          'equiposId': { codigo: 'C01' },
          'areasId': { codigo: 'C11' }
        }
      },
      '2': {
        descripcion: 'equiposId no valido tipo de dato',
        params: {
          'equiposId': { codigo: 'C02' },
          'areasId': { codigo: 'C11' }
        }
      },
      '3': {
        descripcion: 'equiposId  no valido numero',
        params: {
          'equiposId': { codigo: 'C03' },
          'areasId': { codigo: 'C11' }
        }
      },
      '4': {
        descripcion: 'areasId no valido tipo de dato',
        params: {
          'equiposId': { codigo: 'C01' },
          'areasId': { codigo: 'C12' }
        }
      },
      '5': {
        descripcion: 'areasId  no valido numero',
        params: {
          'equiposId': { codigo: 'C01' },
          'areasId': { codigo: 'C13' }
        }
      },
      '6': {
        descripcion: 'equiposId no exite',
        params: {
          'equiposId': { codigo: 'C01' },
          'areasId': { codigo: 'C11' }
        }
      },
      '7': {
        descripcion: 'areasId no exite',
        params: {
          'equiposId': { codigo: 'C01' },
          'areasId': { codigo: 'C11' }
        }
      }
    }
  }
}
