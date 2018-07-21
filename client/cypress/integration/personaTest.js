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
    cy.get('.editarPersona283').click() // el numero es el id de la persona
    cy.wait(1000)
    cy.get('.nombrePersona283').find('input').type('{selectall}{del}Alex Roberto') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.apellidoPersona283').find('input').type('{selectall}{del}Ferrín Alcívar') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.rolPersona283').click() // el numero es el id de la persona
    cy.wait(600)
    cy.get('.list__tile.list__tile--link').last().contains('Administrador de la empresa').click()
    cy.wait(600)
    cy.get('.correoPersona283').find('input').type('{selectall}{del}alex-710@hotmail.com') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.telefonoPersona283').find('input').type('{selectall}{del}0969004491') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.fechaPersona283').click() // el numero es el id d la persona
    cy.wait(600)
    cy.get('.picker__title__btn.date-picker-title__year').contains('2018').click()
    cy.wait(600)
    cy.get('li').contains('1995').click()
    cy.wait(600)
    cy.get('button').contains('Jun').click()
    cy.wait(600)
    cy.get('button').contains('16').click()
    cy.wait(600)
    cy.get('.perfilPersona283').find('input').type('{selectall}{del}Ingeniero en Computación') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.usuarioPersona283').find('input').type('{selectall}{del}aferrin') // el numero es el id de la persona
    cy.wait(600)
    cy.get('.editPersona283').click() // el numero es el id de la persona
    cy.wait(1500)
  })
})
