/* eslint-disable @typescript-eslint/no-namespace */
import "./commands.ts";
import "cypress-mochawesome-reporter/register";

// Augment the global Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}
