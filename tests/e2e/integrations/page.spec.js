describe('Page', () => {
  it('visit root redirect to default lang', () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.url().should('contain', '/en')
  })
})
