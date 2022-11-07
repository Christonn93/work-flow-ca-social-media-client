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
      .wait(500)
      .should('contain', 'Close')
      .click()
      .wait(500);
  });
});

describe('Logging user in', () => {
  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Logging in user', () => {
    cy.get('#loginForm');
  });

  it('adding login details', () => {
    cy.get('#loginEmail')
      .type(Cypress.env('API_EMAIL'))
      .wait(500)
      .get('#loginPassword')
      .type(Cypress.env('API_PASSWORD'))
      .wait(500)
      .get('.modal-footer')
      .find('button[data-bs-dismiss="modal"]')
      .click()
      .wait(500);
  });
});
