import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { Cashier } from '../../src/components/cashier/cashier'
import { Login } from '../../src/components/login/login'
import { NewsModal } from '../../src/components/newsModal/newsModal'
import { Poker } from '../../src/components/poker/poker'
import { loginStep } from '../../src/steps/loginStep'

const login = new Login()
const poker = new Poker()
const cashier = new Cashier()
const newsModal = new NewsModal()

Given('user logs in to pokerstars', () => {
  loginStep()
})

When('opens cashier balance', () => {
  poker.openBalance()
})

When('clicks on deposit', () => {
  cashier.openDeposit()
})

Then('deposit window must be opened', () => {
  cashier.isDepositOpened()
})