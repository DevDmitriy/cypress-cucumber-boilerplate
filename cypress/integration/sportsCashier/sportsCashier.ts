import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { Cashier } from "../../src/components/cashier/cashier"
import { Poker } from "../../src/components/poker/poker"
import { Sports } from "../../src/components/sports/sports"
import { loginStep } from "../../src/steps/loginStep"

const poker = new Poker()
const sports = new Sports()
const cashier = new Cashier()

Given('user logs in to pokerstars', () => {
  loginStep()
})

When('clicks on sports page', () => {
  // cy.intercept('https://sports.pokerstarssports.com/sportsbook*', {fixture: 'sports.json'})
  // cy.visit(Cypress.env('host'))
  poker.openSports()
})

When('opens cashier balance', () => {
  sports.openBalance()
})

When('clicks on deposit', () => {
  cashier.openDeposit()
})

Then('deposit window must be opened', () => {
  cashier.isDepositOpened()
  cy.screenshot()
})