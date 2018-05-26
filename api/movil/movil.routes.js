const express = require('express')

const responses = require('../responses')
const controller = require('./movil.controller.js')
const { db } = require('../config/db')

const app = express()

const MovilDAL = require('./movil.dal')({ db })
const Controller = controller({ responses, MovilDAL })

// id: API_1
app.route('/puestosDeUnArea/:areaId')
  .get((req, res) => {
    Controller.PuestosDeAreaTrabajo(req.params).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

// id: API_2
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

// id: API_3
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

// id: API_4
app.route('/novedad/:novedadId/puesto/:puestoId')
  .post((req, res) => {
    const id = req.params['novedadId']
    const { atendida, descripcionAtendida, nombre } = req.body
    Controller.ActualizarEstadoNovedad({ id, atendida, descripcionAtendida, nombre }).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

// id: API_5
app.route('/novedadesSinAtender/:puestosId')
  .get((req, res) => {
    const { puestosId } = req.params
    Controller.ObtenerNovedadesSinAtender({ puestosId }).then(resp => {
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
