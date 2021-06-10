@login
Feature: Login

  User must be able to login to site

  Scenario: Logging in
    Given a user visits pokerstars
    When user types login and password and logins
    Then user should be logged in