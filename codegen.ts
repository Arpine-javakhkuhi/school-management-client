import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:5050": {
        headers: {
          // here should be current access token
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEyNjk2MjU3LCJleHAiOjE3MTI2OTgwNTd9.sZEOLCOI_Hy-KPhxO7hIO_UIANHD-l-W7czjW6SPaG8",
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
};

export default config;
