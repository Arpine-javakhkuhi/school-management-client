import { gql } from "@apollo/client";

export const CREATE_SUBJECT = gql`
  mutation CreateSubject($createSubjectInput: SubjectInput) {
    createSubject(createSubjectInput: $createSubjectInput) {
      id
    }
  }
`;
