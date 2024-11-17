describe('login', () => {
  it('Visitar', () => {
    cy.visit('http://127.0.0.1:8000/login/?next=/')
    cy.get('#id_username').type('1000136217');
    cy.get('#id_password').type('123456');
    cy.get('.btn').click();
    cy.get('.slider').click();
    //cy.get('.nav > :nth-child(2) > a').click();
  })
})