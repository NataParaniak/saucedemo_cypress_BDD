import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../../Pages/LoginPage";
import InventoryPage from "../../../Pages/InventoryPage";





When("I open the menu", () => {
  InventoryPage.openMenu();
});

When("I click the Logout button", () => {
  InventoryPage.logout();
});

Then("I should be redirected to the login page", () => {
  LoginPage.verifyLoginPageIsDisplayed();
});