Feature: Deleting a row based on the username

  Scenario: Delete a row with a specific username
    Given I am logged in as an admin user
    When I Click on Admin item in Dashboard
    And I search for the row with username "TestUserName"
    And I Click on Delete button of corresponding row
    And I click on Confirmation button
    Then I should be able to see toast with "Successfully Delete"
