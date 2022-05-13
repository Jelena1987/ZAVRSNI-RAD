///<reference types="Cypress"/>

import { loginPage } from "../page_objects/loginPage"

describe('login POM', () => {

    before('visit login page', () => {
        cy.visit('/login')
        cy.url().should('contains', '/login')
       
    })

    it('login with valid data', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as("succesfulLogin")
        loginPage.loginHeading.should('have.text', 'Log in with your existing account')
        loginPage.login('jelenatest11@gmail.com', '2005makstanja')
        cy.url().should('not.include', '/login')

        cy.wait('@succesfulLogin').then(interception => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.statusMessage).eq('OK')
        })
    })
   
})
