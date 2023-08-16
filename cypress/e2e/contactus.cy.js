describe('Contact Us Page', () => {
    beforeEach(() => {
        cy.visit('http://georgiapapadopoulou.eu.185-25-20-64.linux11.name-servers.gr/home.html')
        cy.contains('QA Test Environment').should('be.visible')
        cy.contains('A QA test environment is a specialized platform designed exclusively for testing purposes. Its primary function is to rigorously evaluate and validate various functionalities and aspects of a software application.').should('be.visible')
        cy.get('#contactusbutton').should('be.visible')
        cy.get('#contactusbutton').should('have.text', 'Go\n                to Contact Us\n                Page')
        cy.get('#contactusbutton').click();
      });
  
      it('Fills out and submits the form successfully', () => {
        cy.get('#inputFirstName').type('firstname');
        cy.get('#inputLastName').type('lastname');
        cy.get('#inputEmail').type('email@example.com');
        cy.get('#inputPassword').type('secretpassword');
        cy.get('textarea[name="message"]').type('This is a test message');
        cy.get('#submitFormButton').should('be.visible').click();
        cy.get('#successAlert').should('be.visible');
        cy.contains('You successfully submited in Contact Us Page').should('be.visible')
      });      
  
    it('Displays error messages for empty form fields', () => {
      // Submit the form without filling out fields
      cy.get('#submitFormButton').click();
      // Verify error messages
      cy.get('#firstNameError').should('be.visible').and('contain', 'First Name is required.');
      cy.get('#lastNameError').should('be.visible').and('contain', 'Last Name is required.');
      cy.get('#emailError').should('be.visible').and('contain', 'Email is required.');
      cy.get('#passwordError').should('be.visible').and('contain', 'Password is required.');
    });
  
    it('Hides error messages after filling out form fields', () => {
      // Submit the form without filling out fields
      cy.get('#submitFormButton').click();
      // Verify error messages
      cy.get('#firstNameError').should('be.visible');
      cy.get('#lastNameError').should('be.visible');
      cy.get('#emailError').should('be.visible');
      cy.get('#passwordError').should('be.visible');
      // Fill out form fields
      cy.get('#inputFirstName').type('John');
      cy.get('#inputLastName').type('Doe');
      cy.get('#inputEmail').type('john@example.com');
      cy.get('#inputPassword').type('secretpassword');
      cy.get('#submitFormButton').click();
      // Verify error messages are hidden
      cy.get('#firstNameError').should('not.be.visible');
      cy.get('#lastNameError').should('not.be.visible');
      cy.get('#emailError').should('not.be.visible');
      cy.get('#passwordError').should('not.be.visible');
    });
  });
  