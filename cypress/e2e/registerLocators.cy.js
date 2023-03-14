/// <reference types="Cypress" /.
const locators = require("../fixtures/locators.json")
import {faker} from '@faker-js/faker';

describe("register tests with locators", () => {
    const userData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.firstName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8, true)+1,
    randomPasswordWithoutNumber: faker.internet.password(8, true, "^[a-zA-Z0-9_]*$"),
    shortPassword: faker.internet.password(2),
    randomEmailWithoutMonkey: faker.internet.email().replace('@','')
}
    beforeEach("visit gallery app and click on the register link", () => {
        cy.visit("/")
        cy.get(locators.commonFormElements.navbarLink).eq(2).click();
    });

    it("register with invalid email address with locators", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
        cy.get(locators.registerPage.firstNameInput).type("test")
        cy.get(locators.registerPage.lastNameInput).type("test")
        cy.get(locators.commonFormElements.emailInput).type("random@")
        cy.get(locators.commonFormElements.passwordInput).type("nadapanic16")
        cy.get(locators.registerPage.passwordConfirmationInput).type("nadapanic16")
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register")
    }),

    it("register without marking checkbox with locators", () => {
        cy.get(locators.registerPage.firstNameInput).type("test")
        cy.get(locators.registerPage.lastNameInput).type("test")
        cy.get(locators.commonFormElements.emailInput).type("random9@mail.com")
        cy.get(locators.commonFormElements.passwordInput).type("nadapanic16")
        cy.get(locators.registerPage.passwordConfirmationInput).type("nadapanic16")
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register")
    })
    
    it("register with empty first name input field using locators", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
        cy.get(locators.registerPage.lastNameInput).type("test")
        cy.get(locators.commonFormElements.emailInput).type("random@mail.com")
        cy.get(locators.commonFormElements.passwordInput).type("nadapanic16")
        cy.get(locators.registerPage.passwordConfirmationInput).type("nadapanic16")
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register")
    }),

    it("register without password confirmation using locators", () => {
        cy.get(locators.registerPage.firstNameInput).type("test")
        cy.get(locators.registerPage.lastNameInput).type("test")
        cy.get(locators.commonFormElements.emailInput).type("random9@mail.com")
        cy.get(locators.commonFormElements.passwordInput).type("nadapanic16")
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register")
    })


    it.only("register with valid data using locators", () => {
    
        cy.visit("https://gallery-app.vivifyideas.com/register")
        cy.get(locators.registerPage.firstNameInput).type(userData.randomFirstName)
        cy.get(locators.registerPage.lastNameInput).type(userData.randomLastName)
        cy.get(locators.commonFormElements.emailInput).type(userData.randomEmail)
        cy.get(locators.commonFormElements.passwordInput).type(userData.randomPassword)
        cy.get(locators.registerPage.passwordConfirmationInput).type(userData.randomPassword)
        cy.get(locators.registerPage.tcCheckbox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("not.contain", "/register")
    })

});