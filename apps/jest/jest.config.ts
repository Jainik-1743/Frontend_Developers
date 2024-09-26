import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Record<string, unknown> = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(customJestConfig);
