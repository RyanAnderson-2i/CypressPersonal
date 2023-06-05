/// <reference types="cypress"/> 

describe('Checkboxes', () => {
    it('Uncheck original', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.url().should('contain', 'checkboxes')
        cy.get('[checked=""]').click()
    })

    it('Check and uncheck boxes', () => {
        cy.get('#checkboxes > :nth-child(1)').click()
        cy.get('#checkboxes > :nth-child(3)').click()

        cy.get('#checkboxes > :nth-child(1)').click()
        cy.get('#checkboxes > :nth-child(3)').click()

        cy.get('#checkboxes > :nth-child(3)').should('not.equal', cy.get('[checked=""]'))
    })
})