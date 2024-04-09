import { gql } from "@apollo/client";

export const EDIT_TEACHER = gql`
  mutation EditTeacher($editTeacherId: ID!, $editTeacherInput: TeacherInput) {
    editTeacher(id: $editTeacherId, editTeacherInput: $editTeacherInput) {
      isSuccess
      message
    }
  }
`;
