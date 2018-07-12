const request = require('supertest')
const expect = require('chai').expect
const rfr = require('rfr')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })

const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const utils = rfr('api/utils')

const SCHEMA = require('../API_SCHEMA')
const API = require('./API_DOCS')
const EQUI = require('./API_EQUI')
const models = db.db
let docs = []
let equivalencias = {}

describe('CAPACITACIONES', () => {
  let { areas, capacitaciones, establecimientos, empresas } = dump
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let capacitacion = capacitaciones.VALIDOS[0]
  let capacitacion2 = capacitaciones.VALIDOS[1]
  let capacitacion3 = capacitaciones.VALIDOS[2]
  let establecimientosId, establecimientosId2 = -1
  beforeEach(async () => {
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
    establecimientosId = establecimientosCreada['id']
    let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
    establecimientosId2 = establecimientosCreada2['id']
  })
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.EQUI({ equivalencias, nombre: 'Capacitaciones' })
    generatorDocs.generateAPI({ docs, archivo: 'api.capacitaciones.md', nombre: 'Capacitaciones' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 CREAR', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'
    let areasId = {}

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areaCreada['id']
    })

    it('@ICE_API_1_1 Crear un capacitacion de forma correcta', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_2 nombre tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre: 1, descripcion, tema, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_3 nombre tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre: '', descripcion, tema, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_4 descripcion tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion: 1, tema, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_5 descripcion tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion: '', tema, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_6 tema tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema: 1, fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_7 tema tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema: '', fechaCapacitacion, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_8 fechaCapacitacion tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion: 1, areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_9 fechaCapacitacion formato no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion: '2017-08-09', areasId }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_10 areasId tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion, areasId: 'a' }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_11 areasId tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion, areasId: 0 }
      let res = await request(app).post(`/api/web/capacitaciones`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'
    let capacitacionesId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areaCreada['id']
      let capacitacionCreada = await models.capacitaciones.Crear({ ...capacitacion, areasId })
      capacitacionesId = capacitacionCreada['id']
    })

    it('@ICE_API_2_1 Actualizar un capacitacion de forma correcta', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre: 'aa', descripcion: 'aaa', tema: 'aa', fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${capacitacionesId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_2, res, req })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_2 nombre tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre: 1, descripcion, tema, fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_3 nombre tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre: '', descripcion, tema, fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_4 descripcion tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion: 1, tema, fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_5 descripcion tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion: '', tema, fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_6 tema tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema: 1, fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_7 tema tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema: '', fechaCapacitacion }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_8 fechaCapacitacion tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion: 1 }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_9 fechaCapacitacion formato no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion: '2018-18-02' }
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 capacitacionesId tipo no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion }
      let params = { capacitacionesId: 'a' }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 capacitacionesId tamano no valido', async () => {
      let { nombre, descripcion, tema, fechaCapacitacion } = capacitacion
      let req = { nombre, descripcion, tema, fechaCapacitacion }
      let params = { capacitacionesId: 0 }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })
  })

  describe('API_3 ELIMINAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'
    let capacitacionesId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areaCreada['id']
      let capacitacionCreada = await models.capacitaciones.Crear({ ...capacitacion, areasId })
      capacitacionesId = capacitacionCreada['id']
    })

    it('@ICE_API_3_1 Eliminada una capacitacion de forma correcta', async () => {
      let params = { capacitacionesId }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_2 capacitacionesId no valido tipo de dato', async () => {
      let params = { capacitacionesId: 'a' }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_3 capacitacionesId  no valido numero', async () => {
      let params = { capacitacionesId: 0 }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_4 capacitacionesId no exite', async () => {
      let params = { capacitacionesId: 50 }
      let url = `/api/web/capacitaciones/${params['capacitacionesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

  })
})
