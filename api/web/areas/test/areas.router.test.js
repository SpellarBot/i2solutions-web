const request = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')
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

const schema = utils.schemaFormato

describe('AREAS', () => {
  let { establecimientos, areas, empresas, puestos, personas, accidentes, novedades } = dump
  let establecimiento = establecimientos.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[1]
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let puesto3 = puestos.VALIDOS[1]
  let persona = personas.VALIDOS[0]
  let persona2 = personas.VALIDOS[1]
  let accidente = accidentes.VALIDOS[0]
  let accidente2 = accidentes.VALIDOS[1]
  let novedad = novedades.VALIDOS[0]
  let novedad2 = novedades.VALIDOS[1]
  let establecimientosId, establecimientosId2 = -1
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  beforeEach(async () => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime())
    let empresaCreada = await models.empresas.Crear(empresa)
    let empresasId = empresaCreada['id']
    let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
    establecimientosId = establecimientosCreada['id']
    let establecimientosCreada2 = await models.establecimientos.Crear(establecimiento2)
    establecimientosId2 = establecimientosCreada2['id']
  })
  after('Desconectar la base de datos', function() {
    clock.restore()
    generatorDocs.generateAPI({ docs, archivo: 'api.areas.md', nombre: 'Areas' })
    generatorDocs.EQUI({ equivalencias, nombre: 'Areas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  describe('API_1 Obtener todas las areas por establecimientos', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'

    let areasCreada, areasCreada2 = {}
    beforeEach(async () => {
      areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasCreada2 = await models.areas.Crear({ ...area2, establecimientosId: establecimientosId2 })
    })

    it(`@ICE_API_1_01 areas con los establecimientos`, async () => {
      let params = { establecimientosId }
      let url = `/api/web/areas/establecimientos/${establecimientosId}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
      generatorDocs.OK({ docs, doc: API_1, res })
    })

    it(`@ICE_API_1_2 establecimientosId no es un numero`, async () => {
      let establecimientosId = 'a'
      let params = { establecimientosId }
      let url = `/api/web/areas/establecimientos/${establecimientosId}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
    })

    it(`@ICE_API_1_3 establecimientosId debe ser minimo 1`, async () => {
      let establecimientosId = 0
      let params = { establecimientosId }
      let url = `/api/web/areas/establecimientos/${establecimientosId}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_2 Crear un area', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'

    it('@ICE_API_2_01 area creado existosamente', async () => {
      let req = { ...area, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(area['nombre'])
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    it('@ICE_API_2_02 actividad tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad: 1, nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_03 actividad tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad: '', nombre, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_04 nombre tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre: 1, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_05 nombre tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre: 0, fotoUrl, metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_06 fotoUrl tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, fotoUrl: 1, metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_07 fotoUrl formato no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, fotoUrl: 'https//', metrosCuadrados, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_08 metrosCuadrados tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados: 1, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_09 metrosCuadrados tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados: 0, descripcionLugar, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_10 descripcionLugar tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados, descripcionLugar: 1, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_11 descripcionLugar tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados, descripcionLugar: 0, establecimientosId }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_12 establecimientosId tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados, descripcionLugar, establecimientosId: 'a' }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_13 establecimientosId tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let req = { actividad, nombre, metrosCuadrados, descripcionLugar, establecimientosId: 0 }
      let res = await request(app).post(`/api/web/areas`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })
  })

  describe('API_3 Actualizar un area', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'

    let areasId = -1
    beforeEach(async () => {
      let areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areasCreada['id']
    })

    it('@ICE_API_3_01 area actualizada existosamente', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad: 'AA', nombre: 'Mi nombre editado', fotoUrl: 'https://image.png', metrosCuadrados: '50', descripcionLugar: 'AA' }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_02 actividad tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad: 1, nombre, fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_03 actividad tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad: '', nombre, fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_04 nombre tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre: 1, fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_05 nombre tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre: '', fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_06 fotoUrl tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl: 1, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_07 fotoUrl formato no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl: 'https://', metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_08 metrosCuadrados tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados: 1, descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_09 metrosCuadrados tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados: '', descripcionLugar }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_10 descripcionLugar tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar: 1 }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_11 descripcionLugar tamano no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar: '' }
      let req = areaEditada
      let params = { areasId }
      let url = `/api/web/areas/${areasId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_12 areasId tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId: 'a' }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_13 areasId tipo no valido', async () => {
      let { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar } = area
      let areaEditada = { actividad, nombre, fotoUrl, metrosCuadrados, descripcionLugar }
      let req = areaEditada
      let params = { areasId: 0 }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })
  })


  describe('API_4 Borrar un area', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    let codigoApi = 'API_4'

    let areasId = -1
    beforeEach(async () => {
      let areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areasCreada['id']
    })

    it('@ICE_API_4_1 Eliminada una area de forma correcta', async () => {
      let params = { areasId }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_4, res })
    })

    it('@ICE_API_4_2 areasId no valido numero', async () => {
      let params = { areasId: 0 }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_3 areasId no valido tipo de dato', async () => {
      let params = { areasId: 'a' }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_4 areasId no exite', async () => {
      let params = { areasId: 50 }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })
  })

  describe('API_5 Obtener un area', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    let codigoApi = 'API_5'

    let areasId = -1
    beforeEach(async () => {
      let areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areasCreada['id']
    })

    it('@ICE_API_5_1 Eliminada una area de forma correcta', async () => {
      let params = { areasId }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_5, res })
    })

    it('@ICE_API_5_2 areasId no valido numero', async () => {
      let params = { areasId: 0 }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_5_3 areasId no valido tipo de dato', async () => {
      let params = { areasId: 'a' }
      let url = `/api/web/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })
  })

  describe('API_6 Obtener un areas categorizados por puestos dado un establecimiento', () => {
    const { API_6 } = API
    let { API_6_EQUI } = EQUI
    let codigoApi = 'API_6'

    let areasId = -1
    beforeEach(async () => {
      let areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasCreada2 = await models.areas.Crear({ ...area2, establecimientosId })
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      let puestosCreada2 = await models.puestos.Crear({ ...puesto2 })
      let puestosCreada3 = await models.puestos.Crear({ ...puesto3 })
      let personaCreada = await models.personas.Crear({ ...persona })
      await models.personasPuestos.Crear({ puestosId: puestosCreada['id'], personasId: personaCreada['id']})
      await models.areasPuestos.Crear({ areasId: areasCreada['id'], puestosId: puestosCreada['id'] })
      await models.areasPuestos.Crear({ areasId: areasCreada['id'], puestosId: puestosCreada2['id'] })
      await models.areasPuestos.Crear({ areasId: areasCreada2['id'], puestosId: puestosCreada3['id'] })
      await models.accidentes.Crear({ ...accidente, puestosId: puestosCreada['id'] })
      await models.accidentes.Crear({ ...accidente, puestosId: puestosCreada2['id'] })
      await models.novedades.Crear({ ...novedad, puestosId: personaCreada['id'] })
      areasId = areasCreada['id']
    })

    it('@ICE_API_6_01 Obtener areas', async () => {
      let params = { establecimientosId }
      let url = `/api/web/areas/puestos/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      // console.log(JSON.stringify(res.body.datos, null, 2))
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_6_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_6, res })
    })

    it('@ICE_API_6_02 establecimientosId no es un numero', async () => {
      let params = { establecimientosId: 'a' }
      let url = `/api/web/areas/puestos/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_6_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_6_03 establecimientosId debe ser minimo 1', async () => {
      let params = { establecimientosId: 0 }
      let url = `/api/web/areas/puestos/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_6_EQUI, res, url, params, codigoApi })
    })
  })
})
