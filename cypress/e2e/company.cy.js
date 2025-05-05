
describe('Capture Company Contact Details with Logos', () => {
  it('Performs login, scrapes data, and logs out', () => {
    cy.loginToPortal(Cypress.env('username'), Cypress.env('password'));
    cy.goToCompanyDirectory();
    cy.scrapeCompanyDetailsAZ();
    cy.logoutFromPortal();
  });
});
