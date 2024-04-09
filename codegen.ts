import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "http://localhost:5050",
  schema: [
    {
      "http://localhost:5050": {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyNjkxNjgxLCJleHAiOjE3MTI2OTM0ODF9.luqnHCtwkcR6XpjeXsF_jP3mQqPAw2U5ZCxEnS-81UA",
        },
      },
    },
  ],
  documents: ["src/apollo/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  // ignoreNoDocuments: true,
};

export default config;
