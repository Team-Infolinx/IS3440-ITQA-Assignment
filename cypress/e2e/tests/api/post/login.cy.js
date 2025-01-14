import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../../services/login.cy";

let response;

const sendLoginRequest = (username, password) => {
    return Login.loginUser(username, password).then((res) => {
        response = res;
    });
};

Given(
    "I send a POST request to login with username {string} and password {string}",
    (username, password) => {
        sendLoginRequest(username, password);
    }
);

Given(
    "the user is authenticated as {string} with password {string}",
    (userRole, password) => {
        cy.log(`Authenticating as ${userRole}...`);
        sendLoginRequest(userRole, password);
    }
);

Then("the response status should be {int}", (statusCode) => {
    expect(response.status).to.eq(statusCode);
});

Then("the response body should contain {string}", (message) => {
    expect(response.body).to.include(message);
});

