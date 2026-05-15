/* global cy */

describe('Pokedex App', () => {
    it('should display the pokemon list', () => {
        cy.visit('http://localhost:8080')
        cy.contains('pikachu')
    })
})