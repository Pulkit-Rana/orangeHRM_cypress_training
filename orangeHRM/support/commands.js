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
import 'cypress-iframe';
import { LoginPage } from "./pageobjects/loginpage"

const loginPage = new LoginPage()

// This way of aliasing was not allowedfor fixtures in prev versions.
Cypress.Commands.add("login", () => {
  cy.visit("/")
  loginPage.getComapnyLogo().should("be.visible")
  loginPage.getLoginUserName().type(Cypress.env("userName"))
  loginPage.getLoginPassword().type(Cypress.env("password"), { log: false })
  cy.get(".oxd-button").contains("Login").click()
  cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name")
    .contains("Dashboard")
    .parent()
    .should("have.class", "oxd-main-menu-item active")
})

Cypress.Commands.add('getIframe', (iframe) => {
  return cy.get(iframe).its("0.contentDocument").its('body').then(cy.wrap)

})

