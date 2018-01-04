const mysql = require('mysql')
const enviroment = process.env.NODE_ENV
const config = require('../knexfile.js')[enviroment]
const chalk = require('chalk')

const connection = mysql.createConnection({
  host: config.connection.host,
  user: config.connection.user,
  password: config.connection.password
})
const configTmp = JSON.parse(JSON.stringify(config))
delete (configTmp.connection.database)
const knex = require('knex')(configTmp)
connection.connect(function (err) {
  if (err) {
    console.error(chalk.red('Error coneccion MYSQL'))
    console.error(err)
    process.exit(1)
  }
  knex.raw(`DROP DATABASE IF EXISTS ${config.connection.database}`)
    .then(function () {
      knex.raw(`CREATE DATABASE ${config.connection.database}`).then(function () {
        console.log(chalk.green(`Creada base de datos ${config.connection.database}`))
        process.exit(0)
      })
    })
})
