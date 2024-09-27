# Cypress E2E Testing with TypeScript Setup

This project uses **Cypress** for End-to-End (E2E) testing along with **TypeScript** for a Next.js application. This setup also includes testing utilities such as **@types/cypress**, **@testing-library/cypress**, and the **cypress-mochawesome-reporter** for generating detailed reports.

## Prerequisites

Ensure you have the following installed before proceeding:

- Node.js (>= 14.x)
- npm, yarn, or pnpm (any package manager of your choice)
- Next.js project already setup with TypeScript

## Installation

To install Cypress and related dependencies as dev dependencies, run one of the following commands based on your package manager:

<details>
  <summary>Installation Commands (Click to Expand)</summary>

#### npm

```bash
npm install cypress @types/cypress @testing-library/cypress cypress-mochawesome-reporter --save-dev
```

yarn

```bash
yarn add cypress @types/cypress @testing-library/cypress cypress-mochawesome-reporter --dev
```

pnpm

```bash
pnpm add cypress @types/cypress @testing-library/cypress cypress-mochawesome-reporter --save-dev
```

</details>

## This will install:

Cypress for E2E testing

@types/cypress for TypeScript support

@testing-library/cypress for using Testing Library utilities within Cypress

cypress-mochawesome-reporter for generating reports

## Project Structure

```.
├── cypress
│   ├── e2e
│   │   └── home.cy.ts   # Contains E2E
│   ├── fixtures
│   │   └── user.json    # Contains mock
│   ├── support
│   │   ├── commands.ts  # Custom
│   │   └── e2e.ts     # Loads the
│── cypress.config.ts # Cypress
└── package.json
```

This `README.md` file provides clear steps on installation, project structure, configuration, and running tests, all while ensuring TypeScript is properly integrated with Cypress. You can modify or extend this based on your project-specific requirements.
