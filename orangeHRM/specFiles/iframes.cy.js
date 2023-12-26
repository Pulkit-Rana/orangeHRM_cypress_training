describe('Learning I frames', () => {


    it("Iframe test First to validate the list", () => {
        cy.visit("https://kitchen.applitools.com/ingredients/iframe")
        cy.get("#the-kitchen-table").its("0.contentDocument")
        .its('body').then(cy.wrap)
        .find("#fruits-vegetables").should("be.visible")
    })

    it("Iframe test First", () => {
        cy.visit("https://kitchen.applitools.com/ingredients/iframe")
        cy.getIframe("#the-kitchen-table").find("tbody tr td").contains("Apple")
    })

    it.only("Iframe test First", () => {
        cy.visit("https://kitchen.applitools.com/ingredients/iframe")
        cy.frameLoaded('#the-kitchen-table')
        cy.iframe('#the-kitchen-table').find("tbody tr td").contains("Apple")
    })
})