describe('Page', () => {
  it('visit root redirect to default lang', () => {
    cy.visit('/')
    cy.url().should('contain', '/en')
  })
})
