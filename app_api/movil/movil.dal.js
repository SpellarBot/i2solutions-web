module.exports = ({ database, puestoModel, puestoDetalleModel, novedadesModel }) => {
  const proto = {
 	ObtenerPuestoTrabajoPorAreaId({ area_id }) {
  	  return new Promise((resolve, reject) => {
  		puestoModel.ObtenerPuestoTrabajoPorAreaId(area_id).then((puestos) => {
  			resolve(puestos)
  		}).catch(err => {
  	  		throw new Error('Error en crear novedad DAL: ', err)
  	  		reject(err)
  	  	})
  	  })
  	},
  	ObtenerPuestoPorId({ puesto_trabajo_id }) {
	  return new Promise((resolve, reject) => {
  		puestoDetalleModel.ObtenerPuestoPorId(puesto_trabajo_id).then((puesto) => {
  			resolve(puesto)
  		}).catch(err => {
  	  		throw new Error('Error en crear novedad DAL: ', err)
  	  		reject(err)
  	  	})
  	  })
  	},
  	CrearNovedad({ puesto_trabajo_id, descripcion, prioridad, foto_url }) {
  	  var novedad = new novedadesModel ({
  	  	puesto_trabajo_id,
  	  	descripcion,
  	  	prioridad,
  	  	foto_url
  	  })
  	  return new Promise((resolve, reject) => {
  		novedad.CrearNovedad(novedad).then((estado) => {
  			resolve({})
  		}).catch(err => {
  	  		throw new Error('Error en crear novedad DAL: ', err)
  	  		reject(err)
  	  	})
  	  })
  	},
  	ObtenerTodasNovedades() {
  	  return new Promise((resolve, reject) => {
  		novedadesModel.ObtenerTodasNovedades().then((novedades) => {
  			resolve(novedades)
  		}).catch(err => {
  	  		throw new Error('Error en crear novedad DAL: ', err)
  	  		reject(err)
  	  	})
  	  })
  	}
  }
  return Object.assign(Object.create(proto), {})
}