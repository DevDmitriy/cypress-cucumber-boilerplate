export class Login {
  open = () => {
    cy.visit(Cypress.env('host'));
  }
  enterCredentials = () => {
    cy.findByRole('button', { name: /Login/i }).click()
    cy.get('#psramloginformpopup input[name="username"]').type(Cypress.env('user'))
    cy.get('#psramloginformpopup input[name="password"]').type(Cypress.env('password'))
    cy.get('#psramloginformpopup button[type="submit"]').click()
  }
  checkIfLoggedId = () => {
    cy.get('.username').should('be.visible')
  }
}