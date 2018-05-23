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
      }
      sequelize.sync()
    } else {
      sequelize.sync()
    }
    sequelize
    .authenticate()
    .then(() => {
      if (process.env.NODE_ENV !== 'testing') {
        sequelize.query('set FOREIGN_KEY_CHECKS=0').then((resp) => { // para mysql
          if (process.env.NODE_ENV === 'development')
            console.log('Connection has been established successfully.')
          resolve()
        })
      } else {
        sequelize.query('PRAGMA foreign_keys = OFF') // para sqlite
        resolve()
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



// 'use strict';

// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(__filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
