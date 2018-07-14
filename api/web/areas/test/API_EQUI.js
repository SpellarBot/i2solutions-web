module.exports = {
  API_1_EQUI: {
    nombre: 'Obtener todas las areas de un establecimiento',
    codigo: 'API_1',
    descripcion: 'obtiene todas las areas de un establecimiento',
    metodo: 'GET',
    url: '/api/web/areas/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Con areas existentes',
        params: {
          'establecimientosId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'establecimientosId no es un numero',
        params: {
          'establecimientosId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'establecimientosId debe ser minimo 1',
        params: {
          'establecimientosId': { codigo: 'C3' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Crear un area',
    codigo: 'API_2',
    descripcion: 'Crear un area',
    metodo: 'POST',
    url: '/api/web/areas',
    body: [
      { nombre: 'actividad',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'nombre',
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
      { nombre: 'metrosCuadrados',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C33', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcionLugar',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C43', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      {
        nombre: 'establecimientosId',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C53', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un area de forma correcta',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '2': {
        descripcion: 'actividad tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C2' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '3': {
        descripcion: 'actividad tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C3' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '4': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '5': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C13' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '6': {
        descripcion: 'fotoUrl tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '7': {
        descripcion: 'fotoUrl formato no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '8': {
        descripcion: 'metrosCuadrados tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C32' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '9': {
        descripcion: 'metrosCuadrados tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C33' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '10': {
        descripcion: 'descripcionLugar tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C42' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '11': {
        descripcion: 'descripcionLugar tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C43' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '12': {
        descripcion: 'establecimientosId tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' },
          'establecimientosId': { codigo: 'C51' }
        }
      },
      '13': {
        descripcion: 'establecimientosId tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C42' },
          'establecimientosId': { codigo: 'C51' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Actualizar un area',
    codigo: 'API_2',
    descripcion: 'Actualizar un area',
    metodo: 'PUT',
    url: '/api/web/areas/:areasId',
    body: [
      { nombre: 'actividad',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'nombre',
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
      { nombre: 'metrosCuadrados',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C33', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcionLugar',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C43', descripcion: 'minLength: !2 ', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'areasId',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C53', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un area de forma correcta',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '2': {
        descripcion: 'actividad tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C2' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '3': {
        descripcion: 'actividad tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C3' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '4': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '5': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C13' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '6': {
        descripcion: 'fotoUrl tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C22' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '7': {
        descripcion: 'fotoUrl formato no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C23' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '8': {
        descripcion: 'metrosCuadrados tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C32' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '9': {
        descripcion: 'metrosCuadrados tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C33' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '10': {
        descripcion: 'descripcionLugar tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C42' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '11': {
        descripcion: 'descripcionLugar tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C43' }
        },
        params: {
          'areasId': { codigo: 'C51' }
        }
      },
      '12': {
        descripcion: 'areasId tipo no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C41' }
        },
        params: {
          'areasId': { codigo: 'C52' }
        }
      },
      '13': {
        descripcion: 'areasId tamano no valido',
        url: '/api/web/areas',
        body: {
          'actividad': { codigo: 'C1' },
          'nombre': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C21' },
          'metrosCuadrados': { codigo: 'C31' },
          'descripcionLugar': { codigo: 'C42' }
        },
        params: {
          'areasId': { codigo: 'C53' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Eliminar un area',
    codigo: 'API_4',
    descripcion: 'Borrar un area',
    metodo: 'DELETE',
    url: '/api/web/areas/:areasId',
    params: [
      { nombre: 'areasId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminada una area de forma correcta',
        params: {
          'areasId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'areasId no valido numero',
        params: {
          'areasId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'areasId no valido tipo de dato',
        params: {
          'areasId': { codigo: 'C3' }
        }
      },
      '4': {
        descripcion: 'areasId no exite',
        params: {
          'areasId': { codigo: 'C1' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener un area',
    codigo: 'API_4',
    descripcion: 'Obtener un area',
    metodo: 'GET',
    url: '/api/web/areas/:areasId',
    params: [
      { nombre: 'areasId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una area de forma correcta',
        params: {
          'areasId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'areasId no valido numero',
        params: {
          'areasId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'areasId no valido tipo de dato',
        params: {
          'areasId': { codigo: 'C3' }
        }
      }
    }
  },
  API_6_EQUI: {
    nombre: 'Obtener un areas categorizados por puestos dado un establecimiento',
    codigo: 'API_6',
    descripcion: 'Obtener un areas categorizados por puestos dado un establecimiento',
    metodo: 'GET',
    url: '/api/areas/puestos/establecimientos/:establecimientosId',
    params: [
      { nombre: 'establecimientosId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Con areas existentes',
        params: {
          'establecimientosId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'establecimientosId no es un numero',
        params: {
          'establecimientosId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'establecimientosId debe ser minimo 1',
        params: {
          'establecimientosId': { codigo: 'C3' }
        }
      }
    }
  }
}
