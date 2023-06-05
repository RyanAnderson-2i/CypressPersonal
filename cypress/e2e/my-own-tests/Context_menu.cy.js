/// <reference types="cypress"/> 

describe('Context Menu', () => {

    it('Clicking the context menu', () => {
        cy.visit('https://the-internet.herokuapp.com/context_menu')
        cy.url().should('contain', 'context_menu')
        cy.get('#hot-spot').rightclick().should('be.visible', 'You selected a context menu')
    })

    it('Clicking somewhere else', () => {
        cy.get('h3').rightclick()
        cy.get('html').should('not.have.text', 'You selected a context menu')
    })
})