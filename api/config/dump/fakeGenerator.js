const faker = require('faker')
const seedrandom = require('seedrandom')
var rng = seedrandom('hello.')
faker.seed(123)
faker.locale = 'es'
const conexion = require('../db')
const random = (cantidad) => {
  var text = ''
  var possible = '0123456789'
  for (var i = 0; i < cantidad; i++) { text += possible.charAt(Math.floor(rng() * possible.length)) }
  return text
}

function ri (min, max) {
  return Math.floor(rng() * (max - min + 1) + min)
}

let roles = ['inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado']
let perfilesOcupacionales = ['Profesor', 'Tornador', 'Navegante']
let areasDatos = [
  {
    'actividad': 'gerencia',
    'nombre': 'Gerente General'
  },
  {
    'actividad': 'recursos humanos',
    'nombre': 'Jefe TTHH'
  },
  {
    'actividad': 'subgerencia',
    'nombre': 'Subgerente'
  }
]

let puestosDatos = [
  {
    'nombre': 'Oficina de gerente general',
    'descripcion': ''
  },
  {
    'nombre': 'Oficina de jefe de TTHH',
    'descripcion': ''
  },
  {
    'nombre': 'Jefe de Matricería',
    'descripcion': ''
  },
  {
    'nombre': 'Maticero',
    'descripcion': ''
  },
  {
    'nombre': 'Jefe de Inyección',
    'descripcion': ''
  },
  {
    'nombre': 'Operador de máquina de inyección',
    'descripcion': ''
  }
]

let equiposDatos = [
  {
    'descripcion': '',
    'nombre': 'Extintor',
    'fotoUrl': 'http://jwmeletrica.com.br/Eshop.Admin/Imagens/jwmeletrica/CO2%20(1)%202.jpg'
  },
  {
    'descripcion': 'Siempre usar',
    'nombre': 'Guantes',
    'fotoUrl': 'http://www.wermax.com.uy/wp-content/uploads/2015/03/Guantes.jpg'
  },
  {
    'descripcion': '',
    'nombre': 'Protector Ruido',
    'fotoUrl': 'https://thumbs.dreamstime.com/z/protectores-contra-el-ruido-20939463.jpg'
  },
  {
    'descripcion': '',
    'nombre': 'Casco',
    'fotoUrl': 'https://www.bricomart.es/mediap/478/3/c/e/0/10571183_fo_02_web.jpg'
  }
]

let prioridades = ['alta', 'media', 'baja']
let tiposRiesgos = ['Alza de cosas', 'Caida de objetos']

async function crearEmpresas ({ db }) {
  let empresa = {
    nombre: faker.company.companyName(),
    actividadComercial: faker.company.catchPhrase(),
    razonSocial: faker.company.catchPhrase(),
    urlFoto: 'https://www.seoclerk.com/pics/558390-11FO8A1505384509.png' // random
  }
  let empresaCreada = await db.empresas.Crear(empresa)
  return empresaCreada['id']
}

async function crearEstablecimientos ({ db, empresasId }, tipo) {
  let establecimiento = {
    nombres: faker.company.companyName(),
    direccion: faker.address.streetAddress(),
    ruc: `093${random(5)}47001`,
    empresasId
  }
  let establecimientoCreada = {}
  if (tipo) {
    establecimiento['nombres'] = 'matriz'
    establecimientoCreada = await db.establecimientos.Crear(establecimiento)
  } else {
    establecimientoCreada = await db.establecimientos.Crear(establecimiento)
  }
  return establecimientoCreada['id']
}

async function crearAreas ({ establecimientosId, db }) {
  let areasIndex = ri(0, areasDatos.length - 1)
  let area = {
    actividad: areasDatos[areasIndex]['actividad'],
    nombre: areasDatos[areasIndex]['nombre'],
    fotoUrl: faker.image.imageUrl(),
    metrosCuadrados: '20x20',
    descripcionLugar: faker.lorem.sentence(),
    establecimientosId
  }
  let areaCreada = await db.areas.Crear({
    ...area,
    establecimientosId
  })
  return areaCreada['id']
}

async function crearPuestos ({ db }) {
  let puestosIndex = ri(0, equiposDatos.length - 1)
  let puesto = {
    nombre: puestosDatos[puestosIndex]['nombre'],
    descripcion: puestosDatos[puestosIndex]['descripcion']
  }
  let puestoCreada = await db.puestos.Crear(puesto)
  return puestoCreada['id']
}

function crearAreasPuestos ({ db, areasId, puestosId }) {
  return new Promise((resolve) => {
    resolve(db.areasPuestos.Crear({ areasId, puestosId }))
  })
}

async function crearEquipos ({ db }) {
  let equipoIndex = ri(0, equiposDatos.length - 1)
  let equipo = {
    nombre: equiposDatos[equipoIndex]['nombre'],
    descripcion: equiposDatos[equipoIndex]['descripcion'],
    fotoUrl: equiposDatos[equipoIndex]['fotoUrl'],
    cantidad: ri(0, 10)
  }
  let equipoCreada = await db.equipos.Crear(equipo)
  return equipoCreada['id']
}

function crearEquiposPuestos ({ equiposId, puestosId, db }) {
  return new Promise((resolve) => {
    resolve(db.equiposPuestos.Crear({ equiposId, puestosId }))
  })
}

async function crearCapacitaciones ({ areasId, db }) {
  let capacitacion = {
    nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
    descripcion: faker.lorem.sentence(),
    tema: faker.lorem.words(),
    fechaCapacitacion: `${faker.date.past()}`,
    areasId
  }
  let capactionesCreada = await db.capacitaciones.Crear(capacitacion)
  return capactionesCreada['id']
}

function crearPersonasCapacitaciones ({ personasId, capacitacionesId, db }) {
  return new Promise((resolve) => {
    resolve(db.personasCapacitaciones.Crear({
      capacitacionesId,
      personasId
    }))
  })
}

function crearAccidentes ({ db, puestosId }) {
  return new Promise((resolve) => {
    let accidente = {
      descripcion: faker.lorem.sentence(),
      nombre: faker.lorem.words(),
      heridos: ri(0, 2),
      atendidoEnEmpresa: false,
      muertos: ri(0, 2),
      fecha: `${faker.date.past()}`,
      puestosId
    }
    resolve(db.accidentes.Crear(accidente))
  })
}

async function crearInspecciones ({ db }) {
  let inspeccion = {
    nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
    fechaInicio: faker.date.past(),
    tipoInspeccion: '',
    fechaFin: faker.date.recent()
  }
  let inspeccionCreada = await db.inspecciones.Crear(inspeccion)
  return inspeccionCreada['id']
}

function crearNovedadesSinAtender ({ puestosId, inspeccionesId, db }) {
  return new Promise((resolve) => {
    let novedad = {
      descripcion: faker.lorem.words(),
      prioridad: prioridades[ri(0, 2)],
      fecha: faker.date.past(),
      fueAtendida: false,
      puestosId,
      inspeccionesId
    }
    resolve(db.novedades.Crear(novedad))
  })
}

function crearNovedadAtendida ({ puestosId, inspeccionesId, db }) {
  return new Promise((resolve) => {
    let novedad = {
      descripcion: faker.lorem.words(),
      descripcionAtendida: faker.lorem.words(),
      prioridad: prioridades[ri(0, 2)],
      fecha: faker.date.past(),
      fotoUrl: faker.image.imageUrl(),
      fueAtendida: true,
      puestosId,
      inspeccionesId
    }
    resolve(db.novedades.Crear(novedad))
  })
}

async function crearPersonas ({ db }) {
  let persona = {
    nombres: faker.name.firstName(),
    apellidos: faker.name.lastName(),
    correo: faker.internet.email().toLowerCase(),
    cedula: `093${random(5)}47`, // '0931823447'
    clave: '1234',
    telefono: `098${random(5)}70`,
    fechaNacimiento: `${faker.date.past()}`,
    perfilOcupacional: perfilesOcupacionales[ri(0, perfilesOcupacionales.length - 1)],
    usuario: faker.internet.userName(),
    rol: roles[ri(0, roles.length - 1)],
    creadaDump: true
  }
  try {
    let personaCreada = await db.personas.CrearConClave(persona)
    return personaCreada['id']
  } catch (err) {
    return null
  }
}

function crearPersonasPuestos ({ personasId, puestosId, db }) {
  return new Promise((resolve) => {
    resolve(db.personasPuestos.Crear({ personasId, puestosId }))
  })
}

function crearRiesgos ({ puestosId, db }) {
  return new Promise((resolve) => {
    let riesgo = {
      clasificacion: faker.lorem.words(),
      descripcion: faker.lorem.sentence(),
      fecha: `${faker.date.past()}`
    }
    resolve(db.riesgos.Crear(riesgo))
  })
}

conexion.Conectar().then(async (db) => {
  await conexion.Limpiar()
  let promesas = []
  // crear admin
  await db.personas.CrearConClave({
    nombres: 'admin',
    apellidos: 'admin',
    correo: 'admin@gmail.com',
    cedula: '0931823447',
    clave: 'admin',
    telefono: '259956326',
    fechaNacimiento: `${faker.date.past()}`,
    perfilOcupacional: 'admin',
    usuario: 'admin',
    rol: 'admin-i2solutions',
    creadaDump: true
  })

  await db.personas.CrearConClave({
    nombres: 'Joel',
    apellidos: 'Rodriguez',
    correo: 'joelerll@gmail.com',
    cedula: '0931823447',
    clave: '1234',
    telefono: '259956326',
    fechaNacimiento: `${faker.date.past()}`,
    perfilOcupacional: 'admin',
    usuario: 'joelerll',
    rol: 'inspector-seguridad',
    creadaDump: true
  })

  let jefe = await db.personas.CrearConClave({
    nombres: 'Eduardo',
    apellidos: 'Llamuca',
    correo: 'joelerll95@gmail.com',
    cedula: '0931823447',
    clave: '1234',
    telefono: '259956326',
    fechaNacimiento: `${faker.date.past()}`,
    perfilOcupacional: 'admin',
    usuario: 'joeedrod',
    rol: 'jefe-seguridad',
    creadaDump: true
  })

  await db.personas.CrearConClave({
    nombres: 'Xavier',
    apellidos: 'Idrovo',
    correo: 'xidrovo@gmail.com',
    cedula: '0931823447',
    clave: '1234',
    telefono: '259956326',
    fechaNacimiento: `${faker.date.past()}`,
    perfilOcupacional: 'No hace nada',
    usuario: 'xidrovo',
    rol: 'empleado',
    creadaDump: true
  })
  const cantidadEmpresas = 5
  const cantidadEstablecimientosMaximo = 4
  const cantidadAreasMaximo = 6
  const cantidadPuestosMaximo = 4
  const cantidadEquiposMaximo = 5
  const cantidadCapacitacionesMaximo = 4
  const cantidadPersonasMaximo = 20
  const cantidadAccidentesMaximo = 5
  const cantidadInspeccionesMaximo = 2
  const cantidadNovedadesSinAtenderMaximo = 10
  const cantidadNovedadesAtendidasMaximo = 10
  const cantidadRiesgosMaximo = 6
  for (let i = 1; i <= cantidadEmpresas; i++) {
    console.log(`Creada empresa ${i}`)
    // empresa
    let empresasId = await crearEmpresas({ db })
    for (let i = 1; i <= ri(2, cantidadEstablecimientosMaximo); i++) {
      // establecimiento
      let establecimientosId = await crearEstablecimientos({ db, empresasId })
      for (let i = 1; i <= ri(1, cantidadAreasMaximo); i++) {
        // areas
        let areasId = await crearAreas({ db, establecimientosId })
        for (let i = 1; i <= ri(1, cantidadPuestosMaximo); i++) {
          // puestos
          let puestosId = await crearPuestos({ db, areasId })
          let cAP = crearAreasPuestos({ areasId, db, puestosId })
          promesas.push(cAP)
          // equipos equiposPuestos
          for (let i = 1; i <= ri(1, cantidadEquiposMaximo); i++) {
            let equiposId = await crearEquipos({ db })
            let cEP = crearEquiposPuestos({ db, puestosId, equiposId })
            promesas.push(cEP)
          }

          // capacitaciones
          for (let i = 1; i <= ri(1, cantidadCapacitacionesMaximo); i++) {
            let capacitacionesId = await crearCapacitaciones({ db, areasId })
            // personas
            for (let i = 1; i <= ri(1, cantidadPersonasMaximo); i++) {
              let personasId = await crearPersonas({ db })
              if (personasId) {
                // personasCapacitaciones
                if (ri(1, 2) === 1) {
                  await crearPersonasCapacitaciones({ db, personasId, capacitacionesId })
                }
                // personasPuestos
                await crearPersonasPuestos({ db, personasId, puestosId })
              }
            }
          }

          // accidentes
          for (let i = 1; i <= ri(1, cantidadAccidentesMaximo); i++) {
            let cA = crearAccidentes({ db, puestosId })
            promesas.push(cA)
          }

          for (let i = 1; i <= ri(1, cantidadInspeccionesMaximo); i++) {
            // inspecciones
            let inspeccionesId = await crearInspecciones({ db })
            //   novedades sin atender
            for (let i = 1; i <= ri(1, cantidadNovedadesSinAtenderMaximo); i++) {
              let cNSA = crearNovedadesSinAtender({ db, puestosId, inspeccionesId })
              promesas.push(cNSA)
            }
            //   novedades atendidas
            for (let i = 1; i <= ri(1, cantidadNovedadesAtendidasMaximo); i++) {
              let cNA = crearNovedadAtendida({ db, puestosId, inspeccionesId })
              promesas.push(cNA)
            }
          }
          // riesgos
          for (let i = 1; i <= ri(1, cantidadRiesgosMaximo); i++) {
            let cR = crearRiesgos({ db, puestosId })
            promesas.push(cR)
          }
        }
      }
    }
  }
  await crearPersonasPuestos({ db, personasId: jefe['id'], puestosId: 1 })
  Promise.all(promesas).then(resp => {
    conexion.Desconectar()
  })
}).catch((err) => {
  console.log(err)
})

/*
inspecciones
matriz
controles
*/
