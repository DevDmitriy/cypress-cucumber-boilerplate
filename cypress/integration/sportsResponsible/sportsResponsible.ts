import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { Poker } from '../../src/components/poker/poker';
import { Sports } from '../../src/components/sports/sports';
import { SportsResponsible } from '../../src/components/sportsResponsible/sportsResponsible';
import { loginStep } from '../../src/steps/loginStep';

const poker = new Poker()
const sports = new Sports()
const sportsResponsible = new SportsResponsible()

Given('user logs in to pokerstars', () => {
  loginStep()
})

When('clicks on sports page', () => {
  poker.openSports()
  sports.isOpened()
})

And('clicks on responsible gaming', () => {
  sports.openResponsibleGaming()
})

Then('responsible gaming page must be opened', () => {
  sportsResponsible.isOpened()
})