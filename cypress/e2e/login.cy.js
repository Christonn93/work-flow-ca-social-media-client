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

describe('Testing login with correct input values', () => {
  const email = Cypress.env('API_EMAIL');
  const password = Cypress.env('API_PASSWORD');

  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Adding login credentials', () => {
    cy.get('#loginForm').wait(500);
    cy.get('#loginEmail')
      .wait(500)
      .type(`${email}`)
      .wait(500)
      .get('#loginPassword')
      .type(`${password}`)
      .wait(500)
      .get('.modal-footer')
      .find('button')
      .contains('Login')
      .click()
      .wait(2000);
  });
});

describe('Testing login with incorrect email', () => {
  const email = 'fakeemail@fakeEmail.com';
  const password = Cypress.env('API_PASSWORD');

  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Adding login credentials', () => {
    cy.get('#loginForm').wait(500);
    cy.get('#loginEmail')
      .clear()
      .wait(500)
      .type(`${email}`)
      .wait(500)
      .get('#loginPassword')
      .clear()
      .type(`${password}`)
      .wait(500)
      .get('.modal-footer')
      .find('button')
      .contains('Login')
      .click()
      .wait(2000);
  });
});

describe('Testing login with incorrect password and Email', () => {
  const email = 'fakeemail@fakeEmail.com';
  const password = 'pass';

  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Adding login credentials', () => {
    cy.get('#loginForm').wait(500);
    cy.get('#loginEmail')
      .clear()
      .wait(500)
      .type(`${email}`)
      .wait(500)
      .get('#loginPassword')
      .clear()
      .type(`${password}`)
      .wait(500)
      .get('.modal-footer')
      .find('button')
      .contains('Login')
      .click()
      .wait(2000);
  });
});
