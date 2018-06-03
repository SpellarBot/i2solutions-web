const express = require('express')

// const responses = require('../responses')
// const { db } = require('../config/db')

const app = express()

// const controller = require('./movil.controller.js')
// const MovilDAL = require('./movil.dal')({ db })
// const Controller = controller({ responses, MovilDAL })

app.route('/ping')
  .get((req, res) => {
    res.send({ hello: 'hello' })
  })
module.exports = app
