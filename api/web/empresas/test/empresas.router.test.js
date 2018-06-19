const request = require('supertest')
const expect = require('chai').expect
const rfr = require('rfr')
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv)
const generatorDocs = rfr('api/config/documentacion')
const db = rfr('api/config/db')
const app = rfr('app')
const dump = rfr('api/config/dump')
const utils = rfr('api/utils')
const API = require('./API_DOCS')
const SCHEMA = require('../API_SCHEMA')
const models = db.db
let docs = []
const schema = utils.schemaFormato

describe('EMPRESAS', () => {
  let { empresas, establecimientos } = dump
  let empresa = empresas.VALIDOS[0]
  let empresa2 = empresas.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let establecimiento3 = establecimientos.VALIDOS[2]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function () {
    // db.Desconectar()
    generatorDocs.generateAPI({ docs, archivo: 'api.empresas.md', nombre: 'Empresas' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('Obtener todos', () => {
    const { API_1 } = API
    it('@CP1 una empresa creada', async () => {
      await models.empresas.Crear(empresa)
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(1)
      generatorDocs.OK({ docs, doc: API_1, res })
    })
    it('@CP2 sin empresas creadas', async () => {
      let res = await request(app).get('/api/web/empresas')
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(0)
    })
  })

  // al crear una empresa se debe crear el establecimiento
  // el establecimientos debe tener como nombre 'matriz'
  describe('API_2 Crear una empresa', () => {
    const { API_2 } = API
    const { API_2_SCHEMA } = SCHEMA
    // clases de equivalencia
    // nombre
    // actividadComercial
    // razonSocial
    // direccion
    // ruc

    // intersecciones de clases de equivalencia
    it('@ICE_API_2[0] Crea una empresa exitosamente', async () => {
      let req = { ...empresa, direccion: 'Plaza Mayor', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['id']).to.equal(1)
      expect(res.body.datos['establecimiento']['nombres']).to.equal('matriz')
      generatorDocs.OK({ docs, doc: API_2, res, req })
    })

    it('@ICE_API_2[1] nombre no valido', async () => {
      let { nombre, actividadComercial, razonSocial } = empresa
      let req = { nombre: '', actividadComercial, razonSocial, direccion: 'Plaza Mayor', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })

    it('@ICE_API_2[2] actividadComercial no valido', async () => {
      let { nombre, actividadComercial, razonSocial } = empresa
      let req = { nombre, actividadComercial: '', razonSocial, direccion: 'Plaza Mayor', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })

    it('@ICE_API_2[3] razonSocial no valido', async () => {
      let { nombre, actividadComercial, razonSocial } = empresa
      let req = { nombre, actividadComercial, razonSocial: '', direccion: 'Plaza Mayor', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })

    it('@ICE_API_2[4] direccion no valido', async () => {
      let { nombre, actividadComercial, razonSocial } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: '', ruc: '1702365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })

    it('@ICE_API_2[5] ruc no valido', async () => {
      let { nombre, actividadComercial, razonSocial } = empresa
      let req = { nombre, actividadComercial, razonSocial, direccion: '', ruc: '172365486001' }
      let res = await request(app).post('/api/web/empresas').send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
    })
  })

  describe('Actualizar', () => {
    const { API_3 } = API
    it('@CP4 actualizar datos de empresa', async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let empresaCreada2 = await models.empresas.Crear(empresa2)
      empresaCreada['nombre'] = 'Nombre cambiado'
      let req = empresaCreada
      let res = await request(app).put(`/api/web/empresas/${empresaCreada2['id']}`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_3, res, req })
    })
    it('@CP4.1 id empresa no existe', async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      empresaCreada['nombre'] = 'Nombre cambiado'
      let req = empresaCreada
      let res = await request(app).put(`/api/web/empresas/6`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El Id de la empresa no existe', docs, doc: API_3, res, req })
    })
  })

  describe('Eliminar', () => {
    const { API_4 } = API
    it('@CP5 eliminar por id', async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let res = await request(app).delete(`/api/web/empresas/${empresaCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.OK({ docs, doc: API_4, res })
    })
    it('@CP5.1 empresaId no existe', async () => {
      let res = await request(app).delete(`/api/web/empresas/50`)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ERROR({ nombre: 'El Id de la empresa no existe', docs, doc: API_4, res })
    })
  })

  describe('Obtener una empresa', () => {
    const { API_5 } = API
    it('@CP6 obtener por id', async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear(establecimiento)
      let establecimientoCreada2 = await models.establecimientos.Crear(establecimiento2)
      establecimiento3['empresasId'] = 5
      let establecimientoCreada3 = await models.establecimientos.Crear(establecimiento3)
      let res = await request(app).get(`/api/web/empresas/${empresaCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos['id']).to.equal(1)
      expect(res.body.datos['establecimientos'].length).to.equal(2)
      generatorDocs.OK({ docs, doc: API_5, res })
    })
  })
})
