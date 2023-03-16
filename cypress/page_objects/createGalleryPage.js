class CreateGallery {
     
     get createGalleryLink() {
        return cy.get(".nav-link").eq(2);
      }
      
      get createGalleryHeading () {
        return cy.get("h1")
     }
    
      get galleryTitleInput() {
        return cy.get("#title");
      }
    
      get galleryDescriptionInput() {
        return cy.get("#description");
      }
    
      get imageUrlInput() {
        return cy.get(".input-group");
      }
      
      get addImageBtn() {
        return cy.get("button").eq(-3);
      }

      get imageUrlInputWrapper() {
        return cy.get("div[class='input-group mb-3']");
      }
    
      get deleteGalleryUrlBtn() {
        return this.imageUrlInput.find("button").eq(0);
      }
      get createGalleryUpBtn() {
        return this.imageUrlInput.find("button").eq(1);
      }
    
      get createGalleryDownBtn() {
        return this.imageUrlInput.find("button").last();
      }
    
      get submitBtn() {
        return cy.get("button").eq(-2);
      }

      get cancelBtn() {
        return cy.get("button").eq(-1);
      }

      get errorMessage() {
        return cy.get(".alert-danger")
      }
    
      createGallery(title, desc, imageUrl) {
        this.galleryTitleInput.type(title);
        this.galleryDescriptionInput.type(desc);
        this.imageUrlInput.type(imageUrl);
        this.submitBtn.click();
      }
}
    
export const createGallery = new CreateGallery();