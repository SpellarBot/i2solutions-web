// mysqldump -u root i2solutions_development -p  > some_database_dump.sql
const f = '../api/config'
const conexion = require(`${f}/db`)
// 19 tablas
const accidentes = require(`${f}/dump/accidentes`).VALIDOS
const areas = require(`${f}/dump/areas`).VALIDOS
// areas_puestos
const capacitaciones = require(`${f}/dump/capacitaciones`).VALIDOS
const empresas = require(`${f}/dump/empresas`).VALIDOS
const equipos = require(`${f}/dump/equipos`).VALIDOS
const equipos_areas = require(`${f}/dump/equipos_areas`).VALIDOS
const establecimientos = require(`${f}/dump/establecimientos`).VALIDOS
const inspecciones = require(`${f}/dump/inspecciones`).VALIDOS
const novedades = require(`${f}/dump/novedades`).VALIDOS
const personas = require(`${f}/dump/personas`).VALIDOS
// personas_capacitaciones
const personas_establecimientos = require(`${f}/dump/personas_establecimientos`).VALIDOS
const equipos_puestos = require(`${f}/dump/equipos_puestos`).VALIDOS
// personas_puestos
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
    await db.establecimientos.Crear({ empresa_id: 1, ...establecimiento })
  }

  for (let pe of personas_establecimientos) {
    await db.personas_establecimientos.Crear({
      personas_id: cont,
      establecimientos_id: 1,
      ...pe,
    })
    cont++
  }
  cont = 1

  for (let personas_id in personas) {
    personas_id++
    if (personas_id > personas.lenght/2) {
      await db.personas_puestos.Crear({ personas_id, puestos_id: 1 })
    } else {
      await db.personas_puestos.Crear({ personas_id, puestos_id: 2 })
    }
  }

  for (let capacitacion of capacitaciones) {
    await db.capacitaciones.Crear({
      ...capacitacion,
      establecimientos_id: 1
    })
  }

  for (let personas_id in personas) {
    personas_id++
    await db.personas_capacitaciones.Crear({
      capacitaciones_id: 1,
      personas_id
    })
  }

  for (let area of areas) {
    await db.areas.Crear({
      ...area,
      establecimientos_id: 1
    })
  }

  for (let ea of equipos_areas) {
    await db.equipos_areas.Crear({
      ...ea,
      equipos_id: cont,
      areas_id: 1,
    })
    cont++
  }
  cont = 1

  for (let ea of equipos_puestos) {
    await db.equipos_puestos.Crear({
      ...ea,
      equipos_id: cont,
      puestos_id: 1,
    })
    cont++
  }
  cont = 1

  for (let id in puestos) {
    id++
    await db.areas_puestos.Crear({
      areas_id: 1,
      puestos_id: id
    })
  }

  for (let accidente of accidentes) {
    await db.accidentes.Crear({
      ...accidente,
      puestos_id: 1
    })
  }

  for (let novedad of novedades) {
    let puestos_id = 1
    if (puestos_id > novedades.lenght/2)
      puestos_id = 2
    await db.novedades.Crear({
      ...novedad,
      inspecciones_id: 1,
      puestos_id
    })
  }

  for (let riesgo of riesgos) {
    await db.riesgos.Crear({
      ...riesgo,
      puestos_id: 1
    })
  }

  await conexion.Desconectar()
}).catch((err) => {
  console.log(err)
})
