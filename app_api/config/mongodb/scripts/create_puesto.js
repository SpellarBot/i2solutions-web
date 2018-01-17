const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_DB_URL;

// Database Name
const dbName = process.env.MONGO_DB_NAME;

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
        nombre_riesgo: 'Riesgo 11',
        porcentaje: 0.0
      }, {
        nombre_riesgo: 'Riesgo 12',
        porcentaje: 0.0
      }],
      num_empleados: 0,
      num_novedades: 0,
      puesto_trabajo_id: 1
    },
    {
      valoracion_puesto_trabajo: [{
        nombre_riesgo: 'Riesgo 21',
        porcentaje: 0.0
      }, {nombre_riesgo: 'Riesgo 22',
        porcentaje: 0.0
      }],
      num_empleados: 0,
      num_novedades: 0,
      puesto_trabajo_id: 2
    },
    {
      valoracion_puesto_trabajo: [{
        nombre_riesgo: 'Riesgo 31',
        porcentaje: 0.0
      }, {nombre_riesgo: 'Riesgo 32',
        porcentaje: 0.0
      }],
      num_empleados: 0,
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
