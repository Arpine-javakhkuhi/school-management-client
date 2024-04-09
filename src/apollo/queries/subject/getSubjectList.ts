import { gql } from "@apollo/client";

export const GET_SUBJECTS_LIST = gql`
  query GetSubjects {
    subjects: getSubjects {
      id
      name
      teacherId
    }
  }
`;
