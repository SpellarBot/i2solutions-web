describe('Eliminar Persona', function () {
  it('Desde login hasta eliminar una persona y mostrar la vista actalizada', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa1').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.personasEstablecimiento1').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.eliminarPersona4').click({force: true}) // el numero es el id de la persona
    cy.wait(1000)
    cy.get('.borrarPersona4').click() // el numero es el id de la persona
    cy.wait(1500)
  })
})
