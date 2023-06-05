/// <reference types="cypress" /> 

describe('Login', () => {

    it('Add element', () => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/') //Visit the page
        cy.url().should('include','add_remove_elements')
        cy.location('protocol').should('equal','https:') /* Check the page security */

        cy.get('.example').within(($example) => {
          cy.get('button').contains('Add Element').click()
        })
    })

    it('Delete element', () => {
        cy.get('#elements').within(($elements) => {
            cy.get('button').contains('Delete').click()
          })
    })

    it('Multiple elements', () => {
        cy.get('.example').within(($example) => {
            for(let n = 0; n < 5; n ++){
                cy.get('button').contains('Add Element').click()
              }
          })
          cy.get('#elements').children().should('have.length',5)
    })

    it('Delete multiple elements', () => {
        cy.get('#elements').within(($elements) => {
            let m = ($elements).length
            for(let n = 0; n < m; n ++){
                cy.get('.added-manually').contains('Delete').click()
              }
          })
          cy.get('#elements').children().should('have.length',0)
    })
})