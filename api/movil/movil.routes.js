const express = require('express')

const responses = require('../responses')
const controller = require('./movil.controller.js')
const { db } = require('../config/db')

const app = express()

const MovilDAL = require('./movil.dal')({ db })
const Controller = controller({ responses, MovilDAL })

// Los 3 endpoints primeros estan en orden de uso

// Obtener todas los puestos de una area
app.route('/puesto_trabajo/area_trabajo/:areaId')
  .get((req, res) => {
    Controller.PuestosDeAreaTrabajo(req.params).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

app.route('/novedad')
  .post((req, res) => {
    Controller.CrearNovedad(req.body).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })


app.route('/area/:areaId/puesto/:puestoId/:establecimientoId')
  .get((req, res) => {
    Controller.CargarDatos(req.params).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

// atender una novedad
app.route('/novedad/:novedad_id/puesto_trabajo/:puesto_trabajo_id')
  .post((req, res) => {
    const { novedad_id } = req.params
    const id = novedad_id
    const { atendida, descripcionAtendida, nombre } = req.body
    Controller.ActualizarEstadoNovedad({ id, atendida, descripcionAtendida, nombre }).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })


app.route('*')
  .get((req, res) => {
    res.json({datos: {mensaje: 'Url no valido'}, estado: false})
  })

module.exports = app
