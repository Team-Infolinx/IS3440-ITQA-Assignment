import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Books from "../../../services/books.cy";
import Login from "../../../services/login.cy";

let bookId;
let response;
let updatedBookData;
let authToken;

Given(
  "the user is authenticated as {string} and password {string}",
  (userRole, password) => {
    cy.log(`Authenticating as ${userRole}...`);
    Login.loginUser(userRole, password).then((res) => {
      response = res;
    });
  }
);

Given("a book is created for update", () => {
  const titleNumber = Math.floor(Math.random() * 1000);
  const bookData = {
    title: `Automated Testing Book ${titleNumber}`,
    author: "Test Author",
  };

  Books.addOneBook(bookData).then((res) => {
    expect(res.status).to.equal(201);
    bookId = res.body.id;
  });
});

Given("a not-existent book ID is provided", () => {
  bookId = 99999; // Non-existent book ID
});

Given("book ID is not provided", () => {
  bookId = undefined; // Missing book ID
});

Given("invalid book ID is provided", () => {
  bookId = "invalidId"; // Invalid book ID format
});

Given("another book with the same title exists", () => {
  const bookData = {
    title: `Automated Testing Book ${Math.floor(Math.random() * 1000)}`, // Different title
    author: "Another Author",
  };

  Books.addOneBook(bookData).then((res) => {
    expect(res.status).to.equal(201);
  });
});

Given("the user provides updated book data", () => {
  function generateRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
  }

  updatedBookData = {
    id: bookId,
    title: `Updated Automated Testing Book ${generateRandomString(5)}`,
    author: `Updated Test Author ${generateRandomString(5)}`,
  };
});

Given("the user provides invalid updated book data", () => {
  updatedBookData = {
    id: bookId,
    title: 2564,  // Invalid title (number instead of string)
    author: 7894, // Invalid author (number instead of string)
  };
});

Given("the user provides an empty title", () => {
  updatedBookData = {
    id: bookId,
    title: "", // Empty title
    author: `Updated Author ${Math.random().toString(36).substring(2, 7)}`,
  };
});

When("the user attempts to update the book with valid data", () => {
  Books.updateBook(bookId, updatedBookData, authToken).then((res) => {
    response = res;
  });
});

When("the user attempts to update the book with invalid data", () => {
  Books.updateBook(bookId, updatedBookData, authToken).then((res) => {
    response = res;
  });
});

When("the user attempts to update the book with an empty title", () => {
  Books.updateBook(bookId, updatedBookData, authToken).then((res) => {
    response = res;
  });
});

When("the user attempts to update the book with the existing title", () => {
  Books.updateBook(bookId, updatedBookData, authToken).then((res) => {
    response = res;
  });
});

Then("the API should return {int} status code", (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then("the response should contain the updated book details", () => {
  expect(response.body).to.have.property("id", bookId);
  expect(response.body).to.have.property("title", updatedBookData.title);
  expect(response.body).to.have.property("author", updatedBookData.author);
});

Then("the book data should be updated in the system", () => {
  Books.getBook(bookId).then((res) => {
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("title", updatedBookData.title);
    expect(res.body).to.have.property("author", updatedBookData.author);
  });
});

Then("the response should indicate that the book id is not matched", () => {
  expect(response.body).to.equal("Book not found");
});

Then("the response should contain an error message for invalid data", () => {
  expect(response.body).to.equal("Invalid data provided");
});

Then("the response should contain an error message for missing book ID", () => {
  expect(response.body).to.have.property("message");
  expect(response.body.message).to.equal("Missing book ID");
});

Then("the response should contain an error message for invalid book ID", () => {
  expect(response.body).to.equal("Invalid book ID");
});

Then("the response should contain an error message indicating the title is already taken", () => {
  expect(response.body).to.equal("Title already taken");
});

Then("the response should contain an error message indicating that the title is required", () => {
  expect(response.body).to.equal("Title is required");
});
