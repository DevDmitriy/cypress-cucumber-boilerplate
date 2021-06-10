@responsibleGaming
Feature: Sports responsible gaming page

  User must be able to open responsible gaming page from sports section

  Scenario: Opening sports details
    Given user logs in to pokerstars
    When clicks on sports page
    And clicks on responsible gaming
    Then responsible gaming page must be opened