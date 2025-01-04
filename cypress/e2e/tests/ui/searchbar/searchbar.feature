Feature: Check Search bar

  Background:
    Given I am logged in as a valid user

  Scenario: Correct element check
    When I navigate to the search bar
    And I enter correct element "Admin"
    Then I should see filtered element "Admin"

  Scenario: Incorrect element check
    When I navigate to the search bar
    And I enter correct element "bnbdnwbnbwn"
    Then I should not see filtered element "bnbdnwbnbwn"

  Scenario: Case Sensitivity Check
    When I navigate to the search bar
    And I enter correct element "daShboard"
    Then I should see filtered element "Dashboard"

