//Required for cypress commands
/// <reference types="cypress" /> 

//Test
describe('Login', () => {

    it('Sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=cb6ki4') /* Visit this page */
        cy.title().should('equal', 'Conduit') /* Check the page title */
        cy.url().should('include', '/login') /* Check the page url too */
        cy.location('protocol').should('equal','https:') /* Check the page security */

        cy.get('input[type="email"]').type('anderson.ryan96@gmail.com') //Get the email element and type
        cy.get('input[type="password"]').type('admin123') //Get the password element and type
        cy.get('.btn').contains('Sign in').click() //Get the sign in button and click

        cy.contains('Your Feed', {timeout:10000}).should('be.visible') //Check for a string on the page
    })

    it('Create a post', () => {
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor') //Gets the url hash of the current page

        cy.get(':nth-child(1) > .form-control').type('Test1')
        //cy.get('input[placeholder="Article Title"]').type('Test')

        cy.get(':nth-child(2) > .form-control').type('Test 2')
        //cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')

        cy.get(':nth-child(3) > .form-control').type('Test 3')
        //cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')

        //cy.get('input[placeholder="Enter tags"]').should('be.empty')
        cy.get(':nth-child(4) > .form-control').should('be.empty')

        cy.contains('Publish Article').click()
        cy.url().should('include','article') //Returns url of current active page
    })

    it('Mark-unmark as favorite', () => {
        cy.get('.nav-link').contains('Ando').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
      
        //This code shouldn't be required, but the website isn't working as expected
        cy.reload() //Reload the page
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('anderson.ryan96@gmail.com') //Get the email element and type
        cy.get('input[type="password"]').type('admin123') //Get the password element and type
        cy.get('.btn').contains('Sign in').click() //Get the sign in button and click
        cy.get(':nth-child(4) > .nav-link').contains('Ando').click()
        cy.contains('Favorited Articles').click()
        cy.contains('Test1', {timeout:200000}).should('be.visible')
        cy.get('.ion-heart').click()

        //cy.contains('My Articles').click()
        //cy.contains('Favorited Articles').click()
        //cy.contains('No articles are here... yet.').should('be.visible')
    })

})
