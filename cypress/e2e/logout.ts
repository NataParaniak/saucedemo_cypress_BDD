import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../Pages/LoginPage";
import InventoryPage from "../../Pages/InventoryPage";

import { validUser } from "../../test-data/credentials";

Given("I am on the SauceDemo login page", () => {
  LoginPage.visit();
});

When("I login with valid credentials", () => {
  LoginPage.login(validUser.username, validUser.password);
});

When("I open the menu", () => {
  InventoryPage.openMenu();
});

When("I click the Logout button", () => {
  InventoryPage.logout();
});

Then("I should be redirected to the login page", () => {
  LoginPage.verifyLoginPageIsDisplayed();
});