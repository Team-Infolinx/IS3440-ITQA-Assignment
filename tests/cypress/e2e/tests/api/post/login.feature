Feature: API Testing for Login

  Scenario: Login with user credentials
    Given I send a POST request to login with username "user" and password "password"
    Then the response status should be 200

  Scenario: Login with admin credentials
    Given I send a POST request to login with username "admin" and password "password"
    Then the response status should be 200
