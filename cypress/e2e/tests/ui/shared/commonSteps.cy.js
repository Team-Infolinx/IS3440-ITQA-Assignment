import {Given} from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "./hooks.cy";

Given("I am logged in as a valid user", () => {
    LoginAsValidUser('', '');
});

Given('I am logged in as an admin user', () => {
    LoginAsValidUser('', '');
});