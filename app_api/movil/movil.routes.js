const logger = require('../logger')
const responses = require('../responses')
const auth = require('../auth')
const controller = require('./movil.controller.js')
const express = require('express')
const app = express()
const Movil = controller()

app.route('/puestos_trabajo')
  .get((req, res) => {
    res.json(responses.OK(Movil.PuestosTrabajo()))
  })

app.route('/vista_principal')
  .get((req, res) => {
    res.json(Movil.VistaPrincipal())
  })

app.route('/novedades_sin_atender')
  .get((req, res) => {
    res.json(Movil.NovedadesSinAtender())
  })

app.route('/ingresar_novedad')
  .get((req, res) => {
    res.json(Movil.IngresarNovedad())
  })

app.route('/cambiar_estado_novedad')
  .get((req, res) => {
    res.json(Movil.CambiarEstadoNovedad())
  })

module.exports = app
