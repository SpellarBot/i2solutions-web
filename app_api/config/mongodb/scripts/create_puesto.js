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
  const collection = db.collection('puestos_detalle')
  collection.insertMany([
    {
      valoracion_puesto_trabajo: [{
        nombre_riesgo: 'Incendio',
        porcentaje: 2.0
      }, {
        nombre_riesgo: 'Químico',
        porcentaje: 6.0
      }],
      num_empleados: 4,
      num_novedades: 3,
      puesto_trabajo_id: 1
    },
    {
      valoracion_puesto_trabajo: [{
        nombre_riesgo: 'Caída de objeto',
        porcentaje: 50.0
      }, {nombre_riesgo: 'Químico',
        porcentaje: 10.0
      }],
      num_empleados: 10,
      num_novedades: 2,
      puesto_trabajo_id: 2
    },
    {
      valoracion_puesto_trabajo: [{
        nombre_riesgo: 'Corte',
        porcentaje: 3.0
      }, {nombre_riesgo: 'Caída de objeto',
        porcentaje: 4.0
      }],
      num_empleados: 2,
      num_novedades: 0,
      puesto_trabajo_id: 3
    }
  ], function (err, result) {
    console.log('Inserted 3 documents into the collection')
    if (err) {
      throw new Error(`Ha ocurrido un error ${err}`)
    }
    callback(result)
  })
}
