const locators = {
  balance: { selector: "div#accountBalance" },
  responsibleGaming: {
    text: "Responsible Gaming",
    selector: "#support-navigation > a:first-child",
  },
};

const sportsUrl = "pokerstarssports";

export class Sports {
  openBalance = () => {
    cy.wait(2000);
    cy.get(locators.balance.selector).click();
  };
  isOpened = () => {
    cy.url().should("include", sportsUrl);
  };
  openResponsibleGaming = () => {
    cy.findByText(locators.responsibleGaming.text, {
      selector: locators.responsibleGaming.selector,
    }).click();
  };
}
