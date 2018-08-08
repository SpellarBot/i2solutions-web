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

describe('MATRIZ', () => {
  let { areas, puestos, equipos, empresas, establecimientos, riesgos, controles, matriz } = dump
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

    it('@ICE_API_1_01 Crear de forma correcta', async () => {
      let req = matriz
      let res = await request(app).post(`/api/web/matrices`).send(req)
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

  describe('API_2 OBTENER', () => {

    it('@ICE_API_2_01 Obtener por establecimientos', async () => {
      let matrizA = await models.matrices.Crear({ datos: JSON.stringify(matriz['datos']), establecimientosId })
      let params = { establecimientosId }
      let res = await request(app).get(`/api/web/matrices/establecimientos/${params['establecimientosId']}`)
      // console.log(res.body)
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

  describe('API_3 DESCARGAR EXCEL', () => {
    // let atob = require('atob')
    // let Blob = require('blob')
    it('@ICE_API_3_01 Existoso', async () => {
      let matrizA = await models.matrices.Crear({ datos: JSON.stringify(matriz['datos']), establecimientosId })
      let params = { matricesId: matrizA['id'] }
      let res = await request(app).get(`/api/web/matrices/descargar/${params['matricesId']}`)
      // let byteCharacters = atob(res.body.datos)
      // let byteNumbers = new Array(byteCharacters.length)
      // for (let i = 0; i < byteCharacters.length; i++) {
      //     byteNumbers[i] = byteCharacters.charCodeAt(i)
      // }
      // let byteArray = new Uint8Array(byteNumbers);
      // let blob = new Blob([byteArray], {type: 'application/octet-stream'})
      require("fs").writeFile("out.xlsx", res.body.datos, 'base64', function(err) {
        console.log(err);
      })
      // console.log(res.body)
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
