/* eslint-disable no-undef */
describe("key functions test", () => {
  beforeEach(() => {
    // Visit the page
    cy.visit("/");
  });

  it("toggles item packed status", () => {
    // Find the item with the name "passport" and click on it
    cy.contains("li.item", "passport").click();

    // Check that the Counter component shows "2" items packed
    cy.get('[data-test="counter"]').should("contain", "2 /");

    // Then make the reverse check
    cy.contains("li.item", "passport").click();
    cy.get('[data-test="counter"]').should("contain", "1 /");
  });

  it("marks all items as packed", () => {
    // Find the button with the text "Mark all as packed" and click on it
    cy.contains("button", "Mark all as packed").click();

    // Check that all items in the ItemList are checked
    cy.get('li.item input[type="checkbox"]').each(($el) => {
      cy.wrap($el).should("be.checked");
    });

    // Check that the Counter component shows "3" items packed
    cy.get('[data-test="counter"]').should("contain", "3 /");
  });

  it("marks all items as unpacked", () => {
    // Find the button with the text "Mark all as unpacked" and click on it
    cy.contains("button", "Mark all as unpacked").click();

    // Check that all items in the ItemList are not checked
    cy.get('li.item input[type="checkbox"]').each(($el) => {
      cy.wrap($el).should("not.be.checked");
    });

    // Check that the Counter component shows "0" items packed
    cy.get('[data-test="counter"]').should("contain", "0 /");
  });

  it("resets item list to initial state", () => {
    // Find the button with the text "Reset to initial" and click on it
    cy.contains("button", "Reset to initial").click();

    // Check the initial state of the items
    cy.contains("li.item", "good mood")
      .find('input[type="checkbox"]')
      .should("be.checked");
    cy.get('[data-test="counter"]').should("contain", "1 /");
  });

  it("removes all items from the list", () => {
    // Check that the ItemList does not contain the text "Empty Packing List"
    cy.get('[data-test="item-list"]').should(
      "not.contain",
      "Empty Packing List"
    );

    // Find the button with the text "Remove all items" and click on it
    cy.contains("button", "Remove all items").click();

    // Check that the ItemList now contains the text "Empty Packing List"
    cy.get('[data-test="item-list"]').should("contain", "Empty Packing List");
  });

  it("adds 'laptop' to the list and removes it from the list", () => {
    // Type a new item name in the input
    cy.get('input[data-test="new-item-input"]').type("laptop");

    // Add new item to the list and check the counter and the item list to have been updated
    cy.contains("button", "Add to list").click();
    cy.get('[data-test="counter"]').should("contain", "1 / 4");
    cy.get('[data-test="item-list"]').should("contain", "laptop");

    // Remove "laptop" from the list and check the counter and the item list to have been updated
    cy.contains("li.item", "laptop")
      .find('button[data-test="remove-item-button"]')
      .click();

    cy.get('[data-test="counter"]').should("contain", "1 / 3");
    cy.get('[data-test="item-list"]').should("not.contain", "laptop");
  });
});
