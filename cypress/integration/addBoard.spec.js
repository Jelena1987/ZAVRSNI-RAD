/// <reference types="Cypress"/>

import{addBoard} from "../page_objects/addBoard"

describe('add board', () => {

    before('login', () => {
        cy.loginViaBackend()
        cy.visit('/my-organizations')
        cy.url().should('include', '/my-organizations')
    })

    it('add new board', () => {
        addBoard.addBoard(
            'Zavrsni rad'
        )
    })

    })
  

