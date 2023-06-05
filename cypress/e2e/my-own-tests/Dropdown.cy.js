///<reference types="cypress"/> 

describe('Dropdown menu test', () => {

    it('Select option 1', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.url().should('contain', 'dropdown')
        cy.location('protocol').should('equal', 'https:')

        cy.get('select').select('Option 1').select('Option 2')
    })
})