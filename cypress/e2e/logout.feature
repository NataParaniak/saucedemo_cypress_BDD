Feature: Logout

  Scenario: Successful logout
    Given I am logged in as "standard_user"
    When I open the menu
    And I click the Logout button
    Then I should be redirected to the login page