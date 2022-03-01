/* eslint-disable jest/expect-expect */
function navigate(testId: string, path: string) {
    cy.get(`[data-testid=${testId}]`).click({ multiple: true })
    cy.url().should('include', path)
}

describe('Navigation in the top page', () => {
    beforeEach('Visit the top page', () => {
        cy.visit('/')
    })

    describe('Header link', () => {
        it('navigate to the top page', () => {
            navigate('header-home-link', '/')
        })
    })

    describe('Post link', () => {
        it('navigate to the tag page', () => {
            navigate('post-tag-link', '/tag')
        }),
            it('navigate to the category page', () => {
                navigate('post-category-link', '/category')
            })
        describe('navigate to the article page', () => {
            it('From title of article', () => {
                navigate('post-article-title-link', '/article')
            }),
                it('From read more of article', () => {
                    navigate('post-article-readMore-link', '/article')
                })
        })

        describe('Search link', () => {
            it('navigate to the search page', () => {
                cy.get('[data-testid="search-input"]')
                    .type('React')
                    .type('{enter}')
                cy.get('[data-testid="search-input"]').then(($input) => {
                    const query = $input.val()

                    cy.url().should('include', `/search?q=${query}`)
                })
            })
        })
    })
})
