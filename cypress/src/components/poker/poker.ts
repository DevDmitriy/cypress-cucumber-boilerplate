
const locators = {
  sportsButton: {
    text: 'SPORTS',
    locator: {selector: '.desktopVerticals .sports-vertical a'}
  }
}

export class Poker {
  openBalance = () => {
    cy.get('div#accountBalance').click()
  }
  openSports = () => {
    cy.findByText('SPORTS', {selector: '.desktopVerticals .sports-vertical a'}).click()
  }
  openCasino = () => {
    cy.findByText('Casino', {selector: '.desktopVerticals .casino-vertical a'}).click()
  }
}