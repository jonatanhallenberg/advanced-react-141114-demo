/// <reference types="cypress" />

describe('accordion tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5174/accordion')
        cy.intercept('GET', 'https://fakestoreapi.com/products', {
            fixture: 'getProductsResponse.json'
        })
    })

    it('should have Öppna button when visiting page', () => {
        cy.getByTestId("toggle-btn").should('have.text', 'Öppna');
    })

    it('should show text when clicking button', () => {
        cy.getByTestId("toggle-btn").click();
        cy.getByTestId("accordion-content").should('be.visible');
    })

    it('should toggle button text when clicking', () => {
        const toggleBtn = cy.getByTestId("toggle-btn");
        toggleBtn.click();
        toggleBtn.should('have.text', 'Stäng');
    })

    it('should show product_1 wher toggle open', () => {
        cy.getByTestId("toggle-btn").click();
        cy.getByTestId("product_1").should('be.visible');
    })

})