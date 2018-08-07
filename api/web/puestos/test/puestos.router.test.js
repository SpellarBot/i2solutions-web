const request = require('supertest')
const sinon = require('sinon')
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
  let { puestos, areas, novedades, riesgos, accidentes, empresas, establecimientos } = dump
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let puesto3 = puestos.VALIDOS[2]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[1]
  let novedad = novedades.VALIDOS[0]
  let riesgo = riesgos.VALIDOS[0]
  let accidente = accidentes.VALIDOS[0]
  let establecimientosId, establecimientosId2 = -1
  beforeEach(async () => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime())
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
    clock.restore()
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
    let areasId = {}
    beforeEach(async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasCreada2 = await models.areas.Crear({ ...area2, establecimientosId })
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

    let areasId = -1
    beforeEach(async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      areasId = areasCreada['id']
    })

    it('@ICE_API_2_01 Crear un puesto de forma correcta', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion, fotoUrl, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(true)
      expect(res.body.datos['nombre']).to.equal(req['nombre'])
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    it('@ICE_API_2_02 nombre tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre: 1, descripcion, fotoUrl, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_03 nombre tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre: '', descripcion, fotoUrl, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: 2, fotoUrl, areasId }
      let res = await request(app).post(`/api/web/puestos`).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: '', fotoUrl, areasId }
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
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion, fotoUrl, areasId: 0 }
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

    let puestosId = -1
    beforeEach(async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
      puestosId = puestosCreada['id']
    })

    it('@ICE_API_3_01 Crear un puesto de forma correcta', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre: 'AAA', descripcion: 'AAA', fotoUrl: 'http://imagen.png' }
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
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre: 1, descripcion, fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_03 nombre tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre: '', descripcion, fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: 1, fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: '', fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_06 puestosId tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: 'a', fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_07 puestosId tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion: 0, fotoUrl }
      let params = { puestosId }
      let url = `/api/web/puestos/${params['puestosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.estado).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_3_EQUI, req, res, codigoApi, params, url })
    })

    it('@ICE_API_3_08 puesto no existe', async () => {
      let { nombre, descripcion, fotoUrl } = puesto
      let req = { nombre, descripcion, fotoUrl }
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

    let puestosId = -1
    beforeEach(async () => {
      let puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
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

    let puestosId, puestosCreada = -1
    beforeEach(async () => {
      puestosCreada = await models.puestos.Crear(puesto)
      let puestosCreada2 = await models.puestos.Crear(puesto2)
      let puestosCreada3 = await models.puestos.Crear(puesto3)
      let areasCreada = await models.areas.Crear(area)
      let areasCreada2 = await models.areas.Crear(area2)
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada2['id'], areasId: areasCreada['id'] })
      await models.areasPuestos.Crear({ puestosId: puestosCreada3['id'], areasId: areasCreada2['id'] })
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
