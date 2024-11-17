describe('perfil', () => {
    it('Visitar', () => {
      cy.visit('http://127.0.0.1:8000/login/?next=/')
      cy.get('#id_username').type('1000136217');
      cy.get('#id_password').type('123456');
      cy.get('.btn').click();
      cy.get('.slider').click();
      
//Seleccion de menu lateral.
      Cypress.on('uncaught:exception', (err, runnable) => {
        cy.get('.nav > :nth-child(2) > a').click();
        return false
      })

      //cy.get('.buttons-copy').click();
      cy.get('.buttons-excel').click();
      cy.get('.buttons-pdf').click();
      cy.get(':nth-child(1) > :nth-child(2) > .btn').click();
      cy.get('#permisoModal').scrollTo('bottom');
      cy.get(':nth-child(4) > :nth-child(3) > .form-check').click();
      cy.get('#permisoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
      cy.get('#perfilTable_filter > label > input').type('sin resultados {selectall}{backspace}', { timeout: 5000});
      cy.get('#perfilTable_filter > label > input').type('Desarrollador');

      cy.get('p > .btn').click();
      cy.get('.bootbox-input').type('Prueba de perfil');
      //cy.get('.btn-primary').click();
    })
  })