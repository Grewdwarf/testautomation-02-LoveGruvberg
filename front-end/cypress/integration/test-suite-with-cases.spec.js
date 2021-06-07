/// <reference types="cypress" />

describe('Test-suite', () => {
    it('TC01 - Perform valid login', () =>{
        cy.visit('http://localhost:3000/login')
        cy.title().should('eq', 'Testers Hotel')
        cy.contains('Login')
        cy.log('Asserted that the login string/label exists on this specific page')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('Test case 2', () => {
        cy.log('test case 2')
    })
    
    it('Test case 3', () => {
        cy.log('test case 3')
    })

    it('Test case 4', () => {
        cy.log('test case 4')
    })

    it('Test case 5', () => {
        cy.log('test case 5')
    })

    it('Test case 6', () => {
        cy.log('test case 6')
    })

    it('Test case 7', () => {
        cy.log('test case 7')
    })

    it('Test case 8', () => {
        cy.log('test case 8')
    })

    it('Test case 9', () => {
        cy.log('test case 9')
    })

    it('Test case 10', () => {
        cy.log('test case 10')
    })
})