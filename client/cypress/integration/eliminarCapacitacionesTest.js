describe('Eliminar Capacitación', function () {
  it('Desde login hasta eliminar una capacitacióncy mostrar la vista actuallizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa3').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verAreas7').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.capacitacionesArea16').click() // el numero es el id del area
    cy.wait(1000)
    cy.get('.eliminarCapacitacion76').click({force: true}) // el numero es el id de la capacitacion
    cy.wait(1000)
    cy.get('.boraarCapacitacion76').click()
    cy.wait(1500)
  })
})
