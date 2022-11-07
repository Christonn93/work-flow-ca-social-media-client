describe('Logging out', () => {
  it('successfully loads', () => {
    cy.visit('/').wait(500).get('button[data-auth="logout"]').click();
  });
});
