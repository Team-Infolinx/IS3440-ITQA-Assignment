Feature: Logout functionality

  As a logged-in user
  I want to log out of the application
  So that I can end my session securely

  Scenario: Successful logout
    Given I am logged in as a valid user
    When I click on the logout button
    Then I should see the login page
