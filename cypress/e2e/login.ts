import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";
import InventoryPage from "../../Pages/InventoryPage";
import { validUser, lockedUser } from "../../test-data/credentials";

Given("I am on the SauceDemo login page", () => {
  LoginPage.visit();
});

When("I login with valid credentials", () => {
  LoginPage.login(validUser.username, validUser.password);
});

When("I login with locked credentials", () => {
  LoginPage.login(lockedUser.username, lockedUser.password);
});

When("I click the Login button", () => {
  LoginPage.clickLoginButton();
});

Then("I should be redirected to the inventory page", () => {
  InventoryPage.verifyUrl();
});

Then("the inventory page should be displayed", () => {
  InventoryPage.verifyPageIsDisplayed();
});


Then("I should see the error message {string}", (message: string) => {
  LoginPage.verifyErrorMessage(message);
});