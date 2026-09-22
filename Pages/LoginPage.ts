class LoginPage {
  get emailInput() {
    return cy.get('[data-test="username"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get("#login-button");
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  visit() {
    cy.visit("/");
  }

  login(email: string, password: string) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  verifyErrorMessage(message: string) {
    this.errorMessage.should("have.text", message);
  }
  verifyLoginPageIsDisplayed() {
  cy.url().should("not.include", "/inventory.html");
  this.loginButton.should("be.visible");
}
}

export default new LoginPage();