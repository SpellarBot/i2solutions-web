module.exports = {
  "development": {
    "username": "root",
    "password": "joelerll",
    "database": "i2solutions_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  }
}
