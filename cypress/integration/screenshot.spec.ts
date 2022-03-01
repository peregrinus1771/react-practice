/* eslint-disable jest/expect-expect */
function laptopScreenshot() {
    cy.screenshot()
}
function mobileScreenshot() {
    cy.viewport('iphone-x')
    cy.screenshot()
}
function screenshot() {
    laptopScreenshot()
    mobileScreenshot()
}

describe('screenshot', () => {
    it('top page', () => {
        cy.visit('/')
        screenshot()
    })
    it('article page', () => {
        cy.visit('/article')
        screenshot()
    })
    it('tag page', () => {
        cy.visit('/tag')
        screenshot()
    })
    it('category page', () => {
        cy.visit('/category')
        screenshot()
    })
    it('search page', () => {
        cy.visit('/search')
        screenshot()
    })
})
