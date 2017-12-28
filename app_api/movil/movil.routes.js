const logger = require('../logger')
const responses = require('../responses')
const database = require('../database')
const validator = require('validator')
const inspector = require('schema-inspector')
const auth = require('../auth')
const controller = require('./movil.controller.js')
const express = require('express')
const app = express()

// temporal con mongodb
const puestoModel = require('../config/mongodb/models').Puestos
const puestoDetalleModel = require('../config/mongodb/models').PuestosDetalle
const novedadesModel = require('../config/mongodb/models').Novedades

const movilDAL = require('./movil.dal')({ database, puestoModel, puestoDetalleModel, novedadesModel })

const Movil = controller({ responses, validator, inspector, movilDAL })

app.route('/puesto_trabajo/area_trabajo/:area_id')
  .get((req, res) => {
    const params = req.params
    Movil.PuestosDeAreaTrabajo({ params }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
      delete params
    }).catch(err => {
      res.status(resp.codigo_estado)
      res.json(err)
    })
  })

app.route('/puesto_trabajo/:puesto_trabajo_id')
  .get((req, res) => {
    const params = req.params
    Movil.PuestoDeTrabajo({ params }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
      delete params
    }).catch(err => {
      res.status(resp.codigo_estado)
      res.json(err)
    })
    
  })

// obtener la empresa, usuario (permisos)
app.route('/novedad')
  .get((req, res) => {
    Movil.ObtenerTodasNovedades().then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(err => {
      throw new Error('Error movil router ', err)
      res.status(resp.codigo_estado)
      res.json(resp)
    })
  })
  .post((req, res) => {
    const body = req.body
    Movil.CrearNovedad({ body }).then(resp => {
      res.status(resp.codigo_estado)
      res.json(resp)
    }).catch(err => {
      throw new Error('Error movil router ', err)
      res.status(resp.codigo_estado)
      res.json(resp)
    })
    
  })

app.route('*')
  .get((req, res) => {
    res.json({ datos: { mensaje: 'Url no valido'}, estado: false})
  })
module.exports = app
