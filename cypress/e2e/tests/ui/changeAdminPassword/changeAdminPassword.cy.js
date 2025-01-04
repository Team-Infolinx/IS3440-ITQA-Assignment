import {Then, When} from "@badeball/cypress-cucumber-preprocessor";
import LoginAsValidUser from "../shared/hooks.cy";
import 'cypress-xpath';
import ChangePassword from "../../../page-objects/changePasswordPage.cy";
import LoginPage from "../../../page-objects/loginPage.cy";

When("I click on dropdown of the profile", () => {
    ChangePassword.clickDropdown();
});

When("I click on item called change password", () => {
    ChangePassword.clickChangePassword();
});

When("I type the current password as {string}", (currentPassword) => {
    ChangePassword.typeCurrentPassword(currentPassword);
});

When("I type new password as {string}", (newPassword) => {
    ChangePassword.typeNewPassword(newPassword);
});

When("I confirm the password with {string}", (confirmNewPassword) => {
    ChangePassword.confirmPassword(confirmNewPassword);
});

When("I click on save button", () => {
    ChangePassword.clickSaveButton();
});

Then("I see the tost message with {string}", (message) => {
    ChangePassword.verifyToastMessage(message);
});


Then("I logout and revisit the login page", () => {
    ChangePassword.clickDropdown();
    ChangePassword.clickOnLogout();
})

Then("I Try to login with new password which {string}", (newPassword) => {
    LoginAsValidUser('Admin', newPassword);
})

Then("I should see the Home page", () => {
    LoginPage.seeHomePage();
})


