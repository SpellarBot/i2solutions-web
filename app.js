function ignoreFavicon (req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true})
  } else {
    next()
  }
}

process.on('uncaughtException', err => {
  console.error('Caught exception: ' + err)
  console.error(err.stack)
})

const db = require('./api/config/db')
if (process.env.NODE_ENV !== 'production') {
  db.Conectar().catch((err) => { console.error(err) })
} else if (process.env.NODE_ENV !== 'testing') {
  db.Conectar().catch((err) => { console.error(err) })
}

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(ignoreFavicon)
app.use(cors())

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  app.use(morgan('tiny'))
}

// montar la api
const api = express()
require('./api/server.api')(api)
app.use('/api', api)

// montar cliente
const client = express()
require('./client/client.server')(client)
app.use('/', client)

module.exports = app
