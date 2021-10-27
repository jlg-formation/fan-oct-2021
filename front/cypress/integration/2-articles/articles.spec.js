describe("first test", () => {
  it("should add an article", () => {
    cy.visit("http://localhost:9000");

    const uuid = () => Cypress._.random(0, 1e6);
    const testname = `Testname${uuid()}`;

    cy.get("main").contains("Voir le stock").click();

    cy.log("should show the stocks");
    cy.get("main").contains("Ajouter").click();
    cy.get("main").get("input[name=name]").clear().type(testname);
    cy.get("main").get("input[name=price]").clear().type("1.45");
    cy.get("main").get("input[name=qty]").clear().type("345");

    const getArticleAlias = "getArticles";
    cy.intercept("GET", "/articles").as(getArticleAlias);
    cy.get("main").get("button").contains("Ajouter").click();
    cy.wait("@" + getArticleAlias);

    cy.get("main").contains(testname).click();
    cy.get("main").contains("Supprimer").click();
  });
});
