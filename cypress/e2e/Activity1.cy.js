describe('template spec', () => {
  it('passes', () => {
    //Visit this page (https://example.cypress.io).
    cy.visit('https://example.cypress.io')
    //Query for an element.
    cy.get('a[href*="github.com"]').contains('GitHub')
    //Interact with that element.
    .click()
    //->Assert about the content on the page.

  })
})