import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import AssignClaimPage from '../../../page-objects/assignClaimPage.cy.js';

Given('I am on the assign claim page', () => {
    AssignClaimPage.navigateToAssignClaim();
});

When("I enter employee name {string}", (name) => {
    AssignClaimPage.enterEmployeeName(name);
});

When("I select event {string}", (eventName) => {
    AssignClaimPage.selectEvent(eventName);
});

When("I select currency {string}", (currency) => {
    AssignClaimPage.selectCurrency(currency);
});

When('I enter remarks {string}', (remarks) => {
    AssignClaimPage.enterRemarks(remarks);
});

Then('I click Create button', () => {
    AssignClaimPage.clickCreate();
});

Then('I click Cancel button', () => {
    AssignClaimPage.clickCancel();
});