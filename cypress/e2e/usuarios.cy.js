describe('usuarios', () => {
    it('Visitar', () => {
      cy.visit('http://127.0.0.1:8000/login/?next=/')
      cy.get('#id_username').type('1000136217');
      cy.get('#id_password').type('123456');
      cy.get('.btn').click();
      cy.get('.slider').click();

      Cypress.on('uncaught:exception', (err, runnable) => {
        cy.get(':nth-child(3) > a > p').click();
        return false
      })

      cy.get(':nth-child(3) > :nth-child(3) > .btn').click();
      cy.get('.bootbox-form').click();
      cy.get('.btn-secondary').click();
      cy.get('#usuarioTable_filter > label > input').type('Texto no existente {selectall}{backspace}', { timeout: 90000})
      cy.get('#usuarioTable_filter > label > input').type('Desarrollador')
      //cy.get('.buttons-copy').click();
      cy.get('.buttons-excel').click();
      cy.get('.buttons-pdf').click();
      cy.get('p > .btn').click();

      cy.get(':nth-child(1) > .mb-4 > .form-group > #placaActivo').type('123456789')
      cy.get(':nth-child(2) > .mb-4 > .form-group > #placaActivo').type('Prueba Actual')
      cy.get('#ubicacion').type('carrera 14 # 4')
      cy.get('.btn-danger').click();
      //cy.get('#btnCrear').click();
    })
})