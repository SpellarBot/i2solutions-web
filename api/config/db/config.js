module.exports = {
  'development': {
    'username': 'root',
    'password': 'joelerll',
    'database': 'i2solutions_development',
    'host': '127.0.0.1',
    'logging': false,
    'dialect': 'mysql'
  },
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
