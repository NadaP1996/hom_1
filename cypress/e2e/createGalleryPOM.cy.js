import { loginPage } from "../page_objects/loginPage";
import { createGallery } from "../page_objects/createGalleryPage";

let galleryData = {
    title: "nada",
    description: "lorem ddfg  fyry  yfyh yfh",
    imageUrl: "https://c8.alamy.com/comp/JDF7YT/rocknroll-never-dies!-skull-zombie-head-with-rockabilly-pomp-hairstyle-JDF7YT.jpg",
  };

describe("create gallery tests using POM", () => {
    before("visit the app and click on the create gallery button", () => {
        cy.visit("/login");
        loginPage.login("testtest123@gmail.com", "nadapanic16")
        cy.url().should("not.include", "/login");
    })

    it("create gallery", () => {
        createGallery.createGalleryLink.click();
        createGallery.createGalleryHeading
          .should("be.visible")
          .and("have.text", "Create Gallery");
    
          createGallery.createGallery(
          galleryData.title,
          galleryData.description,
          galleryData.imageUrl
        );
    });
})