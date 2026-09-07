import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged in as {string}', (username: string) => {
  cy.visit('/');

  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();

  cy.url().should('include', '/inventory');
});

When('I open the menu', () => {
  cy.get('#react-burger-menu-btn').click();
});

When('I click the Logout button', () => {
  cy.get('#logout_sidebar_link').click();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/');
});