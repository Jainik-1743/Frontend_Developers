import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: "./src/graphql/queries/**/*.graphql",
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
