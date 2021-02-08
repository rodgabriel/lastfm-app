describe("Cypress", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("Limpa o banco de dados para poder realizar os testes seguintes conforme esperado", () => {
    cy.request("POST", "http://localhost:5000/clearDatabase");
  });

  it("Usuário não-logado faz busca por artista", () => {
    cy.visit("/");

    cy.contains("Artista").click();

    cy.get("input[data-cy=artist]").type("Coldplay").type("{enter}");

    cy.url().should("include", "/artist=Coldplay");
  });

  it("Usuário não-logado faz busca por album", () => {
    cy.visit("/");

    cy.contains("Álbum").click();

    cy.get("input[data-cy=artist]").type("Coldplay").type("{enter}");
    cy.get("input[data-cy=album]").type("Parachutes").type("{enter}");

    cy.url().should("include", "/artist=Coldplay/album=Parachutes");
  });

  it("Faz registro de usuario", () => {
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

  it("Usuário faz login e logout", () => {
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

  it("Mostra mensagem de erro ao usuário ao tentar logar com infos incorretas", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345678").type("{enter}");
    cy.contains("Email ou senha inválidos.");
  });

  it("Mostra mensagem de erro quando o usuário tenta registrar um email já esteja cadastrado", () => {
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

  it("Usuário faz login, faz buscas e consulta seu histórico de pesquisas", () => {
    cy.visit("/");

    cy.get("button[data-cy=login]").click();

    cy.url().should("include", "/login");

    cy.get("input[data-cy=email]").type("joao@email.com");
    cy.get("input[data-cy=password]").type("12345").type("{enter}");
    cy.url().should("eq", "http://localhost:3000/");

    // Pesquisa o artista Coldplay
    cy.visit("/");
    cy.contains("Artista").click();
    cy.get("input[data-cy=artist]").type("Coldplay").type("{enter}");
    cy.url().should("include", "/artist=Coldplay");

    // Pesquisa a artista Adele
    cy.visit("/");
    cy.contains("Artista").click();
    cy.get("input[data-cy=artist]").type("Adele").type("{enter}");
    cy.url().should("include", "/artist=Adele");

    // Checa página do Histórico de Pesquisas
    cy.visit("/pesquisas");
  });
});
