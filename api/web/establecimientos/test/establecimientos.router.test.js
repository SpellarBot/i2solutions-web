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
const validar = rfr('api/utils').schemaFormato

const SCHEMA = require('../API_SCHEMA')
const API = require('./API_DOCS')
const EQUI = require('./API_EQUI')
const models = db.db
let docs = []
let equivalencias = {}

const schema = utils.schemaFormat

describe('ESTABLECIMIENTOS', () => {
  let { establecimientos, empresas, areas, puestos, accidentes, capacitaciones, personas, novedades } = dump
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let establecimiento3 = establecimientos.VALIDOS[2]
  let area = areas.VALIDOS[0]
  let area2 = areas.VALIDOS[1]
  let puesto = puestos.VALIDOS[0]
  let puesto2 = puestos.VALIDOS[1]
  let accidente = accidentes.VALIDOS[0]
  let accidente2 = accidentes.VALIDOS[1]
  let capacitacion = capacitaciones.VALIDOS[0]
  let capacitacion2 = capacitaciones.VALIDOS[1]
  let persona = personas.VALIDOS[0]
  let persona2 = personas.VALIDOS[1]
  let novedad = novedades.VALIDOS[0]
  let novedad2 = novedades.VALIDOS[1]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.EQUI({ equivalencias, nombre: 'Establecimientos' })
    generatorDocs.generateAPI({ docs, archivo: 'api.establecimientos.md', nombre: 'Establecimientos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 OBTENER ESTABLECIMIENTOS POR EMPRESA', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'
    let empresasId = -1
    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let empresaCreada2 = await models.empresas.Crear(empresa)
      empresasId = empresaCreada['id']
      let establecimientosCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId })
      let establecimientosCreada2 = await models.establecimientos.Crear({ ...establecimiento2, empresasId })
      let establecimientosCreada3 = await models.establecimientos.Crear({ ...establecimiento3, empresasId: empresaCreada2['id'] })
    })
    it(`@ICE_API_1_1 empresa con dos establecimientos`, async () => {
      let params = { empresasId }
      let url = `/api/web/establecimientos/${empresasId}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(2)
      generatorDocs.OK({ docs, doc: API_1, res })
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, res, codigoApi, params, url })
    })

    it(`@ICE_API_1_2 empresasId no es un numero`, async () => {
      let params = { empresasId }
      let url = `/api/web/establecimientos/a`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, res, codigoApi, params, url })
    })

    it(`@ICE_API_1_3 empresasId debe ser minimo 1`, async () => {
      let params = { empresasId }
      let url = `/api/web/establecimientos/${0}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, res, codigoApi, params, url })
    })

  })

  describe('API_2 CREAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'
    let empresasId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      empresasId = empresaCreada['id']
    })

    it('@ICE_API_2_1 establecimiento creado existosamente', async () => {
      let req = { ...establecimiento, empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['ruc']).to.equal(establecimiento['ruc'])
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    it('@ICE_API_2_2 nombres tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres: 1, direccion, ruc, empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_3 nombres tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres: '', direccion, ruc, empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_4 direccion tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion: 1, ruc, empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_5 direccion tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion: '', ruc, empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_6 empresasId tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId: 'a' }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_7 empresasId tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId: 0 }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_8 ruc 1-2 digitos valor>24', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '2502365486001', empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_9 ruc 1-2 digitos valor=00', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '0002365486001', empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_10 ruc 3er digito valor={7,8}', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '1772365486001', empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_11 ruc 11-13 digitos valor<001', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '1762365486000', empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_2_12 ruc tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '17236548600', empresasId }
      let res = await request(app).post(`/api/web/establecimientos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_2_EQUI, req, res, codigoApi })
    })

  })

  describe('API_3 ACTUALIZAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'
    let establecimientosId, empresasId = {}

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      empresasId = empresaCreada['id']
      let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
      establecimientosId = establecimientosCreada['id']
    })

    it('@ICE_API_3_1 editado existosamente', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres: 'Empresa editada', direccion, ruc, empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })

    it('@ICE_API_3_2 nombres tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres: 2, direccion, ruc, empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_3 nombres tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres: '', direccion, ruc, empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_4 direccion tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion: 1, ruc, empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_5 direccion tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion: '', ruc, empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_6 empresasId tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId: 'a' }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_7 empresasId tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId: 0 }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_8 ruc 1-2 digitos valor>24', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '2502365486001', empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_9 ruc 1-2 digitos valor=00', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '0002365486001', empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_10 ruc 3er digito valor={7,8}', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '1772365486001', empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_11 ruc 11-13 digitos valor<001', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '1762365486000', empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_12 ruc tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc: '17236548600', empresasId }
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${establecimientosId}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '12', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_13 establecimientosId tipo no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId }
      let params = { establecimientosId: 'a' }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '13', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_14 establecimientosId tamano no valido', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId }
      let params = { establecimientosId: 0 }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '14', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
    })

    it('@ICE_API_3_15 establecimiento con ese id no existe', async () => {
      let { nombres, direccion, ruc } = establecimiento
      let req = { nombres, direccion, ruc, empresasId }
      let params = { establecimientosId: 500 }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '15', equivalencias, equi: API_3_EQUI, req, res, url, params, codigoApi })
      generatorDocs.ERROR({ nombre: 'El id del establecimiento no exite', docs, doc: API_3, res, req })
    })
  })

  describe('API_4 ELIMINAR', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    let codigoApi = 'API_4'
    let establecimientosId = {}

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let empresasId = empresaCreada['id']
      let establecimientosCreada = await models.establecimientos.Crear(establecimiento)
      establecimientosId = establecimientosCreada['id']
    })

    it('@ICE_API_4_1 Eliminada una empresa de forma correcta', async () => {
      let params = { establecimientosId }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_4, res })
    })

    it('@ICE_API_4_2 establecimientosId no valido numero', async () => {
      let params = { establecimientosId: 0 }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_3 establecimientosId no valido tipo de dato', async () => {
      let params = { establecimientosId: 'a' }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
    })

    it('@ICE_API_4_4 establecimientosId no exite', async () => {
      let params = { establecimientosId: 500 }
      let url = `/api/web/establecimientos/${params['establecimientosId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, url, params, codigoApi })
      generatorDocs.ERROR({ nombre: 'El id del establecimiento no exite', docs, doc: API_4, res })
    })
  })

  describe('API_5 Datos de establecimientos para front', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    let { API_5_SCHEMA } = SCHEMA
    let codigoApi = 'API_5'
    let empresasId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let empresaCreada2 = await models.empresas.Crear(empresa)
      empresasId = empresaCreada['id']
      let establecimientosCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada['id'] })
      let establecimientosCreada2 = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada2['id'] })
      let establecimientosCreada3 = await models.establecimientos.Crear({ ...establecimiento2, empresasId: empresaCreada['id'] })
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId: establecimientosCreada['id'] })
      let areaCreada2 = await models.areas.Crear({ ...area2, establecimientosId: establecimientosCreada2['id'] })
      let puestoCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ areasId: areaCreada['id'], puestosId: puestoCreada['id'] })
      await models.capacitaciones.Crear({ areasId: areaCreada['id'], ...capacitacion })
      await models.accidentes.Crear({ puestosId: puestoCreada['id'], ...accidente })
      let personaCreada = await models.personas.Crear({ ...persona })
      await models.personasPuestos.Crear({ puestosId: personaCreada['id'], puestosId: puestoCreada['id'] })
      await models.novedades.Crear({ ...novedad, puestosId: puestoCreada['id'] })
      await models.novedades.Crear({ ...novedad, puestosId: puestoCreada['id'] })
    })

    it('@ICE_API_5_01 Con establecimientos existentes', async () => {
      let params = { empresasId }
      let url = `/api/web/principal/establecimientos/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos[0]['cantidadAreas']).to.equal(1)
      expect(res.body.datos[0]['cantidadPuestos']).to.equal(1)
      expect(res.body.datos[0]['cantidadPersonas']).to.equal(1)
      expect(res.body.datos[0]['cantidadNovadadesSinAtender']).to.equal(2)
      expect(res.body.datos[0]['cantidadAccidentes']).to.equal(1)
      expect(res.body.datos[0]['cantidadCapacitaciones']).to.equal(1)
      let [err, mensaje] = validar(API_5_SCHEMA.REQUEST, res.body.datos)
      expect(err, `${JSON.stringify(mensaje, null, 2)}`).to.equal(false)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, url, params, codigoApi })
      generatorDocs.OK({ docs, doc: API_5, res })
    })

    it(`@ICE_API_1_02 empresasId no es un numero`, async () => {
      let params = { empresasId: 'a' }
      let url = `/api/web/principal/establecimientos/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, codigoApi, params, url })
    })

    it(`@ICE_API_1_03 empresasId debe ser minimo 1`, async () => {
      let params = { empresasId: 0 }
      let url = `/api/web/principal/establecimientos/empresas/${params['empresasId']}`
      let res = await request(app).get(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, codigoApi, params, url })
    })
  })
})
