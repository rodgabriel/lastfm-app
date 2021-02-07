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

    cy.get("input[id=artist]").type("Coldplay").type("{enter}");

    cy.url().should("include", "/artist=Coldplay");
  });

  it("testa busca por album", () => {
    cy.visit("/");

    cy.contains("Álbum").click();

    cy.get("input[id=artist]").type("Coldplay").type("{enter}");
    cy.get("input[id=album]").type("Parachutes").type("{enter}");

    cy.url().should("include", "/artist=Coldplay/album=Parachutes");
  });

  it("testa registro de usuario", () => {
    cy.visit("/");

    cy.get("button[id=login]").click();

    cy.url().should("include", "/login");

    cy.contains("Registre-se").click();

    cy.url().should("include", "/register");
    cy.get("input[id=name]").type("João da Silva");
    cy.get("input[id=email]").type("joao@email.com");
    cy.get("input[id=password]").type("12345");
    cy.get("input[id=confirmPassword]").type("12345");
    cy.get("button[id=registrar]").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("testa login e logout do usuário", () => {
    cy.visit("/");

    cy.get("button[id=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[id=email]").type("joao@email.com");
    cy.get("input[id=password]").type("12345").type("{enter}");
    cy.url().should("eq", "http://localhost:3000/");

    cy.get("label[id=dropdown-menu]").click();

    cy.get("div[id=logout]").click();
    cy.get("button[id=login]");
  });

  it("testa mensagem de erro ao tentar logar com infos incorretas", () => {
    cy.visit("/");

    cy.get("button[id=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[id=email]").type("joao@email.com");
    cy.get("input[id=password]").type("12345678").type("{enter}");
    cy.contains("Email ou senha inválidos.");
  });

  it("testa mensagem de erro caso email já esteja cadastrado", () => {
    cy.visit("/");

    cy.get("button[id=login]").click();

    cy.url().should("include", "/login");

    cy.contains("Registre-se").click();

    cy.url().should("include", "/register");
    cy.get("input[id=name]").type("joao da Silva");
    cy.get("input[id=email]").type("joao@email.com");
    cy.get("input[id=password]").type("12345");
    cy.get("input[id=confirmPassword]").type("12345");
    cy.get("button[id=registrar]").click();
    cy.contains("Email já cadastrado.");
  });
});
