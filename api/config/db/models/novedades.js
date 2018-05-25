'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'novedades'
  let plural = 'novedades'
  let tableName = 'novedades'
  let define = sequelize.define(singular, {
    // PK
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },

    // PROPERTIES
    descripcion: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    prioridad: { type: DataTypes.ENUM('alta', 'media', 'baja') },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    foto_url: { type: DataTypes.STRING },
    fue_atendida: { type: DataTypes.STRING, defaultValue: false },

    // FK
    puestos_id: { type: DataTypes.INTEGER.UNSIGNED }
  },{
  name :{
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
    define.belongsTo(models.puestos, { foreignKey: 'puestos_id', targetKey: 'id' })
  }

  define.Crear = function ({ nombre, descripcion, prioridad, foto_url, puestos_id }) {
    return new Promise( (resolve, reject) => {
      return this.create({
        nombre,
        descripcion,
        prioridad,
        foto_url,
        puestos_id
      })
      .then((resp) => {
        return resolve(resp.get({ plain: true }))
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.ObtenerPorPuesto = function ({ id }) {
    return new Promise((resolve, reject) => {
      return this.findAll({
        raw: true,
        where: {
          puestos_id: id
        }
      })
      .then((novedades) => {
        return resolve(novedades)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }

  define.Atender = function ({ id, atendida, descripcionAtendida, nombre }) {
    return new Promise((resolve, reject) => {
      return this.update(
        { fue_atendida: atendida, descripcion: descripcionAtendida, nombre },
        {where: { id: id } })
      .then((resp) => {
        return resolve(resp)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
  return define
}
