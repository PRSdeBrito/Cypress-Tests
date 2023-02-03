

export class homePage{

    openElementsPage(){
        cy.intercept('GET', '/gampad/ads?**').as('matchedUrl')
        cy.contains('Elements').click()
        cy.wait('@matchedUrl').then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
        cy.get('.main-header')
        cy.should('have.text', 'Elements')
    }

    openFormsPage(){
        cy.intercept('GET', '/gampad/ads?**').as('matchedUrl')
        cy.contains('Forms').click()
        cy.wait('@matchedUrl').then(({response}) => {
            expect(response.statusCode).to.eq(200)
        })
        cy.get('.main-header')
        cy.should('have.text', 'Forms')
    }
}

export const onHomePage = new homePage()