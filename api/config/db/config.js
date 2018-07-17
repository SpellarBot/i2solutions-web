const os = require('os')
const datos = () => {
  const usuario = os.hostname()
  if (usuario === 'joelerll-laptop') {
    return {
      'username': 'root',
      'password': 'joelerll',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql',
      'pool': {
        'max': 5,
        'min': 0,
        'acquire': 30000,
        'idle': 10000
      }
    }
  } else if (usuario === 'ALEX-PC') {
    return {
      'username': 'root',
      'password': 'ELGIGAROOT',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql'
    }
  } else if (usuario === 'Roberth-PC') {
    return {
      'username': 'root',
      'password': '1234',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql'
    }
  } else if (usuario === 'LAPTOP-Q9MEDK44') {
    return {
      'username': 'root',
      'password': '123456789',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql'
    }
  } else if (usuario === 'DESKTOP-FJ6A4I5') {
    return {
      'username': 'root',
      'password': 'root',
      'database': 'i2solutions_development',
      'host': '127.0.0.1',
      'logging': false,
      'dialect': 'mysql'
    }
  }
}

module.exports = {
  'development': datos(),
  'testing': {
    'dialect': 'sqlite',
    'storage': ':memory:',
    'logging': false,
    'operatorsAliases': false
  },
  'production': {
    'username': process.env.DATABASE_USER,
    'password': process.env.DATABASE_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DATABASE_HOST,
    'dialect': 'mysql',
    'logging': console.log,
    'pool': {
      'max': 5,
      'min': 0,
      'acquire': 30000,
      'idle': 10000
    }
  }
}
