describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
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
    const email = 'ChrTon31899@stud.noroff.no';
    const password = 'VolvoXc70!';

    cy.get('#loginForm')
      .find('#loginEmail')
      .type(email)
      .find('#loginPassword')
      .type(`${password}{enter}`)
      .get('.modal-footer')
      .find('button[data-bs-dismiss="modal"]')
      .click();
  });
});
