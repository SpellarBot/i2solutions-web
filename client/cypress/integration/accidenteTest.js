describe('Editar Accidente', function () {
  it('Desde login hasta editar un accidente', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verPuestos4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.accidentesPuesto19').click() // el numero es el id del puesto
    cy.wait(1000)
    cy.get('.editarAccidentes39').eq(1).click()// el numero es el id del accidente
    cy.wait(600)
    cy.get('.nombreAccidente39').find('input').type('{selectall}{del}Inciendio.')// el numero es el id del accidente
    cy.wait(600)
    cy.get('.descripcionAccidente39').find('input').type('{selectall}{del}Fuego causado por falla en el uso de una líquido inflamable.')// el numero es el id del accidente
    cy.wait(600)
    cy.get('.fechaAccidente39').click() // el numero es el id del accidente
    cy.wait(600)
    cy.get('button').contains('Jan').click()
    cy.wait(600)
    cy.get('button').contains('9').click()
    cy.wait(600)
    cy.get('.heridosAccidente39').find('input').type('{selectall}{del}10')// el numero es el id del accidente
    cy.wait(600)
    cy.get('.muertosAccidente39').find('input').type('{selectall}{del}2')// el numero es el id del accidente
    cy.wait(600)
    cy.get('.atencionAccidente39').click()// el numero es el id del accidente
    cy.wait(300)
    cy.get('.editAccidente39').click()
    cy.wait(1500)
  })
})
