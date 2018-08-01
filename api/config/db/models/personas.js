'use strict'
const { genHash } = require('../../../utils')
const { verificarClave } = require('../../../utils')
const co = require('co')

module.exports = (sequelize, DataTypes) => {
  let singular = 'personas'
  let plural = 'personas'
  let tableName = 'personas'
  let define = sequelize.define(singular, {
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    cedula: { type: DataTypes.STRING },
    clave: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.STRING },
    perfilOcupacional: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING, unique: true },
    rol: { type: DataTypes.ENUM('admin-i2solutions', 'inspector-seguridad', 'jefe-seguridad', 'admin-empresa', 'empleado') },
    claveCreada: { type: DataTypes.BOOLEAN, defaultValue: false },
    creadaDump: { type: DataTypes.BOOLEAN, defaultValue: false },
    resetClaveToken: { type: DataTypes.STRING },
    resetClaveExpires: { type: DataTypes.DATE }
  }, {
    name: {
      singular,
      plural
    },
    tableName,
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsToMany(models.puestos, { through: 'personasPuestos', foreignKey: 'personasId' })
    define.belongsToMany(models.establecimientos, { through: 'personasEstablecimientos', foreignKey: 'personasId' })
    define.belongsToMany(models.capacitaciones, { through: 'personasCapacitaciones', foreignKey: 'personasId' })
  }

  define.Crear = function (d) {
    let datos = arguments['0']
    let self = this
    return new Promise((resolve, reject) => {
      self.create(datos)
        .then((resp) => {
          if (resp && resp['clave']) {
            delete resp['clave']
          }
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.CrearConClave = function (d) {
    let datos = arguments['0']
    let self = this
    return new Promise((resolve, reject) => {
      genHash(datos['clave']).then(hash => {
        datos['clave'] = hash
        datos['creadaDump'] = true
        self.create(datos)
          .then((resp) => {
            return resolve(resp.get({ plain: true }))
          })
          .catch((err) => {
            return reject(err)
          })
      })
    })
  }

  define.Login = function ({ usuario, clave }) {
    return new Promise((resolve, reject) => {
      let self = this
      co(function * () {
        let resp = yield self.findOne({
          raw: true,
          where: {
            usuario
          },
          attributes: ['usuario', 'correo', 'nombres', 'apellidos', 'id', 'rol', 'clave', 'creadaDump', 'claveCreada']
        })
        let validaClave = false
        if (resp && resp['clave']) {
          validaClave = yield verificarClave(clave, resp['clave'])
        }
        if (!resp) {
          return resolve([true, 'el usuario no existe'])
        } else if (!resp['clave']) {
          return resolve([true, 'el usuario no ha creado su clave'])
        } else if (!validaClave) {
          return resolve([true, 'el usuario no ha creado su clavei'])
        } else {
          delete resp['clave']
          return resolve([false, resp])
        }
      })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerTodos = function () {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true
      })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { nombres, apellidos, correo, cedula, telefono, fechaNacimiento, perfilOcupacional, usuario, rol },
        { where: { id } })
        .then((resp) => {
          if (resp['clave']) {
            delete resp['clave']
          }
          return resolve(resp)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.CambiarClave = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { clave } = datos
    let { id } = datos
    let self = this
    return new Promise((resolve, reject) => {
      genHash(clave).then(hash => {
        self.update(
          { 'clave': hash, claveCreada: true, resetClaveToken: null },
          { where: { id } })
          .then((resp) => {
            if (resp[0].toString() === '1') {
              return resolve(true)
            } else {
              return resolve(false)
            }
          })
          .catch((err) => {
            return reject(err)
          })
      })
    })
  }

  define.Obtener = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findOne({ where: { id }, raw: true })
        .then((project) => {
          if (project && project['clave']) {
            delete project['clave']
          }
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerTodo = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findOne({ where: { id }, raw: true })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorToken = function ({ token }) {
    return new Promise((resolve, reject) => {
      this.findOne({ where: { resetClaveToken: token }, raw: true })
        .then((project) => {
          if (project && project['clave']) {
            delete project['clave']
          }
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Borrar = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.destroy({
        where: {
          id
        }})
        .then((rowDeleted) => {
          if (rowDeleted > 0) {
            resolve(true)
          } else {
            resolve(false)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerPorEstablecimientos = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findAll({
        include: [{
          model: sequelize.models['establecimientos'],
          where: {
            id
          }
        }],
        attributes: {
          exclude: ['establecimientos']
        }
      })
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerTodosPorEstablecimiento = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select pe.id as id, pe.nombres as nombres, pe.apellidos as apellidos, pe.correo as correo, pe.cedula as cedula, pe.telefono as telefono, pe.fechaNacimiento as fechaNacimiento, pe.perfilOcupacional as perfilOcupacional, pe.usuario as usuario, pe.rol as rol, (select nombre from puestos where id = pp.puestosId) as puestosNombre, (select id from puestos where id = pp.puestosId) as puestosId, a.id as areasId, a.actividad as areasActividad, a.nombre as areasNombre, a.descripcionLugar as areasDescripcionLugar from areas a inner join areasPuestos ap on ap.areasId = a.id inner join personasPuestos pp on ap.puestosId = pp.puestosId inner join personas pe on pe.id = pp.personasId where a.establecimientosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(puestos => {
          resolve(puestos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerTodosPorAreas = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select pe.id as id, pe.nombres as nombres, pe.apellidos as apellidos, pe.correo as correo, pe.cedula as cedula, pe.telefono as telefono, pe.fechaNacimiento as fechaNacimiento, pe.perfilOcupacional as perfilOcupacional, pe.usuario as usuario, pe.rol as rol, (select nombre from puestos where id = pp.puestosId) as puestosNombre, (select id from puestos where id = pp.puestosId) as puestosId, a.id as areasId, a.actividad as areasActividad, a.nombre as areasNombre, a.descripcionLugar as areasDescripcionLugar from areas a inner join areasPuestos ap on ap.areasId = a.id inner join personasPuestos pp on ap.puestosId = pp.puestosId inner join personas pe on pe.id = pp.personasId where a.id = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(puestos => {
          resolve(puestos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerTodosPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select pe.id as id, pe.nombres as nombres, pe.apellidos as apellidos, pe.correo as correo, pe.cedula as cedula, pe.telefono as telefono, pe.fechaNacimiento as fechaNacimiento, pe.perfilOcupacional as perfilOcupacional, (select nombre from puestos where id = ${id}) as puestosNombre, pe.usuario as usuario, pe.rol as rol from personas pe inner join personasPuestos pp on pp.personasId = pe.id where pp.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(puestos => {
          resolve(puestos)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerCantidadPorPuestos = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select count(*) from personas pe inner join personasPuestos pp on pp.personasId = pe.id where pp.puestosId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(puestos => {
          if (puestos.length)
            resolve(puestos[0]['count(*)'])
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.ObtenerEmpresa = function ({ id }) {
    return new Promise((resolve, reject) => {
      let query = `select pp.personasId as personasId, em.id as empresasId from personasPuestos pp inner join areasPuestos ap on ap.puestosId = pp.puestosId inner join areas a on a.id = ap.areasId inner join establecimientos es on es.id = a.establecimientosId inner join empresas em on em.id = es.empresasId where pp.personasId = ${id}`
      sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
        .then(persona => {
          if (persona && persona.length > 0) {
            resolve(persona[0]['empresasId'])
          } else {
            resolve(null)
          }
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  return define
}
