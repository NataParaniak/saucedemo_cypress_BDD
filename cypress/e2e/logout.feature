Feature: Logout

  Scenario: Successful logout
  Given I am on the SauceDemo login page
    When I login with valid credentials
    When I open the menu
    And I click the Logout button
    Then I should be redirected to the login page