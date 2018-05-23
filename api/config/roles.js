// | proceso negocio | administrador I2solutions | inspector seguridad | jefe seguridad | empleado |
// | Generar matriz de riesgo | CRUD | / | / | / |
// | Manejo código QR | CRUD | R | R | R |
// | Consultar información de riesgo de un puesto de trabajo en un área específica| R | R | R | /
// Control de Novedades  CRUD  CR  RU  R
// Manejo de Empresas  CRUD  //  //  //
// Manejo de Usuarios  CRUD  //  //  //
// Manejo de Registro de Capacitaciones  R R R R
// Manejo de áreas de trabajo  CRUD  R R R

let roles = {
  manager: {
    can: ['read', 'write', 'publish']
  },
  writer: {
    can: ['read', 'write']
  },
  guest: {
    can: ['read']
  }
}

console.log(roles)

// function can(role, operation) {
//   return roles[role] && roles[role].can.indexOf(operation) !== -1;
// }
