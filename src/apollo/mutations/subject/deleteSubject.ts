import { gql } from "@apollo/client";

export const DELETE_SUBJECT = gql`
  mutation DeleteSubject($deleteSubjectId: ID!) {
    deleteSubject(id: $deleteSubjectId) {
      isSuccess
      message
    }
  }
`;
