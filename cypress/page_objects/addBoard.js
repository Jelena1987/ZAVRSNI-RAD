///<reference types="Cypress"/>

class AddBoard {

    get addNewBoardBtn() {
        return cy.get('li[title="Add new Board"]').first()
    }

    get boardTitle() {
        return cy.get('input[type="text"]').last();
    }

    get BoardTypeBtn() {
        return cy.get('span[class="vs-c-radio-check"]').last();
    }

    get nextBtn() {
        return cy.get('button[type="button"]').last();
    }

    addBoard(title) {
        this.addNewBoardBtn.click()
        this.boardTitle.type(title)
        this.nextBtn.click()
        this.BoardTypeBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
    }
}

export const addBoard  = new AddBoard();