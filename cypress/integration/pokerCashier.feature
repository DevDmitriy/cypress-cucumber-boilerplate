@cashier @smoke
Feature: PokerCashier

  User must be able to make deposit on poker cashier

  Scenario: Opening poker cashier
    Given user logs in to pokerstars
    When opens cashier balance
    And clicks on deposit
    Then deposit window must be opened