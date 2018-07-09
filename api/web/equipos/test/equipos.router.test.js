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

describe('EQUIPOS', () => {
  let { areas, puestos, equipos, empresas, establecimientos } = dump
  let area = areas.VALIDOS[0]
  let empresa = empresas.VALIDOS[0]
  let establecimiento = establecimientos.VALIDOS[0]
  let puesto = puestos.VALIDOS[0]
  let equipo = equipos.VALIDOS[0]
  let equipo2 = equipos.VALIDOS[1]
  let equipo3 = equipos.VALIDOS[2]
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    generatorDocs.EQUI({ equivalencias, nombre: 'Equipos' })
    // generatorDocs.generateAPI({ docs, archivo: 'api.establecimientos.md', nombre: 'Establecimientos' })
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('API_1 CREAR', () => {
    const { API_1 } = API
    let { API_1_EQUI } = EQUI
    let codigoApi = 'API_1'

    beforeEach(async () => {
    })

    it('@ICE_API_1_01 Crear un equipo de forma correcta', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let equipoGuardado = await models.equipos.Obtener({ id: res.body.datos['id'] })
      expect(equipoGuardado).to.not.equal(null)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_02 nombre tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre: 1, descripcion, fotoUrl, cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_03 nombre tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre: '', descripcion, fotoUrl, cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion: 1, fotoUrl, cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion: '', cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_06 fotoUrl tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl: 1, cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_07 fotoUrl formato no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl: 'https://', cantidad }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_08 cantidad tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad: 'a' }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })

    it('@ICE_API_1_09 cantidad tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad: -1 }
      let res = await request(app).post(`/api/web/equipos`).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_1_EQUI, req, res, codigoApi })
    })
  })

  describe('API_2 ACTUALIZAR', () => {
    const { API_2 } = API
    let { API_2_EQUI } = EQUI
    let codigoApi = 'API_2'
    let equiposId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada['id'] })
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId: establecimientoCreada['id'] })
      let areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let equiposCreada = await models.equipos.Crear({ ...equipo })
      await models.equiposAreas.Crear({ equiposId: equiposCreada['id'], areasId: areaCreada['id'] })
      await models.equiposPuestos.Crear({ equiposId: equiposCreada['id'], puestosId: puestosCreada['id'] })
      equiposId = equiposCreada['id']
    })

    it('@ICE_API_2_01 actualizar equipo de forma correcta', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre: 'aa', descripcion: 'aa', fotoUrl: 'https://image.png', cantidad: 1 }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_02 nombre tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre: 1, descripcion, fotoUrl, cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_03 nombre tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre: '', descripcion, fotoUrl, cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_04 descripcion tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion: 1, fotoUrl, cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_05 descripcion tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion: '', fotoUrl, cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_06 fotoUrl tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl: 1, cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_07 fotoUrl formato no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl: 'https://', cantidad }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_08 cantidad tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad: 'a' }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '8', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_09 cantidad tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad: 0 }
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '9', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_10 equiposId tipo no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad }
      let params = { equiposId: 'a' }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '10', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })

    it('@ICE_API_2_11 equiposId tamano no valido', async () => {
      let { nombre, descripcion, fotoUrl, cantidad } = equipo
      let req = { nombre, descripcion, fotoUrl, cantidad }
      let params = { equiposId: 0 }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).put(url).send(req)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '11', equivalencias, equi: API_2_EQUI, req, res, codigoApi, url, params })
    })
  })

  describe('API_3 ELIMINAR', () => {
    const { API_3 } = API
    let { API_3_EQUI } = EQUI
    let codigoApi = 'API_3'
    let equiposId, areasId, puestosId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada['id'] })
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId: establecimientoCreada['id'] })
      areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      puestosId = puestosCreada['id']
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let equiposCreada = await models.equipos.Crear({ ...equipo })
      await models.equiposAreas.Crear({ equiposId: equiposCreada['id'], areasId: areaCreada['id'] })
      await models.equiposPuestos.Crear({ equiposId: equiposCreada['id'], puestosId: puestosCreada['id'] })
      equiposId = equiposCreada['id']
    })

    it('@ICE_API_3_01 Eliminar un equipo de forma correcta', async () => {
      let params = { equiposId }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos).to.equal(true)
      let equipoBuscado = await models.equipos.Obtener({ id: params['equiposId'] })
      expect(equipoBuscado).to.equal(null)
      let equipoAreasBuscado = await models.equiposAreas.ObtenerPorEquipos({ id: params['equiposId'] })
      expect(equipoAreasBuscado.length).to.equal(0)
      let equipoPuestosBuscado = await models.equiposPuestos.ObtenerPorEquipos({ id: params['equiposId'] })
      expect(equipoPuestosBuscado.length).to.equal(0)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_02 equiposId no valido tipo de dato', async () => {
      let params = { equiposId: 'a' }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_03 equiposId  no valido numero', async () => {
      let params = { equiposId: 0 }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_3_04 equiposId no exite', async () => {
      let params = { equiposId: 50 }
      let url = `/api/web/equipos/${params['equiposId']}`
      let res = await request(app).delete(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_3_EQUI, res, codigoApi, url, params })
    })
  })

  describe('API_4 ANADIR EQUIPO A UN PUESTO', () => {
    const { API_4 } = API
    let { API_4_EQUI } = EQUI
    let codigoApi = 'API_4'
    let equiposId, areasId, puestosId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada['id'] })
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId: establecimientoCreada['id'] })
      areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      puestosId = puestosCreada['id']
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let equiposCreada = await models.equipos.Crear({ ...equipo })
      equiposId = equiposCreada['id']
    })

    it('@ICE_API_4_01 Anadir equipo a un puesto de forma correcta', async () => {
      let params = { equiposId, puestosId }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let equipoPuestosBuscado = await models.equiposPuestos.ObtenerPorEquipos({ id: params['equiposId'] })
      expect(equipoPuestosBuscado.length).to.equal(1)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_02 equiposId no valido tipo de dato', async () => {
      let params = { equiposId: 'a', puestosId }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_03 equiposId no valido numero', async () => {
      let params = { equiposId: 0, puestosId }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_04 puestosId no valido tipo de dato', async () => {
      let params = { equiposId, puestosId: 'a' }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_05 puestosId no valido numero', async () => {
      let params = { equiposId, puestosId: 0 }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_06 equipo no existe', async () => {
      let params = { equiposId: 50, puestosId }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_4_07 puesto no existe', async () => {
      let params = { equiposId, puestosId: 50 }
      let url = `/api/web/equipos/${params['equiposId']}/puestos/${params['puestosId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_4_EQUI, res, codigoApi, url, params })
    })
  })


  describe('API_5 ANADIR EQUIPO A UN AREA', () => {
    const { API_5 } = API
    let { API_5_EQUI } = EQUI
    let codigoApi = 'API_5'
    let equiposId, areasId, puestosId = -1

    beforeEach(async () => {
      let empresaCreada = await models.empresas.Crear(empresa)
      let establecimientoCreada = await models.establecimientos.Crear({ ...establecimiento, empresasId: empresaCreada['id'] })
      let areaCreada = await models.areas.Crear({ ...area, establecimientosId: establecimientoCreada['id'] })
      areasId = areaCreada['id']
      let puestosCreada = await models.puestos.Crear({ ...puesto })
      puestosId = puestosCreada['id']
      await models.areasPuestos.Crear({ puestosId: puestosCreada['id'], areasId: areaCreada['id'] })
      let equiposCreada = await models.equipos.Crear({ ...equipo })
      equiposId = equiposCreada['id']
    })

    it('@ICE_API_5_01 Anadir equipo a un puesto de forma correcta', async () => {
      let params = { equiposId, areasId }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      let equipoPuestosBuscado = await models.equiposAreas.ObtenerPorEquipos({ id: params['equiposId'] })
      expect(equipoPuestosBuscado.length).to.equal(1)
      generatorDocs.ADDINTER({ codigo: '1', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_02 equiposId no valido tipo de dato', async () => {
      let params = { equiposId: 'a', areasId }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '2', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_03 equiposId no valido numero', async () => {
      let params = { equiposId: 0, areasId }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '3', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_04 areasId no valido tipo de dato', async () => {
      let params = { equiposId, areasId: 'a' }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '4', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_05 areasId no valido numero', async () => {
      let params = { equiposId, areasId: 0 }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '5', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_06 equipo no existe', async () => {
      let params = { equiposId: 50, areasId }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '6', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })

    it('@ICE_API_5_07 area no existe', async () => {
      let params = { equiposId, areasId: 50 }
      let url = `/api/web/equipos/${params['equiposId']}/areas/${params['areasId']}`
      let res = await request(app).put(url)
      expect(res.body.estado).to.equal(false)
      expect(res.body.codigoEstado).to.equal(200)
      generatorDocs.ADDINTER({ codigo: '7', equivalencias, equi: API_5_EQUI, res, codigoApi, url, params })
    })
  })
})
