/// <reference types="cypress" />

import * as loginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"

describe("Testsuite", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        //cy.visit("/")
        loginPage.confirmHeader("Login")
        loginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    });

    it("Login and logout", () => {
        indexPage.logoutUser("Login")
    });

    it.only("Create client and verify", () => {
        indexPage.viewClients("Clients")
    });
});