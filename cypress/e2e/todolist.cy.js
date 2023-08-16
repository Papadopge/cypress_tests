describe('To do List Page', () => {
    beforeEach(() => {
        cy.visit('http://georgiapapadopoulou.eu.185-25-20-64.linux11.name-servers.gr/home.html')
        cy.contains('QA Test Environment').should('be.visible')
        cy.contains('A QA test environment is a specialized platform designed exclusively for testing purposes. Its primary function is to rigorously evaluate and validate various functionalities and aspects of a software application.').should('be.visible')
        cy.get('#todolistbutton').should('be.visible')
        cy.get('#todolistbutton').should('have.text', 'Go to\n                To-Do List\n                Page')
        cy.get('#todolistbutton').click();
      });
      it('Adds a new task to the list', () => {
        cy.get('#newTask').type('Buy groceries');
        cy.get('#addTask').click();
        cy.get('.task-list ul#tasks li').should('have.length', 1);
        cy.get('.task-list ul#tasks li').should('contain', 'Buy groceries');
      });
      it('Marks a task as completed', () => {
        cy.get('#newTask').type('Read a book');
        cy.get('#addTask').click();
        cy.get('.task-list ul#tasks li').should('have.length', 1);
        cy.get('.task-list ul#tasks li button').click();
        cy.get('.task-list ul#tasks li').should('have.length', 0);
        cy.get('.completed-tasks ul#completedTasks li').should('have.length', 1);
        cy.get('.completed-tasks ul#completedTasks li').should('contain', 'Read a book');
      });
    
      it('Removes a completed task', () => {
        cy.get('#newTask').type('Clean the house');
        cy.get('#addTask').click();
        cy.get('.task-list ul#tasks li button').click();
        cy.get('.completed-tasks ul#completedTasks li button').click();
        cy.get('.completed-tasks ul#completedTasks li').should('have.length', 0);
      });
    
      it('Does not add a task if input is empty', () => {
        cy.get('#addTask').click();
        cy.get('.task-list ul#tasks li').should('have.length', 0);
      });
  });
  