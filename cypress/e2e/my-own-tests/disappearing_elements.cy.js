/// <reference types="cypress"/> 

describe('Disappearing Elements', () => {

    it('Gallery', () => {

        cy.visit('https://the-internet.herokuapp.com/disappearing_elements')

        let remainingAttempts = 5;

        function waitUntilLinkExists() {

        let $navLink = Cypress.$(':nth-child(5) > a');
        if ($navLink.length) {
        // Nav link found.
        // Return a jQuery object.
            return $navLink;
        }

        if (--remainingAttempts) {
            cy.log('Nav link not found yet. Remaining attempts: ' + remainingAttempts);

        // Requesting the page to reload (F5)
            cy.reload();

        // Wait a second for the server to respond and the DOM to be present.
            return cy.wait(1000).then(() => {
                return waitUntilLinkExists();
            });
        }
        throw Error('Nav link was not found.');
        }

        waitUntilLinkExists().then($navLink => {
            cy.log('Nav Link: ' + $navLink.text());
        });

        // let x = new Boolean(false);
        // cy.get('body').then($body => {
        //     while(x == false){
        //         if($body.find(':nth-child(5) > a').length > 0){
        //             cy.log('The element is visable')
        //             x = true
        //         }else{
        //             cy.reload()
        //         }
        //     }
            
        // })
    })
})