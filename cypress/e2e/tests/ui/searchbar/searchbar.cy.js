import {Then, When} from "@badeball/cypress-cucumber-preprocessor";
import Searchbar from '../../../page-objects/searchbar.cy';

const {default: LoginAsValidUser} = require('../shared/hooks.cy');


When("I navigate to the search bar", () => {
    Searchbar.visit();
});

When("I enter correct element {string}", (element) => {
    Searchbar.enterSearchTerm(element);
});

Then("I should see filtered element {string}", (expectedElement) => {
    Searchbar.verifyFilteredElement(expectedElement);
});

Then("I should not see filtered element {string}", (expectedElement) => {
    Searchbar.verifyNoFilteredElement(expectedElement);
});
