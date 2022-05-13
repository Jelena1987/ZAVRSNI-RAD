///<reference types="Cypress"/>

class DeleteBoard {
    get deleteBtn() {
        cy.get('button[class="vs-c-btn--spaced"]').first()
    }

    get yesBtn() {
        cy.get('.el-buton--success').last()
    }

    delete() {
        this.deleteBtn.click()
        this.yesBtn.click()
     }
}

export const deleteBoard = new DeleteBoard();