import { gql } from "@apollo/client";

export const GET_TEACHERS_LIST = gql`
  query GetTeachers {
    teachers: getTeachers {
      id
      firstName
      lastName
    }
  }
`;
