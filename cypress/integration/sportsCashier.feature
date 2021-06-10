@sports @smoke
Feature: Poker Sports page

  User must be able to open sports page with mocked data

  @mock
  Scenario: Opening poker cashier
    Given user logs in to pokerstars
    When clicks on sports page
    And opens cashier balance
    And clicks on deposit
    Then deposit window must be opened