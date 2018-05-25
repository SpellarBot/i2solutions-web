// mysqldump -u root i2solutions_development -p  > some_database_dump.sql
const f = '../api/config'
const conexion = require(`${f}/db`)
// 19 tablas
const accidentes = require(`${f}/dump/accidentes`).VALIDOS
const areas = require(`${f}/dump/areas`).VALIDOS
// areasPuestos
const capacitaciones = require(`${f}/dump/capacitaciones`).VALIDOS
// const empresas = require(`${f}/dump/empresas`).VALIDOS
const equipos = require(`${f}/dump/equipos`).VALIDOS
const equiposAreas = require(`${f}/dump/equiposAreas`).VALIDOS
const establecimientos = require(`${f}/dump/establecimientos`).VALIDOS
const inspecciones = require(`${f}/dump/inspecciones`).VALIDOS
const novedades = require(`${f}/dump/novedades`).VALIDOS
const personas = require(`${f}/dump/personas`).VALIDOS
// personasCapacitaciones
const personasEstablecimientos = require(`${f}/dump/personasEstablecimientos`).VALIDOS
const equiposPuestos = require(`${f}/dump/equiposPuestos`).VALIDOS
// personasPuestos
const puestos = require(`${f}/dump/puestos`).VALIDOS
const riesgos = require(`${f}/dump/riesgos`).VALIDOS
// matrices
// controles

// Se crean primero las tablas "base"
conexion.Conectar().then(async (db) => {
  let cont = 1
  for (let persona of personas) {
    await db.personas.Crear(persona)
  }

  // for (let empresa of empresas) {
  //   await db.empresas.Crear(empresa)
  // }

  for (let puesto of puestos) {
    await db.puestos.Crear(puesto)
  }

  for (let equipo of equipos) {
    await db.equipos.Crear(equipo)
  }

  for (let inspeccion of inspecciones) {
    await db.inspecciones.Crear(inspeccion)
  }

  for (let establecimiento of establecimientos) {
    await db.establecimientos.Crear({
      empresaId: 1,
      ...establecimiento
    })
  }

  for (let pe of personasEstablecimientos) {
    await db.personasEstablecimientos.Crear({
      personasId: cont,
      establecimientosId: 1,
      ...pe
    })
    cont++
  }
  cont = 1

  for (let personasId in personas) {
    personasId++
    if (personasId > personas.lenght / 2) {
      await db.personasPuestos.Crear({ personasId, puestosId: 1 })
    } else {
      await db.personasPuestos.Crear({ personasId, puestosId: 2 })
    }
  }

  for (let capacitacion of capacitaciones) {
    await db.capacitaciones.Crear({
      ...capacitacion,
      establecimientosId: 1
    })
  }

  for (let personasId in personas) {
    personasId++
    await db.personasCapacitaciones.Crear({
      capacitacionesId: 1,
      personasId
    })
  }

  for (let area of areas) {
    await db.areas.Crear({
      ...area,
      establecimientosId: 1
    })
  }

  for (let ea of equiposAreas) {
    await db.equiposAreas.Crear({
      ...ea,
      equiposId: cont,
      areasId: 1
    })
    cont++
  }
  cont = 1

  for (let ea of equiposPuestos) {
    await db.equiposPuestos.Crear({
      ...ea,
      equiposId: cont,
      puestosId: 1
    })
    cont++
  }
  cont = 1

  for (let id in puestos) {
    id++
    await db.areasPuestos.Crear({
      areasId: 1,
      puestosId: id
    })
  }

  for (let accidente of accidentes) {
    await db.accidentes.Crear({
      ...accidente,
      puestosId: 1
    })
  }

  for (let novedad of novedades) {
    let puestosId = 1
    if (puestosId > novedades.lenght / 2) { puestosId = 2 }
    await db.novedades.Crear({
      ...novedad,
      inspeccionesId: 1,
      puestosId
    })
  }

  for (let riesgo of riesgos) {
    await db.riesgos.Crear({
      ...riesgo,
      puestosId: 1
    })
  }

  await conexion.Desconectar()
}).catch((err) => {
  console.log(err)
})
