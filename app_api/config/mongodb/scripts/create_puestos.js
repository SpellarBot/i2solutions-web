const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_DB_URL

// Database Name
const dbName = process.env.MONGO_DB_NAME

MongoClient.connect(url, function (err, client) {
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  insertDocuments(db, function () {
    client.close()
  })
  if (err) {
    throw new Error(`Ha ocurrido un error ${err}`)
  }
})

const insertDocuments = function (db, callback) {
  const collection = db.collection('puestos')
  var date = new Date()
  collection.insertMany([
    {
      _id: 1,
      id: 1,
      area_id: 1,
      nombre: 'Gerente',
      cantidadEmpleados: 1,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [1, 2],
      equiposProteccion: [1, 2],
      novedadesSinAtender: [1, 2, 3],
      novedadesAtendidas: []
    },
    {
      _id: 2,
      area_id: 1,
      nombre: 'Secretaria',
      id: 2,
      cantidadEmpleados: 0,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    },
    {
      _id: 3,
      area_id: 1,
      nombre: 'Contadora',
      id: 3,
      cantidadEmpleados: 0,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    },
    {
      _id: 4,
      area_id: 2,
      nombre: 'Jefe de Matricería',
      id: 4,
      cantidadEmpleados: 5,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    },
    {
      _id: 5,
      area_id: 2,
      nombre: 'Maticero',
      id: 5,
      cantidadEmpleados: 3,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    },
    {
      _id: 6,
      area_id: 3,
      nombre: 'Jefe de Inyección',
      id: 6,
      cantidadEmpleados: 4,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    },
    {
      _id: 7,
      area_id: 3,
      nombre: 'Operador de máquina de inyección',
      id: 7,
      cantidadEmpleados: 1,
      fechaUltimaCapacitacion: date.toISOString(),
      fechaUltimoAccidente: date.toISOString(),
      riesgos: [],
      equiposProteccion: [],
      novedadesSinAtender: [],
      novedadesAtendidas: []
    }
  ], function (err, result) {
    console.log('Insertado puestos')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
