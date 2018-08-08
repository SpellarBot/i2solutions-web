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

// const SCHEMA = require('../API_SCHEMA')
// const API = require('./API_DOCS')
// const EQUI = require('./API_EQUI')
const models = db.db
let docs = []
let equivalencias = {}

describe('EQUIPOS', () => {
  let { areas, puestos, equipos, empresas, establecimientos, riesgos, controles } = dump
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let control = controles.VALIDOS[0]
  let control2 = controles.VALIDOS[1]
  let establecimiento = establecimientos.VALIDOS[0]
  let establecimiento2 = establecimientos.VALIDOS[1]
  let riesgo = riesgos.VALIDOS[0]
  let establecimiento3 = establecimientos.VALIDOS[2]
  let puesto = puestos.VALIDOS[0]
  let equipo = equipos.VALIDOS[0]
  let equipo2 = equipos.VALIDOS[1]
  let equipo3 = equipos.VALIDOS[2]
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
    // generatorDocs.EQUI({ equivalencias, nombre: 'Equipos' })
    // generatorDocs.generateAPI({ docs, archivo: 'api.equipos.md', nombre: 'Equipos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 CREAR', () => {
    // const { API_1 } = API
    // let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'
    let puestosId = -1, riesgosId = -1
    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let riesgosCreada = await models.riesgos.Crear({ ...riesgos,  puestosId })
      riesgosId = riesgosCreada['id']
    })

    it('@ICE_API_1_01 Crear de forma correcta', async () => {
      let { descripcion, tipo, estaImplementado } = control
      let req = { descripcion, tipo, estaImplementado, puestosId, riesgosId }
      let res = await request(app).post(`/api/web/controles`).send(req)
      // expect(res.body.estado).to.equal(true)
      // expect(res.body.codigoEstado).to.equal(200)
      // let equipoGuardado = await models.equipos.Obtener({ id: res.body.datos['id'] })
      // expect(equipoGuardado).to.not.equal(null)
      // let relacionGuardada = await models.equiposPuestos.ObtenerPorPuestos({ id: puestosId })
      // expect(relacionGuardada.length).to.equal(1)
      // generatorDocs.OK({ docs, doc: API_1, res })
      // generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 CREAR BULK', () => {
    // const { API_1 } = API
    // let { API_1_EQUI } = EQUI
    // let codigoApi = 'API_1'
    let puestosId = -1, riesgosId = -1
    beforeEach(async () => {
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      puestosId = puestosCreada['id']
      let riesgosCreada = await models.riesgos.Crear({ ...riesgos,  puestosId })
      riesgosId = riesgosCreada['id']
    })

    it('@ICE_API_2_01 Crear de forma correcta', async () => {
      let { descripcion, tipo, estaImplementado } = control
      let req1 = { ...control, puestosId, riesgosId }
      let req2 = { ...control2, puestosId, riesgosId }
      let res = await request(app).post(`/api/web/controles/bulk`).send([req1,req2])
      console.log(res.body)
      // expect(res.body.estado).to.equal(true)
      // expect(res.body.codigoEstado).to.equal(200)
      // let equipoGuardado = await models.equipos.Obtener({ id: res.body.datos['id'] })
      // expect(equipoGuardado).to.not.equal(null)
      // let relacionGuardada = await models.equiposPuestos.ObtenerPorPuestos({ id: puestosId })
      // expect(relacionGuardada.length).to.equal(1)
      // generatorDocs.OK({ docs, doc: API_1, res })
      // generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })
})
