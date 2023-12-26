describe("Check The Dashboard Functionality", () => {
  beforeEach(() => {
    cy.login()
  })

  it("Verify the Dashboard Page", () => {
    cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item-- name")
      .contains("Dashboard")
      .parents(".oxd-main-menu-item-wrapper a")
      .should("have.class", "oxd-main-menu-item active")
    cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .contains("Dashboard")
      .parentsUntil(".oxd-main-menu")
      .should("have.class", "oxd-main-menu-item active")
    cy.get(".oxd-grid-3.orangehrm-dashboard-grid").should("be.visible")
    cy.get(".oxd-sheet--white.orangehrm-dashboard-widget").should("have.length", 7)
  })

  it("Check the headers of the tiles", () => {
    cy.get(".orangehrm-dashboard-widget-header")
      .find("p.oxd-text.oxd-text--p")
      .should("be.visible")
      .then($ele => {
        expect($ele.text())
          .include("Time at Work")
          .and.include("My Actions")
          .and.include("Quick Launch")
          .and.include("Buzz Latest Posts")
          .and.include("Employees on Leave Today")
          .and.include("Employee Distribution by Sub Unit")
          .and.include("Employee Distribution by Location")
      })
  })
})
