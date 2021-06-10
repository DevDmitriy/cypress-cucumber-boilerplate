import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import { Login } from "../../src/components/login/login";

const login = new Login

Given('a user visits pokerstars', () => {
  login.open()
})

When('user types login and password and logins', () => {
  login.enterCredentials()
})

Then('user should be logged in', () => {
  login.checkIfLoggedId()
})