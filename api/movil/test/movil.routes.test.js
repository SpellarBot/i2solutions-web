const db = require('../../config/db')
const app = require('../../../app')
const request = require('supertest')
const assert = require('assert')
const _ = require('lodash')
const expect = require('chai').expect

describe('MOVIL TEST', () => {
  const models = require('../../config/db').db
  before(async () => {
    await db.Limpiar()
  })
  after(function() {
    db.Desconectar()
    // generatorDocs.generateAPI({ docs })
  })
  afterEach(async () => {
    await db.Limpiar()
  })

  describe('@t1 OBTENER AREAS TRABAJO', () => {
    const puestoTrabajo = require('./dump/puestosTrabajo.json')[0]
    const areaTrabajo = require('./dump/areasTrabajo.json')[0]
    const areaTrabajo2 = require('./dump/areasTrabajo.json')[1]
    it('@t1.1 OK', async () => {
      // areas
      let areaCreada = await models.AreasTrabajo.Crear(areaTrabajo)
      let areaCreada2 = await models.AreasTrabajo.Crear(areaTrabajo2)

      // puestos
      let puestoCreado = await models.PuestosTrabajo.Crear(puestoTrabajo)
      let puestoCreado2 = await models.PuestosTrabajo.Crear(puestoTrabajo)
      let puestoCreado3 = await models.PuestosTrabajo.Crear(puestoTrabajo)

      // anadir la relacion
      let areaPuestos = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada['id'], puestosTrabajoId: puestoCreado['id'] })
      let areaPuestos2 = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada['id'], puestosTrabajoId: puestoCreado2['id'] })
      let areaPuesto3 = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada2['id'], puestosTrabajoId: puestoCreado3['id'] })

      let res = await request(app).get(`/api/movil/puesto_trabajo/area_trabajo/${areaCreada['id']}`)
      expect(res.body.estado).to.equal(true)
      expect(res.body.codigoEstado).to.equal(200)
      expect(res.body.datos.length).to.equal(2)

    })
    it('@t1.2 areaId no existe')
    it('@t1.3 areaId no es valido (no es un entero)')
  })

    describe('@t2 CREAR UNA NOVEDAD', () => {
      const novedad = require('./dump/novedades.json')[0]
      it('@t2.1 OK', async () => {
        let res = await request(app).post(`/api/movil/novedad`).send({ ...novedad, puesto_id: 1 })
        expect(res.body.estado).to.equal(true)
        expect(res.body.codigoEstado).to.equal(200)
        expect(res.body.datos.descripcion).to.equal(novedad.descripcion)
      })
    })


    describe('@t3 OBTENER DATOS INICIAL PUESTO', () => {

       it('@t3.1 CREAR UNA PERSONA', async () => {
        const persona = require('./dump/personas.json')[0]
        let personaCreada = await models.Persona.Crear(persona)
       })

       it('@t3.2 CREAR UN PUESTO TRABAJO', async () => {
        const puesto = require('./dump/puestosTrabajo')[0]
        let puestoTrabajoCreada = await models.PuestosTrabajo.Crear(puesto)
       })

       it('@t3.3 CREAR UNA RELACION PERSONAS PUESTOSTRABAJO', async () => {
        let relacion = await models.Personas_PuestosTrabajo.Crear({ personas_id: 1, puestos_trabajo_id: 1})
        console.log(relacion)
       })

       it('@t3.4 CREAR CAPACITACIONES', async () => {
        const capacitacion = require('./dump/capacitaciones.json')[0]
        let capacitacionCreada = await models.Capacitacion.Crear({ ...capacitacion, establecimientos_id: 1})
        // console.log(capacitacionCreada)
       })

       it('@t3.5 CREAR ESTABLECIMIENTOS', async () => {
        const establecimiento = require('./dump/establecimientos.json')[0]
        let establecimientoCreada = await models.Establecimiento.Crear({ ...establecimiento, empresas_id: 1})
        // console.log(establecimientoCreada)
       })

       it('@t3.6 CREAR EQUIPOS SEGURIDAD', async () => {
        const equipo = require('./dump/equiposSeguridad.json')[0]
        let equipoCreada = await models.EquiposSeguridad.Crear(equipo)
       })

       it('@t3.7 CREAR RELACION EQUIPOS SEGURIDAD _ AREAS TRABAJO', async () => {
        let relacion = await models.EquiposSeguridad_AreasTrabajo.Crear({ equipos_id: 1, areas_trabajo_id: 1, cantidad: 1 })
       })

       it('@t3.8 CREAR NOVEDAD', async () => {
        let novedad = require('./dump/novedades.json')[0]
        let novedadCreada = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: 1})
       })

       it('@t3.9 CREAR AREA TRABAJO', async () => {
        let area = require('./dump/areasTrabajo.json')[0]
        let areaCreada = await models.AreasTrabajo.Crear({ ...area, establecimientos_id: 1})
        console.log(areaCreada)
       })

       it('@t3.10 CREAR RELACION AREAS _ PUESTOS', async () => {
        let relacion = await models.AreasTrabajo_PuestosTrabajo.Crear({ puestos_trabajo_id: 1, areas_trabajo_id: 1})
        console.log(relacion)
       })

       it('@t3.11 CREAR EMPRESAS', async () => {
        let empresa = require('./dump/empresas.json')[0]
        let empresaCreada = await models.Empresa.Crear(empresa)
        console.log(empresaCreada)
       })

       it('@t3.12 CREAR ESTABLECIMIENTOS', async () => {
        let establecimiento = require('./dump/establecimientos.json')[0]
        let establecimientoCreado = await models.Establecimiento.Crear(establecimiento)
        console.log(establecimientoCreado)
       })

       it('@t3.13 CREAR RELACION PERSONAS ESTABLECIMIENTOS', async () => {
        let data = require('./dump/personas_establecimientos.json')[0]
        let relacion = await models.Personas_Establecimiento.Crear({ ...data, personas_id: 1, establecimientos_id: 1 })
        console.log(relacion)
       })

       it('@t3.14 CREAR RELACION PERSONAS CAPACITACIONES', async () => {
        let relacion = await models.Personas_Capacitacion.Crear({ personas_id: 1, capacitaciones_id: 1})
        console.log(relacion)
       })

       it('@t3.15 CREAR INSPECCION', async () => {
        let inspeccion = await require('./dump/inspecciones.json')[0]
        let relacion = await models.Inspeccion.Crear(inspeccion)
        console.log(relacion)
       })

       it('@t3.16 CREAR ACCIDENTE', async () => {
        let accidente = await require('./dump/accidentes.json')[0]
        let accidenteCreado = await models.Accidente.Crear({ ...accidente, puestos_trabajo_id: 1})
        console.log(accidenteCreado)
       })

       it('@t3.17 CREAR RELACION PUESTOS TRABAJO EQUIPOS SEGURIDAD', async () => {
        let data = await require('./dump/puestosTrabajo_equiposSeguridad.json')[0]
        let relacion = await models.PuestosTrabajo_Equipo.Crear({ ...data, puestos_trabajo_id: 1, equipos_id: 1})
        console.log(relacion)
       })

       it('@t3.18 CREAR RIESGO', async () => {
        let data = await require('./dump/riesgos.json')[0]
        let relacion = await models.Riesgo.Crear({ ...data, puestos_trabajo_id: 1, equipos_id: 1})
        console.log(relacion)
       })



       // [x] personas
       // [x] personas_establecimientos
       // [x] establecimientos
       // [x] empresas
       // [x] personas_capacitaciones
       // [x] personas_puestosTrabajo
       // [x] capacitaciones
       // [x] puestosTrabajo
       // [x] areasTrabajo_puestosTrabajo
       // [x] areasTrabajo
       // [x] equiposSeguridad_areasTrabajo
       // [x] novedades
       // [x] equiposSeguridad
       // [x] puestosTrabajo_equiposSeguridad
       // [x] inspecciones
       // [x] accidentes
       // [x] valoracion_riesgo
       // ------

       // [ ] controles
       // [ ] matricesRiesgos
  })
  describe('@t4 CREAR OBTENER DATOS INICIO', () => {
    it('@t4.1 OK', async () => {
      const puesto = require('./dump/puestosTrabajo')[0]
      let area = require('./dump/areasTrabajo.json')[0]

      let areaCreada = await models.AreasTrabajo.Crear(area)
      let puestoCreado = await models.PuestosTrabajo.Crear(puesto)

      let areaId = areaCreada['id']
      let puestoId = puestoCreado['id']
      let areas_puesto = await models.AreasTrabajo_PuestosTrabajo.Crear({ areas_trabajo_id: areaId, puestos_trabajo_id: puestoId })

      const persona = require('./dump/personas.json')[0]
      const persona2 = require('./dump/personas.json')[1]
      let personaCreada = await models.Persona.Crear(persona)
      let personaCreada2 = await models.Persona.Crear(persona2)
      let personaId = personaCreada['id']
      let personaId2 = personaCreada2['id']
      let personaPuesto = await models.Personas_PuestosTrabajo.Crear({ personas_id: personaId, puestos_trabajo_id: puestoId })
      let personaPuesto2 = await models.Personas_PuestosTrabajo.Crear({ personas_id: personaId2, puestos_trabajo_id: puestoId })

      let novedad = require('./dump/novedades.json')[0]
      let novedadCreada = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: puestoId})
      let novedadCreada2 = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: puestoId})

      let riesgo = await require('./dump/riesgos.json')[0]
      let riesgoCreado = await models.Riesgo.Crear({ ...riesgo, puestos_trabajo_id: puestoId, equipos_id: 1})
      await models.Novedad.Atender({ id: novedadCreada['id'], atendido: true })

      const equipo = require('./dump/equiposSeguridad.json')[0]
      let equipoReal = await require('./dump/puestosTrabajo_equiposSeguridad.json')[0]
      let equipoCreada = await models.EquiposSeguridad.Crear(equipo)
      let relacion = await models.PuestosTrabajo_Equipo.Crear({ ...equipoReal, puestos_trabajo_id: puestoId, equipos_id: equipoCreada['id']})

      let accidente = await require('./dump/accidentes.json')[0]
      let accidenteCreado = await models.Accidente.Crear({ ...accidente, puestos_trabajo_id: puestoId})

      const capacitacion = require('./dump/capacitaciones.json')[0]
      let capacitacionCreada = await models.Capacitacion.Crear({ ...capacitacion, establecimientos_id: 1})
      let res = await request(app).get(`/api/movil/area/${areaId}/puesto/${puestoId}/${1}`)
      console.log(res.body)
      // id
      // area_id
      // nombre
      // cantidadEmpleados
      // novedadesSinAtender
      // novedadesAtendidas
      // riesgos
      // equiposProteccion
      // detallesAccidentes
      // detallesCapacitaciones

      // a BORRAR
      // equiposExistentes
      // fechaUltimaCapacitacion
      // fechaUltimoAccidente

    })
  })

  describe('@t5 ATENDER NOVEDAD', () => {
    it('@t5.1 OK', async () => {
      let novedad = require('./dump/novedades.json')[0]
      let novedadCreada = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: 1})
      let res = await request(app).post(`/api/movil/novedad/${novedadCreada['id']}/puesto_trabajo/1`).send({ atendida: true , descripcionAtendida: 'fue atendida desc', nombre: 'Mi novedad'})
      console.log(res.body)
    })
  })
  // capacitacion
})


// https://mochajs.org/#dynamically-generating-tests Para generar los casos de errores
// By default, mocha looks for the glob ./test.js, so you may want to put your tests in test/ folder. If you want to include sub directories, use --recursive, since ./test/*.js only matches files in the first level of test and ./test/**.js only matches files in the second level of test.
