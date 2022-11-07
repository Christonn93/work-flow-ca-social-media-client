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
      .click();
  });
});

describe('Logging user in', () => {
  it('Open login modal', () => {
    cy.get('header').find('button[data-auth="login"]').click();
  });

  it('Logging in user', () => {
    cy.find('#loginForm')
      .find('#loginEmail')
      .type('ChrTon31899@stud.noroff.no')
      .find('#loginPassword')
      .type('VolvoXc70!')
      .get('.modal-footer')
      .find('button[data-bs-dismiss="modal"]')
      .click();
  });
});
