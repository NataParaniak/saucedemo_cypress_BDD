import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the SauceDemo login page', () => {
  cy.visit('/');
});

When('I enter {string} as username', (username: string) => {
  cy.get('[data-test="username"]').type(username);
});

When('I enter {string} as password', (password: string) => {
  cy.get('[data-test="password"]').type(password);
});

When('I click the Login button', () => {
  cy.get('#login-button').click();
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory');
});

Then('the inventory page should be displayed', () => {
  cy.get('.title').should('have.text', 'Products');
});

Then('I should see the error message {string}', (message: string) => {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', message);
});