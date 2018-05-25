const db = require('../../config/db')
const app = require('../../../app')
const request = require('supertest')
const assert = require('assert')
const _ = require('lodash')
const expect = require('chai').expect
const models = require('../../config/db').db

describe('MOVIL TEST', () => {
  before('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })
  after('Desconectar la base de datos', function() {
    db.Desconectar()
  })
  afterEach('Limpiar la base de datos', async () => {
    await db.Limpiar()
  })

  describe('@t1 OBTENER AREAS TRABAJO', () => {
    // const puestoTrabajo = require('./dump/puestosTrabajo.json')[0]
    // const areaTrabajo = require('./dump/areasTrabajo.json')[0]
    // const areaTrabajo2 = require('./dump/areasTrabajo.json')[1]
    // it('@t1.1 OK', async () => {
    //   // areas
    //   let areaCreada = await models.AreasTrabajo.Crear(areaTrabajo)
    //   let areaCreada2 = await models.AreasTrabajo.Crear(areaTrabajo2)

    //   // puestos
    //   let puestoCreado = await models.PuestosTrabajo.Crear(puestoTrabajo)
    //   let puestoCreado2 = await models.PuestosTrabajo.Crear(puestoTrabajo)
    //   let puestoCreado3 = await models.PuestosTrabajo.Crear(puestoTrabajo)

    //   // anadir la relacion
    //   let areaPuestos = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada['id'], puestosTrabajoId: puestoCreado['id'] })
    //   let areaPuestos2 = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada['id'], puestosTrabajoId: puestoCreado2['id'] })
    //   let areaPuesto3 = await models.AreasTrabajo_PuestosTrabajo.Crear({ areasTrabajoId: areaCreada2['id'], puestosTrabajoId: puestoCreado3['id'] })

    //   let res = await request(app).get(`/api/movil/puesto_trabajo/area_trabajo/${areaCreada['id']}`)
    //   expect(res.body.estado).to.equal(true)
    //   expect(res.body.codigoEstado).to.equal(200)
    //   expect(res.body.datos.length).to.equal(2)

    // })
    // it('@t1.2 areaId no existe')
    // it('@t1.3 areaId no es valido (no es un entero)')
  })

  describe('@t2 CREAR UNA NOVEDAD', () => {
    // const novedad = require('./dump/novedades.json')[0]
    // it('@t2.1 OK', async () => {
    //   let res = await request(app).post(`/api/movil/novedad`).send({ ...novedad, puesto_id: 1 })
    //   expect(res.body.estado).to.equal(true)
    //   expect(res.body.codigoEstado).to.equal(200)
    //   expect(res.body.datos.descripcion).to.equal(novedad.descripcion)
    // })
  })

  describe('@t5 ATENDER NOVEDAD', () => {
    // it('@t5.1 OK', async () => {
    //   let novedad = require('./dump/novedades.json')[0]
    //   let novedadCreada = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: 1})
    //   let res = await request(app).post(`/api/movil/novedad/${novedadCreada['id']}/puesto_trabajo/1`).send({ atendida: true , descripcionAtendida: 'fue atendida desc', nombre: 'Mi novedad'})
    //   console.log(res.body)
    // })
  })

  describe('@t4 CREAR OBTENER DATOS INICIO', () => {
    // it('@t4.1 OK', async () => {
    //   const puesto = require('./dump/puestosTrabajo')[0]
    //   let area = require('./dump/areasTrabajo.json')[0]

    //   let areaCreada = await models.AreasTrabajo.Crear(area)
    //   let puestoCreado = await models.PuestosTrabajo.Crear(puesto)

    //   let areaId = areaCreada['id']
    //   let puestoId = puestoCreado['id']
    //   let areas_puesto = await models.AreasTrabajo_PuestosTrabajo.Crear({ areas_trabajo_id: areaId, puestos_trabajo_id: puestoId })

    //   const persona = require('./dump/personas.json')[0]
    //   const persona2 = require('./dump/personas.json')[1]
    //   let personaCreada = await models.Persona.Crear(persona)
    //   let personaCreada2 = await models.Persona.Crear(persona2)
    //   let personaId = personaCreada['id']
    //   let personaId2 = personaCreada2['id']
    //   let personaPuesto = await models.Personas_PuestosTrabajo.Crear({ personas_id: personaId, puestos_trabajo_id: puestoId })
    //   let personaPuesto2 = await models.Personas_PuestosTrabajo.Crear({ personas_id: personaId2, puestos_trabajo_id: puestoId })

    //   let novedad = require('./dump/novedades.json')[0]
    //   let novedadCreada = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: puestoId})
    //   let novedadCreada2 = await models.Novedad.Crear({ ...novedad, puestos_trabajo_id: puestoId})

    //   let riesgo = await require('./dump/riesgos.json')[0]
    //   let riesgoCreado = await models.Riesgo.Crear({ ...riesgo, puestos_trabajo_id: puestoId, equipos_id: 1})
    //   await models.Novedad.Atender({ id: novedadCreada['id'], atendido: true })

    //   const equipo = require('./dump/equiposSeguridad.json')[0]
    //   let equipoReal = await require('./dump/puestosTrabajo_equiposSeguridad.json')[0]
    //   let equipoCreada = await models.EquiposSeguridad.Crear(equipo)
    //   let relacion = await models.PuestosTrabajo_Equipo.Crear({ ...equipoReal, puestos_trabajo_id: puestoId, equipos_id: equipoCreada['id']})

    //   let accidente = await require('./dump/accidentes.json')[0]
    //   let accidenteCreado = await models.Accidente.Crear({ ...accidente, puestos_trabajo_id: puestoId})

    //   const capacitacion = require('./dump/capacitaciones.json')[0]
    //   let capacitacionCreada = await models.Capacitacion.Crear({ ...capacitacion, establecimientos_id: 1})
    //   let res = await request(app).get(`/api/movil/area/${areaId}/puesto/${puestoId}/${1}`)
    // })
  })
})


// https://mochajs.org/#dynamically-generating-tests Para generar los casos de errores

// The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().

// context() is just an alias for describe(), and behaves the same way; it just provides a way to keep tests easier to read and organized. Similarly, specify() is an alias for it().


// ['nl', 'fr', 'de'].forEach(function(arrElement) {
//   describe(arrElement + ' suite', function() {
//     it('This thing should behave like this', function(done) {
//       foo.should.be.a.String();
//       done();
//     });
//     it('That thing should behave like that', function(done) {
//       foo.should.have.length(3);
//       done();
//     });
//   });
// });
// var assert = require('assert');
// function add() {
//   return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
//     return prev + curr;
//   }, 0);
// }

// describe('add()', function() {
//   var tests = [
//     {args: [1, 2],       expected: 3},
//     {args: [1, 2, 3],    expected: 6},
//     {args: [1, 2, 3, 4], expected: 10}
//   ];

//   tests.forEach(function(test) {
//     it('correctly adds ' + test.args.length + ' args', function() {
//       var res = add.apply(null, test.args);
//       assert.equal(res, test.expected);
//     });
//   });
// });
