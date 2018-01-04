const logger = require('./logger')

process.on('uncaughtException', err => {
  logger.error('Caught exception: ' + err)
  logger.error(err.stack)
})

function ignoreFavicon (req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true})
  } else {
    next()
  }
}

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(ignoreFavicon)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
}

// montar la api movil
const movil = require('./movil/movil.routes')
app.use('/api/movil', movil)

module.exports = app
