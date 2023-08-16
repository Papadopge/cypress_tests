describe('Settings Simulator Page', () => {
    beforeEach(() => {
        cy.visit('http://georgiapapadopoulou.eu.185-25-20-64.linux11.name-servers.gr/home.html')
        cy.contains('QA Test Environment').should('be.visible')
        cy.contains('A QA test environment is a specialized platform designed exclusively for testing purposes. Its primary function is to rigorously evaluate and validate various functionalities and aspects of a software application.').should('be.visible')
        cy.get('#settingssimulatorbutton').should('be.visible')
        cy.get('#settingssimulatorbutton').should('have.text', 'Go to Settings Simulator\n                Page')
        cy.get('#settingssimulatorbutton').click();
      });
  
    it('Displays the correct title', () => {
      cy.contains('Settings Simulator').should('be.visible');
    });
  
    it('Displays the list of settings', () => {
      cy.get('.setting-item').should('have.length', 3);
      cy.contains('Setting 1').should('be.visible');
      cy.contains('Setting 2').should('be.visible');
      cy.contains('Setting 3').should('be.visible');
    });
  
    it('Toggles the setting when checkbox is clicked', () => {
      cy.get('.setting-item').eq(0).find('input[type="checkbox"]').check();
      cy.get('.setting-item').eq(0).find('input[type="checkbox"]').should('be.checked');
      cy.get('.setting-item').eq(0).find('input[type="checkbox"]').uncheck();
      cy.get('.setting-item').eq(0).find('input[type="checkbox"]').should('not.be.checked');
    });
  
    it('Toggles the setting status correctly', () => {
      cy.get('.setting-item').eq(1).find('input[type="checkbox"]').check();
      cy.get('.setting-item').eq(2).find('input[type="checkbox"]').check();
      cy.get('.setting-item').eq(1).find('input[type="checkbox"]').should('be.checked');
      cy.get('.setting-item').eq(2).find('input[type="checkbox"]').should('be.checked');
    });
  });
  