const request = require('supertest')
const expect = require('chai').expect
const rfr = require('rfr')
const Ajv = require('ajv')
const sinon = require('sinon')
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

describe('ACCIDENTES', () => {
  let { areas, puestos, equipos, empresas, establecimientos, accidentes } = dump
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let puesto = puestos.VALIDOS[0]
  let equipo = equipos.VALIDOS[0]
  let equipo2 = equipos.VALIDOS[1]
  let equipo3 = equipos.VALIDOS[2]
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
    generatorDocs.EQUI({ equivalencias, nombre: 'Accidentes' })
    generatorDocs.generateAPI({ docs, archivo: 'api.accidentes.md', nombre: 'Accidentes' })
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

    it('@ICE_API_1_01 Crear un accidente de forma correcta', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let accidenteGuardado = await models.accidentes.Obtener({ id: res.body.datos['id'] })
      expect(accidenteGuardado).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_02 nombre tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre: 1, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_03 nombre tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre: '', heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_04 descripcion tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion: 1, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_05 descripcion tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion: '', nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_06 heridos tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos: 'a', atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_07 heridos tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos: -1, atendidoEnEmpresa, muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_08 atendidoEnEmpresa tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa: 'a', muertos, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_09 muertos tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos: 'a', fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_10 muertos tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos: -1, fecha, puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_11 fecha no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha: '2014-13-21T19:27:28.576Z', puestosId }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_12 puestosId tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 'a' }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_13 puestosId tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 0 }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_14 puestosId no existe', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 50 }
      let res = await request(app).post(`/api/web/accidentes`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'

    let accidentesId, puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidentes, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_2_01 Actualizar un accidente de forma correcta', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion: 'Caida de objeto', nombre: 'Caida de objeto', heridos: 1, atendidoEnEmpresa: false, muertos: 0, fecha: '2014-05-21T19:27:28.576Z', puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let accidenteGuardado = await models.accidentes.Obtener({ id: params['accidentesId'] })
      expect(accidenteGuardado).to.not.equal(null)
      generatorDocs.OK({ docs, doc: API_2, res, req })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_02 nombre tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre: 1, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_03 nombre tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre: '', heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_04 descripcion tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion: 1, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_05 descripcion tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion: '', nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_06 heridos tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos: 'a', atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_07 heridos tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos: -1, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_08 atendidoEnEmpresa tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa: 'a', muertos, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_09 muertos tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos: 'a', fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 muertos tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos: -1, fecha, puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 fecha no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha: '2014-13-21T19:27:28.576Z', puestosId }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_12 puestosId tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 'a' }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_13 puestosId tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 0 }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_14 puestosId no existe', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId: 50 }
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_15 accidentesId tipo no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId: 'a' }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_16 accidentesId tamano no valido', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId: 0 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '16', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_17 accidentesId no existe', async () => {
      let { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha } = accidente
      let req = { descripcion, nombre, heridos, atendidoEnEmpresa, muertos, fecha, puestosId }
      let params = { accidentesId: 50 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
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

    let accidentesId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidentes, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_3_01 Eliminar un accidente de forma correcta', async () => {
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let accidenteGuardado = await models.accidentes.Obtener({ id: params['accidentesId'] })
      expect(accidenteGuardado).equal(null)
      generatorDocs.OK({ docs, doc: API_3, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_02 accidentesId no valido tipo de dato', async () => {
      let params = { accidentesId: 'a' }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_03 accidentesId  no valido numero', async () => {
      let params = { accidentesId: 0 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_04 accidentesId no exite', async () => {
      let params = { accidentesId: 50 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
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

    let accidentesId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidentes, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_4_01 Obtener un accidente de forma correcta', async () => {
      let params = { accidentesId }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.OK({ docs, doc: API_4, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_02 accidentesId no valido tipo de dato', async () => {
      let params = { accidentesId: 'a' }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_03 accidentesId  no valido numero', async () => {
      let params = { accidentesId: 0 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_04 accidentesId no exite', async () => {
      let params = { accidentesId: 50 }
      let url = `/api/web/accidentes/${params['accidentesId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(null)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_5 Obtener por establecimiento', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    let codigoApi = 'API_5'

    let accidentesId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidente, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_5_01 Obtener accidentes de forma correcta', async () => {
      let params = { establecimientosId }
      let url = `/api/web/accidentes/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_5, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_02 establecimientosId no valido tipo de dato', async () => {
      let params = { establecimientosId: 'a' }
      let url = `/api/web/accidentes/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_03 establecimientosId  no valido numero', async () => {
      let params = { establecimientosId: 0 }
      let url = `/api/web/accidentes/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_04 establecimientosId no exite', async () => {
      let params = { establecimientosId: 50 }
      let url = `/api/web/accidentes/establecimientos/${params['establecimientosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_6 Obtener por area', () => {
    const { API_6 } = API
    let { API_6_EQUI } = EQUI
    let codigoApi = 'API_6'

    let areasId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidente, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_6_01 Obtener accidentes de forma correcta', async () => {
      let params = { areasId }
      let url = `/api/web/accidentes/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_6, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_02 areasId no valido tipo de dato', async () => {
      let params = { areasId: 'a' }
      let url = `/api/web/accidentes/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_03 areasId  no valido numero', async () => {
      let params = { areasId: 0 }
      let url = `/api/web/accidentes/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_6_04 areasId no exite', async () => {
      let params = { areasId: 50 }
      let url = `/api/web/accidentes/areas/${params['areasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_6_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_7 Obtener por area', () => {
    const { API_7 } = API
    let { API_7_EQUI } = EQUI
    let codigoApi = 'API_7'

    let puestosId = -1

    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let accidenteCreada = await models.accidentes.Crear({ ...accidente, puestosId })
      accidentesId = accidenteCreada['id']
    })

    it('@ICE_API_7_01 Obtener accidentes de forma correcta', async () => {
      let params = { puestosId }
      let url = `/api/web/accidentes/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_7, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_02 puestosId no valido tipo de dato', async () => {
      let params = { puestosId: 'a' }
      let url = `/api/web/accidentes/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_03 puestosId  no valido numero', async () => {
      let params = { puestosId: 0 }
      let url = `/api/web/accidentes/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_7_04 puestosId no exite', async () => {
      let params = { puestosId: 50 }
      let url = `/api/web/accidentes/puestos/${params['puestosId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_7_EQUI, res, codigoApi, url, params })
    })
  })
})
