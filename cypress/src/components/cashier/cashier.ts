import 'cypress-iframe';

const locators = {
  cashierIframe: {selector: 'iframe#cashierid'},
  depositBtn: { name: 'Deposit' },
  depositModal: {selector: '.deposit.cashier'},
};

export class Cashier {
  isOpened = () => {
    cy.get(locators.cashierIframe.selector).should('be.visible');
  };
  openDeposit = () => {
    cy.iframe(locators.cashierIframe.selector)
      .findByRole('button', {name: locators.depositBtn.name})
      .click();
  };
  isDepositOpened = () => {
    cy.iframe(locators.cashierIframe.selector)
      .find(locators.depositModal.selector)
      .should('be.visible');
  };
}
