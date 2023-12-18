describe("API testing", () => {
  it("Working with GET API", () => {
    cy.request("GET", "https://opensource-demo.orangehrmlive.com/").then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it("Working with POST API", () => {
    cy.request("POST", "https://opensource-demo.orangehrmlive.com/", {
      username: "Admin",
      password: "admin123",
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })

  it.only("POST API to test the response data", () => {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "Bingo",
      job: "Team Lead",
    }).then(res => {
      expect(res.body.name).to.eq("Bingo")
      expect(res.status).to.eq(201)
      expect(res.statusText).to.eq("Created")
    })
  })
})
