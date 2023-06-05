/// <reference types="cypress" /> 

describe('Challenging DOM', () => {

    it('Click edit and delete', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom')
        cy.url().should('include','challenging_dom')
        //cy.get('tbody').children().first().get('td')
        cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click()
        cy.url().should('include','#edit')
        cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click()
        cy.url().should('include','#delete')
    })

    it('Press colored buttons', () => {
        cy.get('.large-2').children().first().should('have.css', 'background-color','rgb(43, 166, 203)').click()
        cy.get('.alert').should('have.css', 'background-color', 'rgb(198, 15, 19)').click()
        cy.get('.success').should('have.css','background-color','rgb(93, 164, 35)').click()
        cy.get('canvas')
    })
    
    it('Test canvas', () => {

        cy.get('canvas').then($canvas => {
            // Get dimension of the canvas
            const canvasWidth = $canvas.width();
            const canvasHeight = $canvas.height();
       
            // Divide in half since cursor will be at center of canvas
       
            const canvasCenterX = canvasWidth / 2;
            const canvasCenterY = canvasHeight / 2;
       
            // Determine the click position by dissecting the space where the button is
            // This helps allow the test to work responsively
       
            const buttonX = canvasCenterX + ( ( canvasCenterX / 3 ) * 2 );
            const buttonY = canvasCenterY + ( ( canvasCenterY / 3 ) * 2 );
       
            // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!
       
            cy.wrap($canvas)
              .scrollIntoView()
              .click(buttonX, buttonY)
          });
    })
})