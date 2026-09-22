class InventoryPage {
  get pageTitle() {
    return cy.get(".title");
  }
  get menuButton() {
    return cy.get("#react-burger-menu-btn");
  }

  get logoutButton() {
    return cy.get("#logout_sidebar_link");
  }

 

  openMenu() {
    this.menuButton.click();
  }

  logout() {
    this.logoutButton.click();
  }

  verifyPageIsDisplayed() {
    this.pageTitle.should("have.text", "Products");
  }
  verifyUrl() {
    cy.url().should("include", "/inventory.html");
  }

 
}

export default new InventoryPage();