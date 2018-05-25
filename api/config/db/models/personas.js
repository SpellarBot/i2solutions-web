'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'personas'
  let plural = 'personas'
  let tableName = 'personas'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    cedula: { type: DataTypes.STRING },
    clave: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.STRING },
    perfilOcupacional: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING },
    rol: { type: DataTypes.STRING }
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

  define.Crear = function ({
    nombres,
    apellidos,
    correo,
    cedula,
    clave,
    telefono,
    fechaNacimiento,
    perfilOcupacional,
    usuario,
    rol
  }) {
    let empleado = arguments['0']
    return new Promise((resolve, reject) => {
      return this.create(empleado)
        .then((resp) => {
          return resolve(resp.get({ plain: true }))
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
  return define
}
