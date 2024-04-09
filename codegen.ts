import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:5050",
  // schema: [
  //   {
  //     "http://localhost:5050": {
  //       headers: {
  //         Authorization:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyNjQ1NTY0LCJleHAiOjE3MTI2NDczNjR9.T8O91a9rAsbgZ7glpAzstKgXsASqKRvPuwx3EqbGfpE",
  //       },
  //     },
  //   },
  // ],
  documents: ["src/apollo/**/*.ts"],
  // documents: "src/**/*.graphql",
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
