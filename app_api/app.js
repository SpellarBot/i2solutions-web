const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')
const app = express()
const api = express() // api sub app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
}

// montar la api app
require('./routes.api')(api)
app.use('/', api)

module.exports = app
