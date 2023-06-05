//Required for cypress commands
/// <reference types="cypress" /> 

//Test
describe('Login', () => {

    it('Sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=cb6ki4') /* Visit this page */
        cy.title().should('equal', 'Conduit') /* Check the page title */
        cy.url().should('include', '/login') /* Check the page url too */
        cy.location('protocol').should('equal','https:') /* Check the page security */

        //cy.get('input[type="email"]').type('anderson.ryan96@gmail.com') //Get the email element and type
        //cy.get('input[type="password"]').type('admin123') //Get the password element and type
        //cy.get('.btn').contains('Sign in').click() //Get the sign in button and click

        //Search within a particular element instead of the entire page
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('anderson.ryan96@gmail.com') //Get the email element and type
            cy.get('input[type="password"]').type('admin123') //Get the password element and type
            cy.get('.btn').contains('Sign in').click()
        })
        cy.contains('Your Feed', {timeout:10000}).should('be.visible') //Check for a string on the page
    })

    
    it('Create a post', () => {
        //cy.contains('New Post').click()

        cy.get('ul.navbar-nav').children().contains('New Post').click() //Get all children on selected element
        cy.hash().should('include','#/editor') //Gets the url hash of the current page

        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            //cy.get('input').last().should('be.empty')
            cy.contains('Publish Article').click()
        })

        // cy.get(':nth-child(1) > .form-control').type('Test1')
        // cy.get(':nth-child(2) > .form-control').type('Test 2')
        // cy.get(':nth-child(3) > .form-control').type('Test 3')
        // cy.get(':nth-child(4) > .form-control').should('be.empty')
        // cy.contains('Publish Article').click()

        cy.url().should('include','article') //Returns url of current active page
    })

    it('Mark-unmark as favorite', () => {
        cy.get('ul.navbar-nav').children().contains('Ando').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.wait(1000)
        cy.get('ul.nav-pills').children().contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.wait(1000)
        
        cy.get('.ion-heart').first().click()
        cy.get('ul.nav-pills').children().contains('My Articles').click()
        //cy.wait(1000)
        //cy.get('pull-xs-right').children().contains('0')
        //cy.get('ul.nav-pills').children().contains('Favorited Articles').click()
        //cy.contains('No articles are here... yet.').should('be.visible')
    })

})
