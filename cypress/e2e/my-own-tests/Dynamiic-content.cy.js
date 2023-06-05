///<reference types="cypress"/> 

describe('Test dynamic content', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_content?with_content=static')
      })
      
    it('Dynamic content is not equal', () => {
        cy.url().should('contain', 'dynamic_content')

        cy.get('#content > :nth-child(7) > :nth-child(2)')

        cy.get('#content > :nth-child(7) > .large-10').then(($content) => {
            // store the content's text
            const txt = $content.text()
          
            // click the button that loads dynamic content
            cy.get(':nth-child(3) > a').click()
          
            // compare the two dynamic content's text
            // and make sure they are different
             cy.get('#content > :nth-child(7) > .large-10').should(($content2) => {
               expect($content2.text()).not.to.eq(txt)
             })
          })  
    })

    it('Test images', () => {

        cy.get(':nth-child(1) > .large-2 > img').then(($img1) => { 
            cy.get(':nth-child(4) > .large-2 > img').should(($img2) => { 
                expect($img2).not.to.match($img1)
            })
        })

        cy.get(':nth-child(7) > .large-2 > img').then(($img1) => { 

            cy.get(':nth-child(3) > a').click()

            cy.get(':nth-child(7) > .large-2 > img').should(($img2) => { 
                expect($img2).not.to.match($img1)
            })
        })
    })
})