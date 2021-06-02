/// <reference types="cypress" />

const loginPageTitle = 'Testers Hotel'
const usernameTextfield = ':nth-child(1)' > 'input'
const passwordTextfield = ':nth-child(2)' > 'input'
const submitBtn = '.btn'
const formLabel = 'Login'

function checkLoginPageTitle(cy){
    cy.title().should('eq', loginPageTitle)
}

function performValidLogin(cy, username, password, confirmationContent){
    cy.contains(formLabel)
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(submitBtn).click()
    cy.contains(confirmationContent)
}

module.exports = {
    checkLoginPageTitle,
    performValidLogin
}
