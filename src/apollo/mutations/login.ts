import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($input: LoginInput) {
    login(input: $input) {
      id
      accessToken
    }
  }
`;
