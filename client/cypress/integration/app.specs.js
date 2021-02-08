describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("limpa o banco de dados para poder realizar os testes seguintes conforme esperado", () => {
    cy.request("POST", "http://localhost:5000/clearDatabase");
  });

  it("testa busca por artista", () => {
    cy.visit("/");

    cy.contains("Artista").click();

    cy.get("input[data-cy=artist]").type("Coldplay").type("{enter}");

    cy.url().should("include", "/artist=Coldplay");
  });

  it("testa busca por album", () => {
    cy.visit("/");

    cy.contains("Álbum").click();

    cy.get("input[data-cy=artist]").type("Coldplay").type("{enter}");
    cy.get("input[data-cy=album]").type("Parachutes").type("{enter}");

    cy.url().should("include", "/artist=Coldplay/album=Parachutes");
  });

  it("testa registro de usuario", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.contains("Registre-se").click();

    cy.url().should("include", "/register");
    cy.get("input[data-cy=name]").type("João da Silva");
    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345");
    cy.get("input[data-cy=confirmPassword]").type("12345");
    cy.get("button[data-cy=registrar]").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("testa login e logout do usuário", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345").type("{enter}");
    cy.url().should("eq", "http://localhost:3000/");

    cy.get("label[data-cy=dropdown-menu]").click();

    cy.get("div[data-cy=logout]").click();
    cy.get("button[data-cy=login]");
  });

  it("testa mensagem de erro ao tentar logar com infos incorretas", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345678").type("{enter}");
    cy.contains("Email ou senha inválidos.");
  });

  it("testa mensagem de erro caso email já esteja cadastrado", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.contains("Registre-se").click();

    cy.url().should("include", "/register");
    cy.get("input[data-cy=name]").type("joao da Silva");
    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345");
    cy.get("input[data-cy=confirmPassword]").type("12345");
    cy.get("button[data-cy=registrar]").click();
    cy.contains("Email já cadastrado.");
  });
});
