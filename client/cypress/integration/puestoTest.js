describe('Editar Puesto', function () {
  it('Desde login hasta editar un puesto', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.editarPuesto19').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.nombrePuesto19').find('input').type('{selectall}{del}Asistente de Gerencia')// el numero es el id del puesto
    cy.wait(600)
    cy.get('.descripcionPuesto19').find('textarea').type('{selectall}{del}Asiste al gerente general en decisiones administrativas.')// el numero es el id del puesto
    cy.wait(600)
    cy.get('.editPuesto19').click()// el numero es el id del puesto
    cy.wait(1500)
  })
})
