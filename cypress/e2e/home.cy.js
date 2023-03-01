describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.edinburghcollege.ac.uk/')
    //get the cookies btn close (class. id# like in CSS)
    cy.get("#ccc-close")
    //click on the at the centre of the element (default)
    .click()
    //
  })
})