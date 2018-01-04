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
      // delete params
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
      // delete params
    }).catch(resp => {
      // throw new Error('Error movil router ', err)
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
      // throw new Error('Error movil router ', err)
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
      // throw new Error('Error movil router ', err)
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })

app.route('*')
  .get((req, res) => {
    res.json({datos: {mensaje: 'Url no valido'}, estado: false})
  })

module.exports = app
