export class Sports {
  openBalance = () => {
    cy.wait(2000)
    cy.get('div#accountBalance').click()
  }
  isOpened = () => {
    cy.url().should('include', 'pokerstarssports')
  }
  openResponsibleGaming = () => {
    cy.findByText('Responsible Gaming', {selector: '#support-navigation > a:first-child'}).click()
  }
}