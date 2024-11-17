describe('registrarse', () => {
    it('Visitar', () => {
      cy.visit('http://127.0.0.1:8000/login/?next=/')
      cy.get('#id_username').type('1000136217');
      cy.get('#id_password').type('123456');
      cy.get('.text-primary').click();
      cy.get('.slider').click();
      cy.get('.sliderr').click();

      //Diligenciar Inversionista:

      cy.get('#frmRegisterInversionista > .card-body > :nth-child(1) > .form-group > .form-control').type('Yuliani');
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(2) > .form-group > .form-control').type('Yuliani Andrea');
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(3) > .form-group > .form-control').type('Espitia Salamanca');
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(4) > .form-group > .form-control').type('yuliani@gmail.com');
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(5) > .form-group > .form-control').type('313333333333');
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(6) > .form-group > .dropdown > .btn').click();
      cy.get('#bs-select-3-1').click();
      cy.get('#frmRegisterInversionista > .card-body > :nth-child(7) > .form-group > .form-control').type('123456');
      //cy.get('#frmRegister > .card-footer > .btn');
      cy.get('.sliderr').click();
    })
})    