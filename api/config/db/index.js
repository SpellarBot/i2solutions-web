const Sequelize = require('sequelize')
const mysql = require('mysql')
const fs        = require('fs')
const path      = require('path')
const basename  = path.basename(module.filename)
const db = {}

// http://corpus.hubwiz.com/2/node.js/21105748.html
// http://docs.sequelizejs.com/manual/tutorial/migrations.html
// https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync
// https://github.com/sequelize/cli/blob/master/docs/README.md

let database = `i2solutions_${process.env.NODE_ENV}`
if (process.env.HEROKU) {
  database = process.env.DB_NAME
}
// console.log(process.env.DATABASE_HOST)
let logging = true
if (process.env.NODE_ENV === 'testing')
  logging = false

let sequelize = {}
if (process.env.NODE_ENV === 'testing') {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
    operatorsAliases: false
  })
} else {
  sequelize = new Sequelize({
    dialect: 'mysql',
    operatorsAliases: false,
    host: process.env.DATABASE_HOST,
    database,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    logging: console.log
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // },
  })
}

// sequelize = new Sequelize({
//     dialect: 'mysql',
//     operatorsAliases: false,
//     host: process.env.DATABASE_HOST,
//     database,
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     logging
//     // pool: {
//     //   max: 5,
//     //   min: 0,
//     //   acquire: 30000,
//     //   idle: 10000
//     // },
//   })

fs
  .readdirSync(__dirname + '/models')
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    let model = sequelize['import'](path.join(__dirname + '/models', file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
// https://gist.github.com/JoeKarlsson/ebb1c714466ae3de88ae565fa9ba4779
const Conectar = () => {
  return new Promise(function(resolve, reject) {
    if (process.env.NODE_ENV !== 'production') {
      const sql = `CREATE DATABASE IF NOT EXISTS ${database}`
      if (process.env.NODE_ENV !== 'testing') {
        let mysqlConnection = mysql.createConnection({
          host: process.env.DATABASE_HOST,
          user:  process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD
        })
        mysqlConnection.query(sql)
        mysqlConnection.end()
      }
      // sequelize.sync()
    } else {
      // sequelize.sync()
    }
    sequelize
    .sync()
    .then(() => {
      if (process.env.NODE_ENV !== 'testing') {
        sequelize.query('set FOREIGN_KEY_CHECKS=0').then((resp) => { // para mysql
          if (process.env.NODE_ENV === 'development')
            console.log('Connection has been established successfully.')
          return resolve(db)
        })
      } else {
        sequelize.query('PRAGMA foreign_keys = OFF') // para sqlite
        return resolve()
      }
    })
    .catch(err => {
      if (process.env.NODE_ENV === 'development')
        console.error('Unable to connect to the database:', err)
      console.log(err)
      reject()
    })
  })
}

const Desconectar = () => {
  return new Promise(function(resolve) {
    resolve(sequelize.close())
  })
}

const Limpiar = () => {
  return new Promise(function(resolve) {
    sequelize.sync({force: true}).then((res) => {
      resolve(true)
    })
  })
}

module.exports = {
  Conectar,
  Desconectar,
  sequelize,
  Limpiar,
  db
}
