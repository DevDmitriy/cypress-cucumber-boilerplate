Feature: Google Main Page

  I want to open a search engine
@focus 
  Scenario: Opening a search engine page
    Given a user visits cypress
    When they click the link labeled type
    And they type "fake@email.com" into the .action-email input
    Then the URL should include commands
    And the .action-email input has "fake@email.com" as its value