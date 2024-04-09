import { gql } from "@apollo/client";

export const EDIT_SUBJECT = gql`
  mutation EditSubject($editSubjectId: ID!, $editSubjectInput: SubjectInput) {
    editSubject(id: $editSubjectId, editSubjectInput: $editSubjectInput) {
      isSuccess
      message
    }
  }
`;
