module.exports = {
  API_1_EQUI: {
    nombre: 'Crear una capacitacion',
    codigo: 'API_1',
    descripcion: 'Crear una capacitacion',
    metodo: 'POST',
    url: '/api/web/capacitaciones',
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
      { nombre: 'tema',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'fechaCapacitacion',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', type: \'date-time\' EJ: 2018-04-25T04:27:34Z }', valido: true },
          { codigo: 'C32', descripcion: 'type: !string', valido: false },
          { codigo: 'C33', descripcion: 'type: !date-time', valido: false }
        ]
      },
      { nombre: 'areasId',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un capacitacion de forma correcta',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '6': {
        descripcion: 'tema tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C22' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '7': {
        descripcion: 'tema tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C23' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C41' }
        }
      },
      '8': {
        descripcion: 'fechaCapacitacion tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C32' },
          'areasId': { codigo: 'C41' }
        }
      },
      '9': {
        descripcion: 'fechaCapacitacion formato no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C33' },
          'areasId': { codigo: 'C41' }
        }
      },
      '10': {
        descripcion: 'areasId tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C42' }
        }
      },
      '11': {
        descripcion: 'areasId tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' },
          'areasId': { codigo: 'C43' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Actualizar una capacitacion',
    codigo: 'API_2',
    descripcion: 'Actualizar una capacitacion',
    metodo: 'PUT',
    url: '/api/web/capacitaciones/:capacitacionesId',
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
      { nombre: 'tema',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C23', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'fechaCapacitacion',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', type: \'date-time\' EJ: 2018-04-25T04:27:34Z }', valido: true },
          { codigo: 'C32', descripcion: 'type: !string', valido: false },
          { codigo: 'C33', descripcion: 'type: !date-time', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'capacitacionesId',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C43', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Actualizar capacitacion de forma correcta',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C02' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C03' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C12' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C13' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '6': {
        descripcion: 'tema tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C22' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '7': {
        descripcion: 'tema tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C23' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '8': {
        descripcion: 'fechaCapacitacion tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C32' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '9': {
        descripcion: 'fechaCapacitacion formato no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C33' }
        },
        params: {
          'capacitacionesId': { codigo: 'C41' }
        }
      },
      '10': {
        descripcion: 'capacitacionesId tipo no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C42' }
        }
      },
      '11': {
        descripcion: 'capacitacionesId tamano no valido',
        url: '/api/web/capacitaciones',
        body: {
          'nombre': { codigo: 'C01' },
          'descripcion': { codigo: 'C11' },
          'tema': { codigo: 'C21' },
          'fechaCapacitacion': { codigo: 'C31' }
        },
        params: {
          'capacitacionesId': { codigo: 'C43' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar una capacitacion',
    codigo: 'API_3',
    descripcion: 'Eliminar una capacitacion',
    metodo: 'DELETE',
    url: '/api/web/capacitaciones/:capacitacionesId',
    params: [
      { nombre: 'capacitacionesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminada una capacitacion de forma correcta',
        params: {
          'capacitacionesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'capacitacionesId no valido tipo de dato',
        params: {
          'capacitacionesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'capacitacionesId  no valido numero',
        params: {
          'capacitacionesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'capacitacionesId no exite',
        params: {
          'capacitacionesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Obtener una capacitacion',
    codigo: 'API_4',
    descripcion: 'Obtener una capacitacion',
    metodo: 'GET',
    url: '/api/web/capacitaciones/:capacitacionesId',
    params: [
      { nombre: 'capacitacionesId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una capacitacion de forma correcta',
        params: {
          'capacitacionesId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'capacitacionesId no valido tipo de dato',
        params: {
          'capacitacionesId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'capacitacionesId  no valido numero',
        params: {
          'capacitacionesId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'capacitacionesId no exite',
        params: {
          'capacitacionesId': { codigo: 'C01' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener capacitaciones por establecimiento',
    codigo: 'API_5',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/capacitaciones/establecimientos/:establecimientosId',
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
        descripcion: 'Obtener capacitaciones por establecimientos',
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
    nombre: 'Obtener capacitaciones por areas',
    codigo: 'API_6',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/capacitaciones/areas/:areasId',
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
        descripcion: 'Obtener capacitaciones por area',
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
  }
}
