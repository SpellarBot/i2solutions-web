'use strict'
module.exports = (sequelize, DataTypes) => {
  let singular = 'Persona'
  let plural = 'Personas'
  let tableName = 'personas'
  let define = sequelize.define(singular, {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true, allowNull: false },
    nombres: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    cedula: { type: DataTypes.STRING },
    clave: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.STRING },
    perfil_ocupacional: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING },
    rol: { type: DataTypes.STRING } // inspector, jefe, empleado
  },{
  name :{
    singular,
    plural,
    tableName
  },
    timestamps: true,
    updatedAt: 'fechaActualizacion',
    createdAt: 'fechaCreacion',
    freezeTableName: true
  })

  define.associate = function (models) {
    define.belongsToMany(models.PuestosTrabajo , { through: 'Personas_PuestosTrabajo', foreignKey: `personas_id` })
    define.belongsToMany(models.Establecimiento , { through: 'Personas_Establecimiento', foreignKey: `personas_id` })
    define.belongsToMany(models.Capacitacion , { through: 'Personas_Capacitacion', foreignKey: `personas_id` })
  }

  define.Crear = function ({
    nombres,
    apellidos,
    correo,
    cedula,
    clave,
    telefono,
    fecha_nacimiento,
    perfil_ocupacional,
    usuario,
    rol,
  }) {
    let empleado = arguments['0']
    return new Promise( (resolve, reject) => {
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
