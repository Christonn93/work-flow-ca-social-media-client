describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
});

describe('Closing modal', () => {
  it('Closing modal', () => {
    cy.get('#registerModal')
      .should('be.visible')
      .find('.modal-footer')
      .find('button[type="reset"]')
      .should('contain', 'Close')
      .click();
  });
});

describe('Logging user in', () => {
  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Logging in user', () => {
    cy.get('#loginForm')
      .find('#loginEmail')
      .type(Cypress.env('API_EMAIL'))
      .find('#loginPassword')
      .type(Cypress.env('API_PASSWORD'))
      .get('.modal-footer')
      .find('button[data-bs-dismiss="modal"]')
      .click();
  });
});
