Feature: Add employee
  As an admin
  I want to add an employee

  Scenario: Add employee
    Given I am logged in as an admin user
    When I Click on PIM item in Dashboard
    And I click on Add button
    And I enter First name with "Salinda"
    And I enter Middle name with "Yasas"
    And I enter Last name with "Meegoda"
    And I enter Employee ID
    And I add Image with file path "./cypress/e2e/tests/ui/addEmployee/profile.jpeg"
    And I click on Save button
    Then I see Toast massage with "Successfully Saved"