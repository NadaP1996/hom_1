/// <refernce types="Cypress" />
import { loginPage } from "../page_objects/loginPage"

describe("login tests using POM", () => {
    before("visit the app and click on the login button", () => {
        cy.visit("/")
        loginPage.loginLink.click()
        cy.url().should("include","/login")
    })
    
    it.only("login with invalid credentials", () => {
        loginPage.login("testt123@gmail.com", "nadapanic16")
        cy.url().should("include","/login")
        loginPage.errorMessage
        .should("exist")
        .and("be.visible")
        .and("have.text","Bad Credentials")
        .and("have.css","background-color","rgb(248, 215, 218)")
        .and("have.css","color","rgb(114, 28, 36)")
        .and("have.class", "alert-danger")
    cy.get(".nav-link").should("have.length", 3)
    });

    it ("login with valid credentials", () => {
        loginPage.login("testtest123@gmail.com", "nadapanic16")
        cy.url().should("not.include","/login")
    })

});