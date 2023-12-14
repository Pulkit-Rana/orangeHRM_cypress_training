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

import { LoginPage } from "./pageobjects/loginpage"

const loginPage = new LoginPage()

// This way of aliasing was not allowedfor fixtures in prev versions.
Cypress.Commands.add('login', () => {
    cy.fixture("/login.json").then((login) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        loginPage.getComapnyLogo().should("be.visible")
        loginPage.getLoginUserName().type("Admin")
        loginPage.getLoginPassword().type("admin123")
        cy.get('.oxd-button').contains("Login").click()
        cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").contains("Dashboard").parent().should("have.class", "oxd-main-menu-item active")
    })    
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