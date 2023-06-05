/// <reference types="cypress" />

describe('Basic Tests', () => {
    
    it('We have correct page title', () =>{
        cy.visit('https://codedamn.com')

        cy.contains('Learn Programming').should('exist')

        cy.get('[data-testid=logo]')

        cy.get('div#root').should('exist')
        cy.get('div#noroot').should('not.exist')

    })

})