Feature: Book Update API

  As an authenticated user
  I want to update a book's details
  So that I can modify existing book information in the system

  Background:
    Given the user is authenticated as "admin" and password "password"

  Scenario: Successfully updating a book
    Given a book is created for update
    And the user provides updated book data
    When the user attempts to update the book with valid data
    Then the API should return 200 status code
    And the response should contain the updated book details
    And the book data should be updated in the system

  Scenario: Attempting to update a book with a non-existent book ID
    Given a not-existent book ID is provided
    And the user provides updated book data
    When the user attempts to update the book with valid data
    Then the API should return 404 status code
    And the response should indicate that the book id is not matched

  Scenario: Attempting to update a book with invalid data
    Given a book is created for update
    And the user provides invalid updated book data
    When the user attempts to update the book with invalid data
    Then the API should return 400 status code
    And the response should contain an error message for invalid data

  Scenario: Attempting to update a book without providing a book ID
    Given book ID is not provided
    And the user provides updated book data
    When the user attempts to update the book with valid data
    Then the API should return 400 status code
    And the response should contain an error message for missing book ID

  Scenario: Attempting to update a book with an invalid book ID format
    Given invalid book ID is provided
    And the user provides updated book data
    When the user attempts to update the book with valid data
    Then the API should return 400 status code
    And the response should contain an error message for invalid book ID

  Scenario: Attempting to update a book with an already existing title
    Given a book is created for update
    And another book with the same title exists
    When the user attempts to update the book with the existing title
    Then the API should return 409 status code
    And the response should contain an error message indicating the title is already taken

  Scenario: Attempting to update a book with an empty title
    Given a book is created for update
    When the user attempts to update the book with an empty title
    Then the API should return 400 status code
    And the response should contain an error message indicating that the title is required
