module.exports = {
  API_1_EQUI: {
    nombre: 'Crear una persona',
    codigo: 'API_1',
    descripcion: 'Crear una persona',
    metodo: 'POST',
    url: '/api/web/personas',
    body: [
      { nombre: 'nombres',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'apellidos',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'correo',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', format: email }', valido: true },
          { codigo: 'C22', descripcion: '\'format\': !\'email\'', valido: false }
        ]
      },
      { nombre: 'cedula',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'cedula\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'cedula\'', valido: false }
        ]
      },
      { nombre: 'telefono',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'boolean\' }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'boolean\'', valido: false }
        ]
      },
      { nombre: 'fechaNacimiento',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'perfilOcupacional',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C63', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'usuario',
        casos: [
          { codigo: 'C71', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C72', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C73', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'rol',
        casos: [
          { codigo: 'C81', descripcion: '{ \'type\': \'string\', \'enum\': [\'admin-i2solutions\', \'inspector-seguridad\', \'jefe-seguridad\', \'admin-empresa\', \'empleado\'] }', valido: true },
          { codigo: 'C82', descripcion: '\'enum\': ![\'alta\', \'media\', \'baja\']', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear una persona de forma correcta',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '2': {
        descripcion: 'nombres tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C02' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '3': {
        descripcion: 'nombres tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '4': {
        descripcion: 'apellidos tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C12' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '5': {
        descripcion: 'apellidos tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '6': {
        descripcion: 'cedula no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C22' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '7': {
        descripcion: 'correo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C32' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '8': {
        descripcion: 'telefono no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C42' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '9': {
        descripcion: 'fechaNacimiento no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C52' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '10': {
        descripcion: 'perfilOcupacional tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C62' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '11': {
        descripcion: 'perfilOcupacional tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C63' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        }
      },
      '12': {
        descripcion: 'usuario tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C72' },
          'rol': { codigo: 'C81' }
        }
      },
      '13': {
        descripcion: 'usuario tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C72' },
          'rol': { codigo: 'C81' }
        }
      },
      '14': {
        descripcion: 'rol no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C82' }
        }
      }
    }
  },
  API_2_EQUI: {
    nombre: 'Crear una persona',
    codigo: 'API_1',
    descripcion: 'Crear una persona',
    metodo: 'POST',
    url: '/api/web/personas',
    body: [
      { nombre: 'nombres',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C03', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'apellidos',
        casos: [
          { codigo: 'C11', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C12', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C13', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'correo',
        casos: [
          { codigo: 'C21', descripcion: '{ \'type\': \'string\', format: email }', valido: true },
          { codigo: 'C22', descripcion: '\'format\': !\'email\'', valido: false }
        ]
      },
      { nombre: 'cedula',
        casos: [
          { codigo: 'C31', descripcion: '{ \'type\': \'cedula\' }', valido: true },
          { codigo: 'C32', descripcion: '\'type\': !\'cedula\'', valido: false }
        ]
      },
      { nombre: 'telefono',
        casos: [
          { codigo: 'C41', descripcion: '{ \'type\': \'boolean\' }', valido: true },
          { codigo: 'C42', descripcion: '\'type\': !\'boolean\'', valido: false }
        ]
      },
      { nombre: 'fechaNacimiento',
        casos: [
          { codigo: 'C51', descripcion: '{ \'type\': \'fecha\' }', valido: true },
          { codigo: 'C52', descripcion: '\'type\': !\'fecha\'', valido: false }
        ]
      },
      { nombre: 'perfilOcupacional',
        casos: [
          { codigo: 'C61', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C62', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C63', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'usuario',
        casos: [
          { codigo: 'C71', descripcion: '{ \'type\': \'string\', minLength: 2 }', valido: true },
          { codigo: 'C72', descripcion: '\'type\': !\'string\'', valido: false },
          { codigo: 'C73', descripcion: 'minLength: !2 ', valido: false }
        ]
      },
      { nombre: 'rol',
        casos: [
          { codigo: 'C81', descripcion: '{ \'type\': \'string\', \'enum\': [\'admin-i2solutions\', \'inspector-seguridad\', \'jefe-seguridad\', \'admin-empresa\', \'empleado\'] }', valido: true },
          { codigo: 'C82', descripcion: '\'enum\': ![\'alta\', \'media\', \'baja\']', valido: false }
        ]
      }
    ],
    params: [
      { nombre: 'personasId',
        casos: [
          { codigo: 'C91', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C92', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C93', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Crear una persona de forma correcta',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '2': {
        descripcion: 'nombres tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C02' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '3': {
        descripcion: 'nombres tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C03' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '4': {
        descripcion: 'apellidos tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C12' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '5': {
        descripcion: 'apellidos tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C13' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '6': {
        descripcion: 'cedula no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C22' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '7': {
        descripcion: 'correo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C32' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '8': {
        descripcion: 'telefono no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C42' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '9': {
        descripcion: 'fechaNacimiento no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C52' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '10': {
        descripcion: 'perfilOcupacional tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C62' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '11': {
        descripcion: 'perfilOcupacional tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C63' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '12': {
        descripcion: 'usuario tipo no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C72' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '13': {
        descripcion: 'usuario tamano no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C73' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '14': {
        descripcion: 'rol no valido',
        url: '/api/web/personas',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C82' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      },
      '15': {
        descripcion: 'personasId tipo no valido',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C92' }
        }
      },
      '16': {
        descripcion: 'personasId tamano no valido',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C93' }
        }
      },
      '17': {
        descripcion: 'personasId no existe',
        body: {
          'nombres': { codigo: 'C01' },
          'apellidos': { codigo: 'C11' },
          'cedula': { codigo: 'C21' },
          'correo': { codigo: 'C31' },
          'telefono': { codigo: 'C41' },
          'fechaNacimiento': { codigo: 'C51' },
          'perfilOcupacional': { codigo: 'C61' },
          'usuario': { codigo: 'C71' },
          'rol': { codigo: 'C81' }
        },
        params: {
          'personasId': { codigo: 'C91' }
        }
      }
    }
  },
  API_3_EQUI: {
    nombre: 'Eliminar una persona',
    codigo: 'API_3',
    descripcion: '',
    metodo: 'DELETE',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Eliminar un accidente de forma correcta',
        params: {
          'personasId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'personasId no valido tipo de dato',
        params: {
          'personasId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'personasId  no valido numero',
        params: {
          'personasId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'personasId no exite',
        params: {
          'personasId': { codigo: 'C01' }
        }
      }
    }
  },
  API_4_EQUI: {
    nombre: 'Obtener una persona',
    codigo: 'API_4',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/personas/:personasId',
    params: [
      { nombre: 'personasId',
        casos: [
          { codigo: 'C01', descripcion: '{ \'type\': \'number\', minimum: 1 }', valido: true },
          { codigo: 'C02', descripcion: '\'type\': !\'number\'', valido: false },
          { codigo: 'C03', descripcion: 'minimum: !1 ', valido: false }
        ]
      }
    ],
    intersecciones: {
      '1': {
        descripcion: 'Obtener un accidente de forma correcta',
        params: {
          'personasId': { codigo: 'C01' }
        }
      },
      '2': {
        descripcion: 'personasId no valido tipo de dato',
        params: {
          'personasId': { codigo: 'C02' }
        }
      },
      '3': {
        descripcion: 'personasId  no valido numero',
        params: {
          'personasId': { codigo: 'C03' }
        }
      },
      '4': {
        descripcion: 'personasId no exite',
        params: {
          'personasId': { codigo: 'C01' }
        }
      }
    }
  },
  API_5_EQUI: {
    nombre: 'OBTENER PERSONAS POR ESTABLECIMIENTO',
    codigo: 'API_5',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/personas/establecimientos/:establecimientosId',
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
        descripcion: 'Obtener un accidente de forma correcta',
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
    nombre: 'OBTENER PERSONAS POR AREA',
    codigo: 'API_6',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/personas/areas/:areasId',
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
        descripcion: 'Obtener un accidente de forma correcta',
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
    nombre: 'OBTENER PERSONAS POR PUESTO',
    codigo: 'API_7',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/personas/puestos/:puestosId',
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
        descripcion: 'Obtener un accidente de forma correcta',
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
  },
  API_8_EQUI: {
    nombre: 'ANADIR UNA PERSONA A UN PUESTO',
    codigo: 'API_8',
    descripcion: '',
    metodo: 'GET',
    url: '/api/web/personas/:personasId/puestos/:puestosId',
    params: [
      { nombre: 'personasId',
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
        descripcion: 'Obtener un accidente de forma correcta',
        params: {
          'personasId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '2': {
        descripcion: 'personasId no valido tipo de dato',
        params: {
          'personasId': { codigo: 'C02' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '3': {
        descripcion: 'personasId  no valido numero',
        params: {
          'personasId': { codigo: 'C03' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '4': {
        descripcion: 'personasId no exite',
        params: {
          'personasId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      },
      '5': {
        descripcion: 'puestosId no valido tipo de dato',
        params: {
          'personasId': { codigo: 'C01' },
          'puestosId': { codigo: 'C12' }
        }
      },
      '6': {
        descripcion: 'puestosId  no valido numero',
        params: {
          'personasId': { codigo: 'C01' },
          'puestosId': { codigo: 'C13' }
        }
      },
      '7': {
        descripcion: 'puestosId no exite',
        params: {
          'personasId': { codigo: 'C01' },
          'puestosId': { codigo: 'C11' }
        }
      }
    }
  }
}
