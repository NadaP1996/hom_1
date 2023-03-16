/// <refernce types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { createGallery } from "../page_objects/createGalleryPage";

let galleryData = {
    title: "Nada",
    description: "lorem ddfg  fyry  yfyh yfh",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTN7QOn23G4U17fezYYEHoTX1ySmfK66yNw&usqp=CAU.jpg",
  };


describe("create gallery tests using POM", () => {
    beforeEach("visit the app and click on the create gallery button", () => {
        cy.visit("/login");
        loginPage.login("testtest123@gmail.com", "nadapanic16")
        cy.url().should("not.include", "/login");
    })

    it("create gallery with a one-letter title ", () => {
        createGallery.createGalleryLink.click()
        createGallery.galleryTitleInput.type("a")
        createGallery.imageUrlInput.type(galleryData.imageUrl)
        createGallery.submitBtn.click();
        createGallery.errorMessage
        .should("be.visible")
        .and("have.text","The title must be at least 2 characters.")
    });

    it("gallery title with too many characters", () => {
        createGallery.createGalleryLink.click()
createGallery.galleryTitleInput.type("IiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiIiiiiiiiiiiiiiiiiiiiiii")
        createGallery.imageUrlInput.type(galleryData.imageUrl)
        createGallery.submitBtn.click();
        createGallery.errorMessage
        .should("be.visible")
        .and("have.text","The title may not be greater than 255 characters.")
    });

    it("image url in wrong format", () => {
        createGallery.createGalleryLink.click()
        createGallery.galleryTitleInput.type(galleryData.title)
        createGallery.imageUrlInput.type("https://i.pinimg.com/736x/ef/2e/cc/ef2ecc64a00cf8a4284c4340f3c6ab9c--beautiful-nature-pictures-amazing-photos.")
        createGallery.submitBtn.click();
        createGallery.errorMessage
        .should("be.visible")
        .and("have.text","Wrong format of image")
    });

    it("delete image url button functionality", () => {
        createGallery.createGalleryLink.click();
        createGallery.imageUrlInput.type("https://i.pinimg.com/736x/ef/2e/cc/ef2ecc64a00cf8a4284c4340f3c6ab9c--beautiful-nature-pictures-amazing-photos.jpg")
        createGallery.addImageBtn.click();
        createGallery.deleteGalleryUrlBtn.click()
    });

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
 
    it("cancel button functionality", () => {
        createGallery.createGalleryLink.click();
        createGallery.cancelBtn.click();
        cy.url().should("include","/")
    });
})