import { loginPage } from "../page_objects/loginPage"

describe("login tests using POM", () => {
    before("visit the app and click on the login button", () => {
        cy.visit("/")
        loginPage.loginLink.click()
        cy.url().should("include","/login")
    })

    it ("login with valid credentials", () => {
        loginPage.login("testtest123@gmail.com", "nadapanic16")
    })
})