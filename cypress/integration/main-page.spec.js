describe('test main page', () => {
  it('should be visible', () => {
    cy.visit('/');
    cy.get('h1').should('exist').and('be.visible');
    cy.get('#searchfield').should('exist').and('be.visible');
    cy.get('[data-cy=filters]').should('exist').and('be.visible');
    cy.get('[data-cy=filters]').children().should('have.length', 7);
    cy.get('[data-cy=main-page-cars]').should('exist').and('be.visible');
    cy.get('[data-cy=main-page-cars]').children().should('have.length', 12);
  });
 
});
