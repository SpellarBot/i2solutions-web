describe('Editar Persona', function () {
  it('Desde login hasta editar una persona', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.personasEstablecimiento4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.editarPersona223').click() // el numero es el id de la persona
    cy.wait(1000)
    cy.get('.nombrePersona223').find('input').type('{selectall}{del}Alex Roberto') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.apellidoPersona223').find('input').type('{selectall}{del}Ferrín Alcívar') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.rolPersona223').click() // el numero es el id de la persona
    cy.wait(600)
    cy.get('.list__tile.list__tile--link').last().contains('Administrador de la empresa').click()
    cy.wait(600)
    cy.get('.correoPersona223').find('input').type('{selectall}{del}alex-710@hotmail.com') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.telefonoPersona223').find('input').type('{selectall}{del}0969004491') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.perfilPersona223').find('input').type('{selectall}{del}Ingeniero en Computación') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.editPersona223').click() // el numero es el id de la persona
    cy.wait(1500)
  })
})
