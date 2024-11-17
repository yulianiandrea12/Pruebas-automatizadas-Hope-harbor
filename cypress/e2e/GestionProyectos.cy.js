describe('Gestion proyecto', () => {
    it('Visitar', () => {
      cy.visit('http://127.0.0.1:8000/login/?next=/')
      cy.get('#id_username').type('1000136217');
      cy.get('#id_password').type('123456');
      cy.get('.btn').click();
      cy.get('.slider').click();

      Cypress.on('uncaught:exception', (err, runnable) => {
        cy.get(':nth-child(5) > a').click();
        return false
      })

      cy.get(':nth-child(1) > :nth-child(2) > .dropdown > .btn').click();
      cy.get('#bs-select-1-1').click();
      cy.get(':nth-child(2) > :nth-child(2) > .dropdown > .btn').click();
      cy.get('#bs-select-2-3').click();
      cy.get('#descripcion').type('Selección para realizar la búsqueda por medio de nuestra IA')
      cy.get('.card-footer > .btn').click();
    })
})