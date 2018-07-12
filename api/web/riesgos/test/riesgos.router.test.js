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

describe('RIESGOS', () => {
  let { areas, puestos, equipos, empresas, establecimientos, riesgos } = dump
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let puesto = puestos.VALIDOS[0]
  let equipo = equipos.VALIDOS[0]
  let riesgo = riesgos.VALIDOS[0]
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
    generatorDocs.EQUI({ equivalencias, nombre: 'Riesgos' })
    generatorDocs.generateAPI({ docs, archivo: 'api.riesgos.md', nombre: 'Riesgos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 CREAR', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'

    let puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
    })

    it('@ICE_API_1_01 Crear un riesgo de forma correcta', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let riesgoGuardado = await models.riesgos.Obtener({ id: res.body.datos['id'] })
      expect(riesgoGuardado).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_02 tipoRiesgo tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo: 1, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_03 tipoRiesgo tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo: '', personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_04 personasExpuestas tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas: 'a', valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_05 personasExpuestas tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas: -1, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_06 valoracion tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion: 1, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_07 valoracion tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion: '', valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_08 valoracionLiteral tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral: 1, porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_09 valoracionLiteral tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral: '', porcentajeRiesgo, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_10 porcentajeRiesgo tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo: 'a', fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_11 porcentajeRiesgo tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo: -1, fecha, puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_12 fecha no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha: '2014-05-32T19:27:28.576Z', puestosId }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_13 puestosId tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 'a' }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_14 puestosId tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 0 }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_15 puestosId no existe', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 50 }
      let res = await request(app).post(`/api/web/riesgos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'

    let riesgosId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let riesgoCreada = await models.riesgos.Crear({ ...puesto, puestosId: puestosCreada['id'] })
      riesgosId = riesgoCreada['id']
    })

    it('@ICE_API_2_01 Crear un riesgo de forma correcta', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo: 'aaa', personasExpuestas: 2, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let riesgoGuardado = await models.riesgos.Obtener({ id: params['riesgosId'] })
      expect(riesgoGuardado).to.not.equal(null)
      expect(riesgoGuardado['tipoRiesgo']).to.equal(req['tipoRiesgo'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_02 tipoRiesgo tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo: 1, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_03 tipoRiesgo tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo: '', personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_04 personasExpuestas tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas: '', valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_05 personasExpuestas tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas: -1, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_06 valoracion tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion: 1, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_07 valoracion tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion: '', valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_08 valoracionLiteral tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral: 2, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_09 valoracionLiteral tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral: '', porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 porcentajeRiesgo tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo: '', fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 porcentajeRiesgo tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo: -1, fecha, puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_12 fecha no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha: '2014-05-21T25:27:28.576Z', puestosId }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_13 puestosId tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 'a' }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_14 puestosId tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 0 }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_15 puestosId no existe', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId: 50 }
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_16 riesgosId tipo no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId: 'a' }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '16', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_16 riesgosId tamano no valido', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId: 0 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '16', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_17 riesgosId no existe', async () => {
      let { tipoRiesgo, personasExpuestas, valoracion ,valoracionLiteral, porcentajeRiesgo, fecha  } = riesgo
      let req = { tipoRiesgo, personasExpuestas, valoracion, valoracionLiteral, porcentajeRiesgo, fecha, puestosId }
      let params = { riesgosId: 50 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '17', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })
  })

  describe('API_3 ELIMINAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'

    let riesgosId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let riesgoCreada = await models.riesgos.Crear({ ...puesto, puestosId: puestosCreada['id'] })
      riesgosId = riesgoCreada['id']
    })

    it('@ICE_API_3_01 Eliminar un puesto de forma correcta', async () => {
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let riesgoGuardado = await models.riesgos.Obtener({ id: params['riesgos'] })
      expect(riesgoGuardado).to.equal(null)
      generatorDocs.OK({ docs, doc: API_3, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_02 riesgosId no valido tipo de dato', async () => {
      let params = { riesgosId: 'a' }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_03 riesgosId  no valido numero', async () => {
      let params = { riesgosId: 0 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_04 riesgosId no exite', async () => {
      let params = { riesgosId: 50 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_4 OBTENER UNO', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    let codigoApi = 'API_4'

    let riesgosId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let riesgoCreada = await models.riesgos.Crear({ ...puesto, puestosId: puestosCreada['id'] })
      riesgosId = riesgoCreada['id']
    })

    it('@ICE_API_4_01 Obtener una riesgo de forma correcta', async () => {
      let params = { riesgosId }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_4, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_02 riesgosId no valido tipo de dato', async () => {
      let params = { riesgosId: 'a' }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_03 riesgosId  no valido numero', async () => {
      let params = { riesgosId: 0 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_04 riesgosId no exite', async () => {
      let params = { riesgosId: 50 }
      let url = `/api/web/riesgos/${params['riesgosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(null)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })
})
