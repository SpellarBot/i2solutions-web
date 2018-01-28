const validator = require('validator')
const inspector = require('schema-inspector')
const express = require('express')

const responses = require('../responses')
const database = require('../database')
const controller = require('./movil.controller.js')

const app = express()

// base de datos temporal con mongodb
const { PuestoModel,
  PuestoDetalleModel,
  NovedadesModel
} = require('../config/mongodb/models')

const MovilDAL = require('./movil.dal')({ database, PuestoModel, PuestoDetalleModel, NovedadesModel })
const Movil = controller({ responses, validator, inspector, MovilDAL })

app.route('/puesto_trabajo/area_trabajo/:area_id')
  .get((req, res) => {
    const params = req.params
    Movil.PuestosDeAreaTrabajo({ params }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('/puesto_trabajo/:puesto_trabajo_id')
  .get((req, res) => {
    const params = req.params
    Movil.PuestoDeTrabajo({ params }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('/novedad')
  .get((req, res) => {
    Movil.ObtenerTodasNovedades().then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })
  .post((req, res) => {
    const body = req.body
    Movil.CrearNovedad({ body }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

/*
  params:
    puesto_trabajo_id: number
  query:
    atendido: boolean
*/
app.route('/novedad/puesto_trabajo/:puesto_trabajo_id')
  .get((req, res) => {
    const params = req.params
    const query = req.query
    Movil.ObtenerTodasNovedadesSinAtender({ params, query }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('/novedad/:novedad_id/puesto_trabajo/:puesto_trabajo_id')
  .post((req, res) => {
    const params = req.params
    const body = req.body
    Movil.ActualizarEstadoNovedad({ params, body }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('/area/:areaId/puesto/:puestoId')
  .get((req, res) => {
    const params = req.params
    Movil.CargarDatos({ params }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('*')
  .get((req, res) => {
    res.json({datos: {mensaje: 'Url no valido'}, estado: false})
  })

module.exports = app
