export class NewsModal {
  close = () => {
    cy.get('.ram-scrm .title').contains('My News')
    cy.get('.ram-scrm .header button').click()
  }
}