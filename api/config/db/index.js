const Sequelize = require('sequelize')
const mysql = require('mysql')
const fs = require('fs')
const path = require('path')
const config = require('./config')[process.env.NODE_ENV]

const basename = path.basename(module.filename)
const db = {}
let sequelize = new Sequelize(config)

// leer todos los modelos
fs
  .readdirSync(path.join(__dirname, '/models'))
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function (file) {
    let model = sequelize['import'](path.join(__dirname, '/models', file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

const Conectar = () => {
  return new Promise(function (resolve, reject) {
    if (process.env.NODE_ENV === 'development') {
      const sql = `CREATE DATABASE IF NOT EXISTS ${config['database']}`
      let mysqlConnection = mysql.createConnection({
        host: config['host'],
        user: config['username'],
        password: config['password']
      })
      mysqlConnection.query(sql)
      mysqlConnection.end()
    }
    sequelize
      .sync()
      .then(() => {
        if (process.env.NODE_ENV !== 'testing') {
          sequelize.query('SET FOREIGN_KEY_CHECKS=0')
            .then((resp) => { // mysql
              if (process.env.NODE_ENV === 'development') {
                console.log('Connection has been established successfully.')
              }
              return resolve(db)
            })
        } else {
          sequelize.query('PRAGMA foreign_keys = OFF') // para sqlite
          return resolve()
        }
      })
      .catch(err => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Unable to connect to the database:', err)
        }
        console.log(err)
        return reject(err)
      })
  })
}

const Desconectar = () => {
  return new Promise(function (resolve) {
    resolve(sequelize.close())
  })
}

const Limpiar = () => {
  return new Promise(function (resolve) {
    sequelize.sync({force: true}).then((res) => {
      resolve(true)
    })
  })
}

module.exports = {
  Conectar,
  Desconectar,
  Limpiar,
  db
}
