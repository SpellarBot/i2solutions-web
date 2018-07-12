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

describe('NOVEDADES', () => {
  let { areas, puestos, equipos, empresas, establecimientos, accidentes, novedades } = dump
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let puesto = puestos.VALIDOS[0]
  let equipo = equipos.VALIDOS[0]
  let novedad = novedades.VALIDOS[0]
  let novedad2 = novedades.VALIDOS[1]
  let accidente = accidentes.VALIDOS[0]
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
    generatorDocs.EQUI({ equivalencias, nombre: 'Novedades' })
    generatorDocs.generateAPI({ docs, archivo: 'api.novedades.md', nombre: 'Novedades' })
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

    it('@ICE_API_1_01 Crear una novedad de forma correcta', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let novedadGuardado = await models.novedades.Obtener({ id: res.body.datos['id'] })
      expect(novedadGuardado).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_02 descripcion tipo no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion: 1, prioridad, fotoUrl, fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_03 descripcion tamano no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion: '', prioridad, fotoUrl, fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_04 prioridad enum no valid', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad: 'otro', fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_05 fotoUrl tipo no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl: 1, fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_06 fotoUrl formato no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl: 'https://', fecha, puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_07 fecha no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl, fecha: '2018-13-25T04:27:34Z', puestosId }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_08 puestosId tipo no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl, fecha, puestosId: 'a' }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_09 puestosId tamano no valido', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl, fecha, puestosId: 0 }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_10 puestosId no existe', async () => {
      let { descripcion, prioridad, fotoUrl, fecha } = novedad
      let req = { descripcion, prioridad, fotoUrl, fecha, puestosId: 50 }
      let res = await request(app).post(`/api/web/novedades`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'

    let novedadesId2, novedadesId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let novedadCreada = await models.novedades.Crear({ ...novedad, puestosId })
      let novedadCreada2 = await models.novedades.Crear({ ...novedad2, puestosId })
      novedadesId = novedadCreada['id']
      novedadesId2 = novedadCreada2['id']
    })

    it('@ICE_API_2_01 Actualizar una novedad de forma correcta', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion: 'aa', prioridad: 'media', fecha: '2014-05-21T19:27:28.576Z', fotoUrl, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let novedadGuardado = await models.novedades.Obtener({ id: params['novedadesId'] })
      expect(novedadGuardado).to.not.equal(null)
      expect(novedadGuardado['descripcion']).to.equal(req['descripcion'])
      generatorDocs.OK({ docs, doc: API_2, res, req })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_02 descripcion tipo no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion: 1, prioridad, fecha, fotoUrl, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_03 descripcion tamano no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion: '', prioridad, fecha, fotoUrl, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_04 prioridad enum no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad: 'otro', fecha, fotoUrl, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_05 fotoUrl tipo no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl: 1, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_06 fotoUrl formato no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl: 'https://', puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_07 fecha no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha: '2014-05-21T25:27:28.576Z', fotoUrl, puestosId }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_08 puestosId tipo no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId: 'a' }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_09 puestosId tamano no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId: 0 }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 puestosId no existe', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId: 50 }
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 novedadesId tipo no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId }
      let params = { novedadesId: 'a' }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_12 novedadesId tamano no valido', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId }
      let params = { novedadesId: 0 }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_13 novedadesId no existe', async () => {
      let { descripcion, prioridad, fecha,fotoUrl } = novedad
      let req = { descripcion, prioridad, fecha, fotoUrl, puestosId }
      let params = { novedadesId: 50 }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })
  })

  describe('API_3 ELIMINAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'

    let novedadesId2, novedadesId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let novedadCreada = await models.novedades.Crear({ ...novedad, puestosId })
      let novedadCreada2 = await models.novedades.Crear({ ...novedad2, puestosId })
      novedadesId = novedadCreada['id']
      novedadesId2 = novedadCreada2['id']
    })

    it('@ICE_API_3_01 Eliminar una novedad de forma correcta', async () => {
      let params = { novedadesId }
      let url = `/api/web/novedades/${params['novedadesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let novedadGuardado = await models.novedades.Obtener({ id: params['novedadesId'] })
      expect(novedadGuardado).to.equal(null)
      generatorDocs.OK({ docs, doc: API_3, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_02 novedadesId no valido tipo de dato', async () => {
      let params = { novedadesId: 'a' }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_03 novedadesId  no valido numero', async () => {
      let params = { novedadesId: 0 }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_04 novedadesId no exite', async () => {
      let params = { novedadesId: 50 }
      let url = `/api/web/accidentes/${params['novedadesId']}`
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

    let novedadesId2, novedadesId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let novedadCreada = await models.novedades.Crear({ ...novedad, puestosId })
      let novedadCreada2 = await models.novedades.Crear({ ...novedad2, puestosId })
      novedadesId = novedadCreada['id']
      novedadesId2 = novedadCreada2['id']
    })

    it('@ICE_API_4_01 Obtener una novedad de forma correcta', async () => {
      let params = { novedadesId }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_4, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_02 novedadesId no valido tipo de dato', async () => {
      let params = { novedadesId: 'a' }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_03 novedadesId  no valido numero', async () => {
      let params = { novedadesId: 0 }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_04 novedadesId no exite', async () => {
      let params = { novedadesId: 50 }
      let url = `/api/web/accidentes/${params['novedadesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(null)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })
})
