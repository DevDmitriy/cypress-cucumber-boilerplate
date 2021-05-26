import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('a user visits cypress', () => {
  cy.visit('https://example.cypress.io')
})

When('they click the link labeled type', () => {
  cy.contains('type').click()
})

When('they type "fake@email.com" into the .action-email input', () => {
  cy.get('.action-email')
  .type('fake@email.com')
})

Then('the URL should include commands', () => {
  cy.url().should('include', '/commands/actions')
})

Then('the .action-email input has "fake@email.com" as its value', () => {
  cy.get('.action-email').should('have.value', 'fake@email.com')
})