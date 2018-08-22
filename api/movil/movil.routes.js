const express = require('express')

const responses = require('../responses')
const controller = require('./movil.controller.js')
const { db } = require('../config/db')

const app = express()

const Controller = controller({ responses, db })

/*
  * Obtener los puestos de un area
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
  * @codigo: API_1
*/
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

/*
  * Crear una novedad
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
  * @codigo: API_2
*/
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

/*
  * Obtener una novedad
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
  * @codigo: API_3
*/
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

/*
  * Atender una novedad
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
  * @codigo: API_4
*/
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

/*
  * Obtener novedades sin atender de un puesto
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
  * @codigo: API_5
*/
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

/*
  * Captar todas la rutas no validas
  * @creator: Joel Rodriguez
  * @date: 22-08-2018
*/
app.route('*')
  .get((req, res) => {
    res.json({datos: { mensaje: 'Url no valido' }, estado: false})
  })

module.exports = app
