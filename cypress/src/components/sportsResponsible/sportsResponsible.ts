export class SportsResponsible {
  isOpened = () => {
    cy.url().should('include', 'responsible-gaming')
    cy.findByText('Responsible Gaming', {selector: 'h1'}).should('have.text', 'Responsible Gaming')
  }
}