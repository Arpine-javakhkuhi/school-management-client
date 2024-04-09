import { gql } from "@apollo/client";

export const CREATE_TEACHER = gql`
  mutation CreateTeacher($createTeacherInput: TeacherInput) {
    createTeacher(createTeacherInput: $createTeacherInput) {
      id
    }
  }
`;
