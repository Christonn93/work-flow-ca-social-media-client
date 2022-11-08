describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
});

// Closing register modal, don't know hwy this comes up when loading the page
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

// Logout testing
describe('Testing login with correct input values', () => {
  const email = Cypress.env('API_EMAIL');
  const password = Cypress.env('API_PASSWORD');

  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Adding login credentials', () => {
    cy.get('#loginForm')
      .wait(500)
      .get('#loginEmail')
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
      .wait(1000)
      .then(() => expect(window.localStorage.getItem('token')).to.not.be.null)
      .then(() => expect(window.localStorage.getItem('profile')).to.not.be.null)
      .url()
      .should('include', 'profile')
      .wait(1000);
  });

  it('successfully loads', () => {
    cy.get('button[data-auth="logout"]').wait(500).click();
  });

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
