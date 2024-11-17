describe('datosusuarios', () => {
    it('Visitar', () => {
      cy.visit('http://127.0.0.1:8000/login/?next=/')
      cy.get('#id_username').type('1000136217');
      cy.get('#id_password').type('123456');
      cy.get('.btn').click();
      cy.get('.slider').click();

      Cypress.on('uncaught:exception', (err, runnable) => {
        cy.get(':nth-child(4) > a').click();
        return false
      })

      cy.get('#Correoportafolio').type('Cypress@gmail.com')
      cy.get('#nombreusuario').type('{selectall}{backspace} Prueba')
      cy.get('#apellidosusuario').type('{selectall}{backspace} Cypress')
      cy.get(':nth-child(2) > .form-group > .dropdown > .btn').click();
      cy.get('#bs-select-2-1').click();
      cy.get('#descripcionportafolio').type('{selectall}{backspace} Esta es una prueba realizada por cypress en la cual se probaran todas las funcionalidades actuales del modulo')

      cy.get(':nth-child(6) > .container > :nth-child(2) > .dropdown > .btn').click();
      cy.get('#bs-select-3-3').click();
      cy.get(':nth-child(1) > .remove-tag').click();
      cy.get(':nth-child(6) > .container > :nth-child(2) > .dropdown > .btn').click();
      cy.get('#bs-select-3-1').click();
      //cy.get('.card-footer > .btn').click();

      cy.get('p > .btn').click();
      cy.get('#proyectoModal').scrollTo('bottom');
      cy.get(':nth-child(1) > .pr-md-1 > .form-group > .form-control').type('Cypress S.A.S')
      cy.get('.col-md-5.pl-md-1 > .form-group > .form-control').type('Prueba de cypress')
      cy.get('.col-md-2 > .form-group > .form-control').type('200')
      cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').type('Esta es una prueba realizada por cypress, donde se busca probar todas las funcionalidades encontradas en el modulo actual')
      cy.get(':nth-child(3) > .container > :nth-child(2) > .dropdown > .btn').click();
      cy.get('#bs-select-4-2').click();
      //cy.get('#frmProyecto > .modal-footer > .btn-success').click();
      cy.get('.btn-danger').click();

      cy.get('#proyectosTable_filter > label > input').type('Texto sin registros {selectall}{backspace}');
      cy.get('#proyectosTable_filter > label > input').type('Tester');
    })
})