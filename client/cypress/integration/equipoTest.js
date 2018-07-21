describe('Editar Equipo', function () {
  it('Desde login hasta editar un equipo', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.equiposPuesto21').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.editarEquipo43').last().click() // el numero es el id del equipo
    cy.wait(1000)
    cy.get('.descripcionEquipo43').find('input').type('{selectall}{del}Equipo usado para apagar el fuego.')// el numero es el id del equipo
    cy.wait(600)
    cy.get('.cantidadEquipo43').find('input').type('{selectall}{del}7')// el numero es el id del puesto
    cy.wait(600)
    cy.get('.editEquipo43').click()// el numero es el id del puesto
    cy.wait(1500)
  })
})
