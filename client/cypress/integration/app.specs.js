describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("abre o app", () => {
    cy.visit("http://localhost:3000");
  });
});
