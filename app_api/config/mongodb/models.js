const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
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
},{versionKey: false, timestamps: false, collection: 'puestos_detalle'})

var CounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);

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

},{versionKey: false, timestamps: false, collection: 'novedades'})

NovedadesSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, {new: true, upsert: true}, function(error, counter)   {
        if(error)
            return next(error);
        doc.id = counter.seq;
        next();
    });
});

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


PuestosSchema.statics.ObtenerPuestoTrabajoPorAreaId = function (area_id) {
	const schema = this
	return new Promise((resolve, reject) => {
		resolve(schema.find({area_id: area_id}, { '_id': 0 }).select('id nombre area_id'))
	})
}

PuestosDetalleSchema.statics.ObtenerPuestoPorId = function (puesto_trabajo_id) {
	const schema = this
	return new Promise((resolve, reject) => {
		resolve(schema.findOne({puesto_trabajo_id: puesto_trabajo_id}, { '_id': 0 }))
	})
}

module.exports = {
	Puestos: mongoose.model('Puestos', PuestosSchema),
	PuestosDetalle: mongoose.model('PuestosDetalle', PuestosDetalleSchema),
	Novedades: mongoose.model('Novedades', NovedadesSchema),
}