describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
});

describe('Closing register modal', () => {
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

describe('Opening login modal', () => {
  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Adding login credentials', () => {
    cy.get('#loginForm').wait(500);
    cy.get('#loginEmail')
      .wait(500)
      .type(Cypress.env('API_EMAIL'))
      .wait(500)
      .get('#loginPassword')
      .type(Cypress.env('API_PASSWORD'))
      .wait(500)
      .get('.modal-footer')
      .find('button')
      .contains('Login')
      .click()
      .wait(2000);
  });

  it('Validate user Email', () => {
    cy.visit('/').wait(500);
  });

  it('Validate user Password', () => {
    cy.visit('/').wait(500);
  });

  it('Returns if input is invalid', () => {
    cy.visit('/').wait(500);
  });
});
