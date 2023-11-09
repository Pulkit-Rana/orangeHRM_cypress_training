// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[alt="company-branding"]').should("be.visible")
    cy.get('[placeholder="Username"]').type("Admin")
    cy.get('[placeholder="Password"]').type("admin123")
    cy.get('.oxd-button').contains("Login").click()
    cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").contains("Dashboard").parent().should("have.class", "oxd-main-menu-item active")
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })