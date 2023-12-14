export class LoginPage {

    getComapnyLogo() {
        return cy.get('[alt="company-branding"]')
    }

    getLoginUserName() {
        return cy.get('[placeholder="Username"]')
    }

    getLoginPassword() {
        return cy.get('[placeholder="Password"]')
    }
}