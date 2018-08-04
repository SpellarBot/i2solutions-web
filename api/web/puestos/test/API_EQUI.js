module.exports = {
  API_1_EQUI: {
    nombre: 'Obtener todas las puestos de un area',
    codigo: 'API_1',
    descripcion: 'obtiene todas las puestos de un area',
    metodo: 'GET',
    url: '/api/web/puestos/areas/:areasId',
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
        descripcion: 'Con  existentes',
        params: {
          'areasId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'areasId no es un numero',
        params: {
          'areasId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'areasId debe ser minimo 1',
        params: {
          'areasId': { codigo: 'C3' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Crear un puesto',
    codigo: 'API_2',
    descripcion: 'Crear un puesto',
    metodo: 'POST',
    url: '/api/web/puestos',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      {
        nombre: 'areasId',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C23', descripcion: 'minimum: !1 ', valido: false }
        ]
      },
      {
        nombre: 'fotoUrl',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C33', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un puesto de forma correcta',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'areasId': { codigo: 'C21' },
          'fotoUrl': { codigo: 'C21' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C2' },
          'descripcion': { codigo: 'C11' },
          'areasId': { codigo: 'C21' },
          'fotoUrl': { codigo: 'C31' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C3' },
          'descripcion': { codigo: 'C11' },
          'areasId': { codigo: 'C21' },
          'fotoUrl': { codigo: 'C31' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C12' },
          'areasId': { codigo: 'C21' },
          'fotoUrl': { codigo: 'C31' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C13' },
          'areasId': { codigo: 'C21' },
          'fotoUrl': { codigo: 'C31' }
        }
      },
      '6': {
        descripcion: 'areasId tipo no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'areasId': { codigo: 'C22' },
          'fotoUrl': { codigo: 'C31' }
        }
      },
      '7': {
        descripcion: 'areasId tamano no valido',
        url: '/api/web/puestos',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'areasId': { codigo: 'C23' },
          'fotoUrl': { codigo: 'C31' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Actualizar un puesto',
    codigo: 'API_3',
    descripcion: 'Actualizar un puesto',
    metodo: 'PUT',
    url: '/api/web/puestos/:puestosId',
    body: [
      { nombre: 'nombre',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C3', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'descripcion',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      {
        nombre: 'fotoUrl',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C33', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    params: [
      {
        nombre: 'puestosId',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C22', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C23', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear un puesto de forma correcta',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      },
      '2': {
        descripcion: 'nombre tipo no valido',
        body: {
          'nombre': { codigo: 'C2' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      },
      '3': {
        descripcion: 'nombre tamano no valido',
        body: {
          'nombre': { codigo: 'C3' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      },
      '4': {
        descripcion: 'descripcion tipo no valido',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C12' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      },
      '5': {
        descripcion: 'descripcion tamano no valido',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C13' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      },
      '6': {
        descripcion: 'puestosId tipo no valido',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C22' }
        }
      },
      '7': {
        descripcion: 'puestosId tamano no valido',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C23' }
        }
      },
      '8': {
        descripcion: 'puesto id no existe',
        body: {
          'nombre': { codigo: 'C1' },
          'descripcion': { codigo: 'C11' },
          'fotoUrl': { codigo: 'C31' }
        },
        params: {
          'puestosId': { codigo: 'C21' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Eliminar un puesto',
    codigo: 'API_4',
    descripcion: 'Borrar un puesto',
    metodo: 'DELETE',
    url: '/api/web/puestos/:puestosId',
    params: [
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminada una puesto de forma correcta',
        params: {
          'puestosId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'puestosId no valido numero',
        params: {
          'puestosId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'puestosId': { codigo: 'C3' }
        }
      },
      '4': {
        descripcion: 'puestosId no exite',
        params: {
          'puestosId': { codigo: 'C1' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'Obtener un puesto',
    codigo: 'API_4',
    descripcion: 'Obtener un puesto',
    metodo: 'GET',
    url: '/api/web/puestos/:puestosId',
    params: [
      { nombre: 'puestosId',
        casos: [
          { codigo: 'C1', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C2', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C3', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener una puesto de forma correcta',
        params: {
          'puestosId': { codigo: 'C1' }
        }
      },
      '2': {
        descripcion: 'puestosId no valido numero',
        params: {
          'puestosId': { codigo: 'C2' }
        }
      },
      '3': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'puestosId': { codigo: 'C3' }
        }
      }
    }
  }
}
