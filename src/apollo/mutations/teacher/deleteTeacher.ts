import { gql } from "@apollo/client";

export const DELETE_TEACHER = gql`
  mutation DeleteTeacher($deleteTeacherId: ID!) {
    deleteTeacher(id: $deleteTeacherId) {
      message
      isSuccess
    }
  }
`;
