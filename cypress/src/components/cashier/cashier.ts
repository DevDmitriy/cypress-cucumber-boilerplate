import "cypress-iframe";

const locators = {
  cashierIframe: "iframe#cashierid",
  depositBtn: { text: "Deposit", selector: {selector: '.cashier button[type="submit"]'} },
  depositModal: ".deposit.cashier",
};

export class Cashier {
  isOpened = () => {
    cy.get(locators.cashierIframe).should("be.visible");
  };
  openDeposit = () => {
    cy.iframe(locators.cashierIframe)
      .findByText(locators.depositBtn.text, locators.depositBtn.selector)
      .click();
  };
  isDepositOpened = () => {
    cy.iframe(locators.cashierIframe)
      .find(locators.depositModal)
      .should("be.visible");
  };
}
