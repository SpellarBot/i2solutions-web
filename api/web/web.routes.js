const express = require('express')
const app = express()

require('./empresas/empresas.router')(app)
require('./personas/personas.router')(app)
require('./establecimientos/establecimientos.router')(app)
require('./areas/areas.router')(app)
require('./puestos/puestos.router')(app)
require('./capacitaciones/capacitaciones.router')(app)
require('./equipos/equipos.router')(app)
require('./accidentes/accidentes.router')(app)
app.route('*')
  .get((req, res) => {
    res.json({ mensaje: 'Esta ruta no existe' })
  })
module.exports = app
