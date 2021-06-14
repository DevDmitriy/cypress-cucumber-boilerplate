const locators = {
  sportsTab: {
    text: 'SPORTS',
    selector: '.desktopVerticals .sports-vertical a',
  },
  casinoTab: {
    text: 'Casino',
    selector: '.desktopVerticals .casino-vertical a',
  },
  balance: { selector: 'div#accountBalance' },
};

export class Poker {
  openBalance = () => {
    cy.get(locators.balance.selector).click();
  };
  openSports = () => {
    cy.findByText(locators.sportsTab.text, {
      selector: locators.sportsTab.selector,
    }).click();
  };
  openCasino = () => {
    cy.findByText(locators.casinoTab.text, {
      selector: locators.casinoTab.selector,
    }).click();
  };
}
