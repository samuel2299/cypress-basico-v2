Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Samuel')
    cy.get('#lastName').type('Alves')
    cy.get('#email').type('samuel@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})

