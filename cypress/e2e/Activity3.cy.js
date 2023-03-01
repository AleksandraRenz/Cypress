describe('template spec', () => {
  it('passes', () => {
    //Visit this page (https://example.cypress.io/commands/actions).
    cy.visit('example.cypress.io/commands/actions')
    //Query for the action button with a class ".action-btn" and click on it.
    cy.get(".action-btn")
    .click()

    //Query for the element with an id "#action-canvas" and click on it.
    cy.get("#action-canvas")
    .click()

    //Query for the element with an id "#action-canvas" and click on the "topLeft".
    cy.get("#action-canvas")
    .click("topLeft")
    
    //Query for the element with an id "#action-canvas" and click on the "bottomRight".
    cy.get("#action-canvas")
    .click("bottomRight")
  })
})