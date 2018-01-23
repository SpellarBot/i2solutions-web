const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const PuestosSchema = mongoose.Schema({
  nombre: {
    type: String
  },
  id: {
    type: Number
  },
  area_id: {
    type: Number
  }
})

const PuestosDetalleSchema = mongoose.Schema({
  valoracion_puesto_trabajo: [
    {
      nombre_riesgo: {
        type: String
      },
      porcentaje: {
        type: Number
      }
    }
  ],
  num_empleados: {
    type: Number
  },
  num_novedades: {
    type: Number
  },
  puesto_trabajo_id: {
    type: Number
  }
}, {versionKey: false, timestamps: false, collection: 'puestos_detalle'})

var CounterSchema = mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
})
var counter = mongoose.model('counter', CounterSchema)

const NovedadesSchema = mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  puesto_trabajo_id: {
    type: Number
  },
  descripcion: {
    type: String
  },
  prioridad: {
    type: String
  },
  foto_url: {
    type: String
  },
  atendida: {
    type: Boolean
  },
  descripcionAtendida: {
    type: String
  }
}, {versionKey: false, timestamps: true, collection: 'novedades'})

NovedadesSchema.pre('save', function (next) {
  var doc = this
  counter
    .findByIdAndUpdate(
      {_id: 'entityId'},
      {$inc: {seq: 1}},
      {new: true, upsert: true},
      function (error, counter) {
        if (error) { return next(error) }
        doc.id = counter.seq
        next()
      })
})

NovedadesSchema.methods.CrearNovedad = function (novedad) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.save())
  })
}

NovedadesSchema.statics.ObtenerTodasNovedades = function () {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.find({}, { '_id': 0 }))
  })
}

NovedadesSchema.statics.ObtenerTodasNovedadesSinAtender = function (puestoTrabajoId, atendida) {
  const schema = this
  var findJson = { puesto_trabajo_id: puestoTrabajoId }
  if (atendida !== null) {
    findJson['atendida'] = atendida
  }
  return new Promise((resolve, reject) => {
    resolve(schema.find(findJson, { '_id': 0 }).sort({ atendida: 1 }).select('-updatedAt'))
  })
}

NovedadesSchema.statics.ActualizarEstadoNovedad = function (puestoTrabajoId, novedadId, atendida, descripcionAtendida) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.update({puesto_trabajo_id: puestoTrabajoId, id: novedadId}, {atendida: atendida, descripcionAtendida: descripcionAtendida}))
  })
}

PuestosSchema.statics.ObtenerPuestoTrabajoPorAreaId = function (areaId) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.find({area_id: areaId}, { '_id': 0 }).select('id nombre area_id'))
  })
}

PuestosDetalleSchema.statics.ObtenerPuestoPorId = function (puestoTrabajoId) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.findOne({puesto_trabajo_id: puestoTrabajoId}, { '_id': 0 }))
  })
}

PuestosDetalleSchema.statics.ActualizarCantidadPuestoDeTrabajo = function (puestoTrabajoId) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.update({puesto_trabajo_id: puestoTrabajoId}, {$inc: {num_novedades: 1}}))
  })
}

NovedadesSchema.statics.NovedadesNoAtendidasEnPuestoTrabajo = function (puestoTrabajoId) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.find({'puesto_trabajo_id': puestoTrabajoId, atendida: false}))
  })
}

PuestosDetalleSchema.statics.ActualizarCantidadPuestoDeTrabajoPorNumeroNovedades = function (puestoTrabajoId, numeroNovedades) {
  const schema = this
  return new Promise((resolve, reject) => {
    resolve(schema.update({puesto_trabajo_id: puestoTrabajoId}, {$set: {num_novedades: numeroNovedades}}))
  })
}

module.exports = {
  PuestoModel: mongoose.model('Puestos', PuestosSchema),
  PuestoDetalleModel: mongoose.model('PuestosDetalle', PuestosDetalleSchema),
  NovedadesModel: mongoose.model('Novedades', NovedadesSchema)
}
