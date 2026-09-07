Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the SauceDemo login page
    When I enter "standard_user" as username
    And I enter "secret_sauce" as password
    And I click the Login button
    Then I should be redirected to the inventory page
    And the inventory page should be displayed

  Scenario: Login with locked out user
    Given I am on the SauceDemo login page
    When I enter "locked_out_user" as username
    And I enter "secret_sauce" as password
    And I click the Login button
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Login with empty username and password
    Given I am on the SauceDemo login page
    When I click the Login button
    Then I should see the error message "Epic sadface: Username is required"