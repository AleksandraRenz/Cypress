describe('template spec', () => {
  it('passes', () => {
    //Visit this page (https://example.cypress.io/commands/actions).
    cy.visit('https://example.cypress.io/commands/actions')
    //Query for the email input field.
    cy.get('.action-email')
    //Type your email address.
    .type('ec2028534@edinburghcollege.ac.com')
    //-> Assert about the content on the page.

  })
})