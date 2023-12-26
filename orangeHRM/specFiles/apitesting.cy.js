describe("API testing", () => {


    it("Working with GET API", () => {
        cy.request("GET", "https://www.bstackdemo.com/").then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("Working with POST API", () => {
        cy.request("POST", "https://reqres.in/api/users", {
            "name": "Bingo",
            "job": "Team lead"
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("Bingo")
            expect(response.body.job).to.eq("Team lead")
            expect(response. statusText).to.eq("Created")
        })
    })

    it("Working with PUT API", () => {
        cy.request("POST", "https://reqres.in/api/users/2", {
            "name": "Pulkit",
            "job": "lead"
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("Pulkit")
            expect(response.body.job).to.eq("lead")
            expect(response. statusText).to.eq("Created")
        })
    })

    it("Working with Delete API", () => {
        cy.request("Delete", "https://reqres.in/api/users/2").then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})