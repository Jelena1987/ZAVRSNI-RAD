///<reference types="Cypress"/>

import {deleteBoard} from "../page_objects/deleteBoard"
import {addBoard} from "../page_objects/addBoard"

describe('delete board', () => {

    before('login', () => {
        cy.loginViaBackend()
        cy.visit('/boards/7933/settings')
        cy.url().should('include', '/boards/7933/settings')
    })

    it('deleteBoard', () => {
        deleteBoard.delete(
            
        )

    })

})