import { Common } from "../support/common"
import { Dashboard } from "../support/pageobjects/dashboardpage"

const dashboard = new Dashboard()
const commonPage = new Common()

describe("Test Suite for Admin Page", () => {

    beforeEach(() => {
        cy.login()
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers") // 6s
        cy.fixture("/admin.json").as("adminData")
    })

    it('Pre-req write the admin EmpName', () => {
        cy.get("@adminData").then((admin) => {
            cy.get(".oxd-table-body > div:nth-child(n+1) > div > div:nth-child(2) > div").contains(admin.userName)
                .parentsUntil(".oxd-table-card")
                .find("div:nth-child(4) > div").invoke("text").as("empName").then(($empName) => { // $empName = Burak İkinci
                    const empName = $empName.split(" ")[0] // empName = Burak
                    cy.log(empName)
                    cy.readFile("cypress/fixtures/admin.json", err => {
                        if (err) {
                            return cy.log("File not found")
                        }
                    }).then((text) => {
                        text.empName = empName // fixture's file empName = Burak
                        cy.writeFile("cypress/fixtures/admin.json", JSON.stringify(text))
                    })
                })
        })
    })

    it("Validate The search panel", () => {
        cy.get("@adminData").then((adminData) => {
            cy.intercept("GET", "/web/index.php/api/v2/admin/users?**").as("xhr")
            cy.intercept("GET", "/web/index.php/api/v2/pim/employees?**").as('usrName')
            cy.get(".oxd-table-filter").should("be.visible").and("exist") //4s
            cy.get(".oxd-grid-item.oxd-grid-item--gutters").find("label").first().should("have.text", "Username").parents().find(".oxd-input.oxd-input--active").last().type("Admin")
            cy.wait("@xhr")
            cy.get(".oxd-select-text--arrow").first().click({ force: true }) //4s
            cy.get('[role="listbox"]').should("be.visible").contains(adminData.userName).click() //4s
            cy.get('.oxd-autocomplete-text-input > input').type(adminData.empName).then(() => {
                cy.get('[role="listbox"]').should("contain", "Searching...")
                cy.wait("@usrName")
                cy.get('[role="listbox"]').contains(adminData.empName).click()
            })
            cy.get(".oxd-select-text--arrow").eq(1).click({ force: true })
            cy.get('[role="listbox"]').should("be.visible").contains("Enabled").click()
            cy.get('.oxd-form-actions > .oxd-button--secondary').click()
            cy.get(".oxd-table-body").should("have.length", 1)
            cy.get('.oxd-table-body').find('[role="cell"]').eq(1).contains("Admin")
        })
    })

    it('Validate the Headers on the listing', () => {
        cy.get(".oxd-table-header").then((ele) => {
            expect(ele.text())
                .include("Username")
                .and.include("User Role")
                .and.include(this.adminData.empName)
                .and.include("Status")
                .and.include("Actions")
        })
        //sorting
        sorting("Username")
    })
})

function sorting(headerName) {
    cy.intercept("GET", "/web/index.php/api/**/admin/users?**").as("sort")
    cy.get('.oxd-table-header [role="columnheader"]').contains(headerName).find(".oxd-table-header-sort").click()
    cy.wait("@sort")
    cy.get('[role="dropdown"]').should('be.visible').contains("Descending").click()// todo
    cy.wait("@sort")
    var firstRowName
    var lastRowName
    var ColumnIndex

    cy.get(`.oxd-table-header [role="columnheader"]`)
        .each(($el, index) => {
            if ($el.text().split("AscendingDescending")[0] === headerName)
                ColumnIndex = index
        })
        .then(() => {
            cy.get(`.oxd-table-body > div:nth-child(n+1) > div > div:nth-child(${ColumnIndex + 1}) > div`)
                .first()
                .then(($el) => {
                    lastRowName = $el.text().trim() // Shurtib
                })
        })
    cy.get("WholePage")
        .then(($el) => {
            if ($el.find("pagination element").is(":visible")) {
                cy.get("Pagination last button").click()
            }
        })
        .then(() => {
            cy.get(`.oxd-table-body > div:nth-child(n+1) > div > div:nth-child(${ColumnIndex + 1}) > div`)
                .last()
                .then(($el) => {
                    firstRowName = $el.text().trim() // Admin
                })
        })
    cy.get("WholePage")
        .then(($el) => {
            if ($el.find("pagination element").is(":visible")) {
                cy.get("Pagination first page button").click()
            }
        })
    cy.get('.oxd-table-header [role="columnheader"]').contains(headerName).find(".oxd-table-header-sort").click()
    cy.get('[role="dropdown"]').should('be.visible').contains("Ascending").click()// todo
    cy.wait("@sort")
        .then(() => {
            cy.get(`.oxd-table-body > div:nth-child(n+1) > div > div:nth-child(${ColumnIndex + 1}) > div`)
                .first()
                .then(($el) => {
                    expect($el.text().trim()).to.be.equal(firstRowName)
                })
        })
    cy.get('.oxd-table-header [role="columnheader"]').contains(headerName).find(".oxd-table-header-sort").click()
    cy.get('[role="dropdown"]').should('be.visible').contains("Ascending").click()// todo
    cy.wait("@sort")
        .then(() => {
            cy.get(`.oxd-table-body > div:nth-child(n+1) > div > div:nth-child(${ColumnIndex + 1}) > div`)
                .last()
                .then(($el) => {
                    expect($el.text().trim()).to.be.equal(lastRowName)
                })
        })
}

