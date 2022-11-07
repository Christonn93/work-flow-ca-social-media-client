describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
});

// Login and create post testing with correct credentials
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

describe('Testing login with correct input values and creating new post', () => {
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
      .wait(2000)
      .then(() => expect(window.localStorage.getItem('token')).to.not.be.null)
      .then(() => expect(window.localStorage.getItem('profile')).to.not.be.null)
      .url()
      .should('include', 'profile');

    //Open new form to create post
    cy.get('footer')
      .wait(500)
      .find('a')
      .contains('New Post')
      .wait(200)
      .click()
      .then(() => expect(window.localStorage.getItem('token')).to.not.be.null)
      .then(() => expect(window.localStorage.getItem('profile')).to.not.be.null)
      .url()
      .should('include', 'post');

    // Adding content to post
    cy.get('#postTitle')
      .should('exist')
      .type('post create automatically by Cypress testing')
      .wait(200)
      .get('#postTags')
      .should('exist')
      .type('Testing cypress, Auto testing, End to end testing')
      .wait(200)
      .get('#postMedia')
      .should('exist')
      .type(
        'https://s24193.pcdn.co/wp-content/uploads/2017/09/funny-animal-memes-entity-3.png'
      )
      .wait(200)
      .get('#postBody')
      .should('exist')
      .type('This have been created with cypress testing');

    /**
     * Uncomment this section for the test.
     * Been commented out not to spam the API with new posts
     */

    // Posting the new post

    //.get('button[data-action="submit"]')
    //.click()
    //.wait(2000);
  });
});
