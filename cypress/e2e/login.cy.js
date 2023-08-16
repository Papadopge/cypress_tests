describe('As a user navigate to Login Page', () => {
  beforeEach(() => {
    cy.visit('http://georgiapapadopoulou.eu.185-25-20-64.linux11.name-servers.gr/home.html')
    cy.contains('QA Test Environment').should('be.visible')
    cy.contains('A QA test environment is a specialized platform designed exclusively for testing purposes. Its primary function is to rigorously evaluate and validate various functionalities and aspects of a software application.').should('be.visible')
    cy.get('#loginbutton').should('be.visible')
    cy.get('#loginbutton').should('have.text', 'Go to Login\n                Page')
    cy.get('#loginbutton').click();
  });
  it('Verify the login page elements', ()=> {
    cy.contains('Please sign in').should('be.visible')
    cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email address');
    cy.get('#inputEmail').should('have.attr', 'required');
    cy.get('#inputEmail').should('have.attr', 'autofocus');
    cy.get('#inputPassword').should('have.attr', 'required')
    cy.get('label').should('contain', 'Remember me');
    cy.get('label input[type="checkbox"]').should('exist');
    cy.get('#signInButton').should('have.text', 'Sign\n                            in');
  });
  it('User with valid credentials logs in successfully', ()=> {
    cy.get('#inputEmail').type('test@example.com');
    cy.get('#inputPassword').type('password');
    cy.get('#signInButton').click();
    cy.wait(2000);
    cy.contains('You successfully logged in').should('be.visible')
  });
  it('Ensure User cannot log in with empty Username field', ()=> {
    cy.get('#inputPassword').type('password');
    cy.get('#signInButton').click();
    cy.wait(1000);
    cy.get('#emailError').should('be.visible');
    cy.get('#emailError').should('have.text', '\n                            Email is required.\n                        ')
  });
  it('Ensure User cannot log in with empty Password field', ()=> {
    cy.get('#inputEmail').type('test@example.com');
    cy.get('#signInButton').click();
    cy.wait(1000);
    cy.get('#passwordError').should('be.visible');
    cy.get('#passwordError').should('have.text', '\n                            Password is required.\n                        ')
  });
});