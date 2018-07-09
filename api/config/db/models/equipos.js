'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'equipos'
  let plural = 'equipos'
  let tableName = 'equipos'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    fotoUrl: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.INTEGER }
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
    define.belongsToMany(models.areas, { through: 'equiposAreas', foreignKey: 'equiposId' }, {onDelete: 'CASCADE'})
    define.belongsToMany(models.puestos, { through: 'equiposPuestos', foreignKey: 'equiposId' }, {onDelete: 'CASCADE'})
  }

  define.Crear = function ({ descripcion, nombre, fotoUrl, cantidad }) {
    let datos = arguments['0']
    return new Promise((resolve, reject) => {
      return this.create(datos)
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  define.Obtener = function ({ id }) {
    return new Promise((resolve, reject) => {
      this.findById(id)
        .then((project) => {
          resolve(project)
        }).catch((err) => {
          return reject(err)
        })
    })
  }

  define.Actualizar = function () {
    let datos = JSON.parse(JSON.stringify(arguments['0']))
    let { descripcion, nombre, fotoUrl, cantidad } = datos
    let id = datos['id']
    delete datos['id']
    return new Promise((resolve, reject) => {
      return this.update(
        { descripcion, nombre, fotoUrl, cantidad },
        { where: { id } })
        .then((resp) => {
          return resolve(resp)
        })
        .catch((err) => {
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

  return define
}
