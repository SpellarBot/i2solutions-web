'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Persona', [{
        nombres: 'Joel Eduardo',
        apellidos: 'Rodriguez Llamuca',
        correo: 'joelerll@gmail.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};
