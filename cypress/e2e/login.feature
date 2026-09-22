Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I login with valid credentials
    Then I should be redirected to the inventory page
    And the inventory page should be displayed

  Scenario: Login with locked out user
    Given I am on the SauceDemo login page
    When I login with locked credentials
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Login with empty username and password
    Given I am on the SauceDemo login page
    When I click the Login button
    Then I should see the error message "Epic sadface: Username is required"