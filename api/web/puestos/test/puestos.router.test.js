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

const schema = utils.schemaFormato

describe('PUESTOS', () => {
  let { puestos, areas, novedades, riesgos, accidentes } = dump
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let puesto3 = puestos.VALIDOS[2]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[1]
  let novedad = novedades.VALIDOS[0]
  let riesgo = riesgos.VALIDOS[0]
  let accidente = accidentes.VALIDOS[0]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.EQUI({ equivalencias, nombre: 'Puestos' })
    generatorDocs.generateAPI({ docs, archivo: 'api.puestos.md', nombre: 'Puestos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 Obtener puesto por area', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'
    let puestosCreada, puestosCreada2, puestosCreada3, areasCreada, areasCreada2, areasId = {}
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      puestosCreada2 = await models.puestos.Crear(puesto2)
      puestosCreada3 = await models.puestos.Crear(puesto3)
      areasCreada = await models.areas.Crear(area)
      areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
    })
    it('@ICE_API_1_01 existentes', async () => {
      let params = { areasId }
      let url = `/api/web/puestos/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos.length).to.equal(2)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
      generatorDocs.OK({ docs, doc: API_1, res })
    })

    it('@ICE_API_1_02 areasId no es un numero', async () => {
      let params = { areasId: 'a' }
      let url = `/api/web/puestos/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_1_03 areasId debe ser minimo 1', async () => {
      let params = { areasId: 0 }
      let url = `/api/web/puestos/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_2 CREAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'

    let puestosCreada, puestosCreada2, puestosCreada3, areasCreada, areasCreada2, areasId = {}
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      puestosCreada2 = await models.puestos.Crear(puesto2)
      puestosCreada3 = await models.puestos.Crear(puesto3)
      areasCreada = await models.areas.Crear(area)
      areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
    })

    it('@ICE_API_2_01 Crear un puesto de forma correcta', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(req['nombre'])
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    it('@ICE_API_2_02 nombre tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre: 1, descripcion, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_03 nombre tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre: '', descripcion, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: 2, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: '', areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_06 areasId tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion, areasId: 'a' }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_07 areasId tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion, areasId: 0 }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })
  })

  describe('API_3 ACTUALIZAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'

    let puestosCreada, puestosCreada2, puestosCreada3, areasCreada, areasCreada2, areasId, puestosId = {}
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      puestosCreada2 = await models.puestos.Crear(puesto2)
      puestosCreada3 = await models.puestos.Crear(puesto3)
      areasCreada = await models.areas.Crear(area)
      areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
      puestosId = puestosCreada['id']
    })

    it('@ICE_API_3_01 Crear un puesto de forma correcta', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre: 'AAA', descripcion: 'AAA' }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })

    it('@ICE_API_3_02 nombre tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre: 1, descripcion }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_03 nombre tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre: '', descripcion }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: 1 }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: '' }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_06 puestosId tipo no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: 'a' }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_07 puestosId tamano no valido', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion: 0 }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_08 puesto no existe', async () => {
      let { nombre, descripcion } = puesto
      let req = { nombre, descripcion }
      let params = { puestosId: 50 }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
      generatorDocs.ERROR({ nombre: 'El id del puestos no existe', docs, doc: API_3, res, req })
    })
  })

  describe('API_4 BORRAR', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    let codigoApi = 'API_4'

    let puestosCreada, puestosCreada2, puestosCreada3, areasCreada, areasCreada2, areasId, puestosId = {}
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      puestosCreada2 = await models.puestos.Crear(puesto2)
      puestosCreada3 = await models.puestos.Crear(puesto3)
      areasCreada = await models.areas.Crear(area)
      areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
      puestosId = puestosCreada['id']
    })

    it('@ICE_API_4_01 Eliminada una puesto de forma correcta', async () => {
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_4, res })
    })

    it('@ICE_API_4_02 puestosId no valido numero', async () => {
      let params = { puestosId: 0 }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_03 puestosId no valido tipo de dato', async () => {
      let params = { puestosId: 'a' }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_04 puestosId no valido tipo de dato', async () => {
      let params = { puestosId: 50 }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })
  })

  describe('API_5 Obtener un puesto', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    let codigoApi = 'API_5'

    let puestosCreada, puestosCreada2, puestosCreada3, areasCreada, areasCreada2, areasId, puestosId = {}
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      puestosCreada2 = await models.puestos.Crear(puesto2)
      puestosCreada3 = await models.puestos.Crear(puesto3)
      areasCreada = await models.areas.Crear(area)
      areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
      puestosId = puestosCreada['id']
    })

    it('@ICE_API_5_01 Obtener una puesto de forma correcta', async () => {
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['nombre']).to.equal(puestosCreada['nombre'])
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_5, res })
    })

    it('@ICE_API_5_02 puestosId no valido numero', async () => {
      let params = { puestosId: 'a' }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_5_03 puestosId no valido tipo de dato', async () => {
      let params = { puestosId: 'a' }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
    })
  })
})
