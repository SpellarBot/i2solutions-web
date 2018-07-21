describe('Editar Área', function () {
  it('Desde login hasta editar un área', function () {
    cy.visit('http://localhost:3002')
    cy.get('.user').find('input').type('admin')
    cy.get('.password').find('input').type('admin')
    cy.get('button').contains('Iniciar Sesión').click()
    cy.wait(1500)
    cy.get('.empresa2').click() // el numero es el id de la empresa
    cy.wait(1000)
    cy.get('.verAreas4').click() // el numero es el id del establecimiento
    cy.wait(1000)
    cy.get('.editarArea10').click() // el numero es el id del area
    cy.wait(1000)
    cy.get('.nombreArea10').find('input').type('{selectall}{del}Gerencia')// el numero es el id del area
    cy.wait(600)
    cy.get('.actividadArea10').find('input').type('{selectall}{del}Tareas gerenciales')// el numero es el id del area
    cy.wait(600)
    cy.get('.descripcionArea10').find('input').type('{selectall}{del}Área donde se realizan las actividades relacionadas a la gerencia.')// el numero es el id del area
    cy.wait(600)
    cy.get('.metrosCuadradosArea10').find('input').type('{selectall}{del}30x30')// el numero es el id del area
    cy.wait(600)
    cy.get('.editArea10').click()// el numero es el id del area
    cy.wait(1500)
  })
})
