class AllGalleries {
  
    get allGalleriesHeading() {
    return cy.get("h1");
  }
    get searchInput() {
      return cy.get("input[aria-describedby='basic-addon2']");
    }
  
    get filterBtn() {
      return cy.get("button").first();
    }
  
    get loadMoreBtn() {
      return cy.get("button").last();
    }
  
    get allGalleries() {
      return cy.get(".grid").children();
    }
  
    get singleGallery() {
      return cy.get(".cell").first();
    }
  
    get singleGalleryHeading() {
      return this.singleGallery.find("h2");
    }

    get singleGalleryAuthor() {
      return this.singleGallery.find("p");
    }

    get singleGalleryDate() {
      return this.singleGallery.find("small");
    }

    get singleGalleryImage() {
      return this.singleGallery.find("img");
    }
  
    search(searchTerm) {
      this.searchInput.type(searchTerm);
      this.filterBtn.click();
    }
  }
  
  export const allGalleries = new AllGalleries();