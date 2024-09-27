// cypress/support/commands.ts
Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/");
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
