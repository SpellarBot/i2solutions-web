const express = require('express')

const responses = require('../responses')
const controller = require('./movil.controller.js')
const { db } = require('../config/db')

const app = express()

const Controller = controller({ responses, db })

// id: API_1
app.route('/puestosDeUnArea/:areasId')
  .get((req, res) => {
    let { areasId } = req.params
    let id = areasId
    Controller.PuestosDeAreaTrabajo({ id }).then(resp => {
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
    let { descripcion, prioridad, fotoUrl, puestosId, inspeccionId } = req.body
    Controller.CrearNovedad({ descripcion, prioridad, fotoUrl, puestosId, inspeccionId }).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

// id: API_3
app.route('/area/:areasId/puesto/:puestosId/:establecimientosId')
  .get((req, res) => {
    let { areasId, puestosId, establecimientosId } = req.params
    Controller.CargarDatos({ areasId, puestosId, establecimientosId }).then(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    }).catch(resp => {
      res.status(resp.codigoEstado)
      res.json(resp)
    })
  })

// id: API_4
app.route('/novedad/:novedadId')
  .put((req, res) => {
    const id = req.params['novedadId']
    const { atendida, descripcionAtendida } = req.body
    Controller.ActualizarEstadoNovedad({ id, atendida, descripcionAtendida }).then(resp => {
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
    res.json({datos: { mensaje: 'Url no valido' }, estado: false})
  })

module.exports = app
