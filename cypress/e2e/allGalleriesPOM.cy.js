import { loginPage } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleriesPage";

describe("all galleries tests using POM", () => {
    beforeEach("visit the app", () => {
        cy.visit("/login");
        loginPage.login("testtest123@gmail.com", "nadapanic16")
        cy.url().should("not.include", "/login");
    })

    it("test pagination", () => {
        allGalleries.allGalleries.should("be.visible").and("have.length", 10);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 20);
        allGalleries.loadMoreBtn.click();
        allGalleries.allGalleries.should("be.visible").and("have.length", 30);
      });
    
      it("test search", () => {
        allGalleries.search("gggggg");
        allGalleries.allGalleries.should("be.visible");
      });
})