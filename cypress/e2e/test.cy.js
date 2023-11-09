describe("Check The Dashboard Functionality", () => {

    it("visit the url and perform login", () => {
       
        cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").contains("Dashboard").parents(".oxd-main-menu").find("li a").should("have.class", "oxd-main-menu-item active")
        // cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name").contains("Dashboard").parent().should("have.class","oxd-main-menu-item active")
    })

    it("Validate the default landning page & Validate the page", () => {

    })


    it("alidate that the dashboard tiles is visible to me and validate the length should be 7 ", () => {
        //// validate that the dashboard tiles is visible to me and validate the length should be 7 
        // Validate the name on each tiles
    })
})