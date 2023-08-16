describe('File Upload Page', () => {
    beforeEach(() => {
        cy.visit('http://georgiapapadopoulou.eu.185-25-20-64.linux11.name-servers.gr/home.html')
        cy.contains('QA Test Environment').should('be.visible')
        cy.contains('A QA test environment is a specialized platform designed exclusively for testing purposes. Its primary function is to rigorously evaluate and validate various functionalities and aspects of a software application.').should('be.visible')
        cy.get('#fileuploadbutton').should('be.visible')
        cy.get('#fileuploadbutton').should('have.text', 'Go to File Upload\n                Page')
        cy.get('#fileuploadbutton').click();
      });
  
    it('Displays the initial UI elements', () => {
      cy.get('h2').should('contain', 'File Upload');
      cy.get('#fileInput').should('be.visible');
      cy.get('#uploadButton').should('be.visible').and('contain', 'Upload');
      cy.get('#uploadStatus').should('not.be.visible');
    });
  
    it('Uploads a file successfully', () => {
        cy.get('#fileInput').click();
        cy.get('input[type=file]').should('be.visible').attachFile('example.json');
        cy.get('#uploadButton').click();
        cy.get('#uploadStatus').should('be.visible').and('contain', 'File uploaded successfully!');
      });
      
      
    it('Does not upload a file if no file is selected', () => {
      cy.get('#uploadButton').click();
      cy.get('#uploadStatus').should('not.be.visible');
    });
  
    it('Displays status message during file upload', () => {
        cy.get('#fileInput').click();
        cy.get('input[type=file]').should('be.visible').attachFile('example.json');
        cy.get('#uploadButton').should('be.visible').and('contain', 'Upload').click()
        cy.wait(1000); // Wait for the upload simulation
        cy.get('#uploadStatus').should('be.visible').and('contain', 'Uploading file...');
        cy.wait(2000); 
        cy.get('#uploadStatus').should('be.visible').and('contain', 'File uploaded successfully!');
      });
  });