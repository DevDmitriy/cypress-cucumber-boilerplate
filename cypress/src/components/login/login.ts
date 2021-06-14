const locators = {
  loginBtn: { name: 'Login' },
  usernameInput: { selector: '#psramloginformpopup input[name="username"]' },
  passwordInput: { selector: '#psramloginformpopup input[name="password"]' },
  userName: { selector: '.username' },
};

export class Login {
  open = () => {
    cy.visit(Cypress.env('host'));
  };
  enterCredentials = () => {
    cy.findByRole('button', { name: locators.loginBtn.name }).click();
    cy.get(locators.passwordInput.selector).type(Cypress.env('password'));
    cy.get(locators.usernameInput.selector).type(Cypress.env('user'));
    cy.findByRole('dialog')
      .findByRole('button', { name: locators.loginBtn.name })
      .click();
  };
  checkIfLoggedId = () => {
    cy.get(locators.userName.selector).should('be.visible');
  };
}
