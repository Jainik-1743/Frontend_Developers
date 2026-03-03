describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should successfully log in with valid credentials", () => {
    cy.fixture("user").then((user) => {
      return cy.login(user.email, user.password); // Assuming the `login` command is defined correctly
    });
    cy.contains("Successfully Logged In!").should("be.visible"); // This should pass
  });

  it("should fail to log in with invalid credentials", () => {
    cy.fixture("user").then(() => {
      return cy.login("invaliduser@example.com", "wrongpassword"); // Invalid credentials
    });
    cy.contains("Successfully Logged In!").should("not.exist"); // Verify login didn't succeed
  });
});
