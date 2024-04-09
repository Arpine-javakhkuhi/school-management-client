import { Teacher } from "../__generated__/graphql";

export const subjectTeacher = (
  teachers: Teacher[],
  subjectTeacherId: string
) => {
  const subjectTeacher = teachers.find(
    (teacher: Teacher) => teacher.id === subjectTeacherId
  );

  return subjectTeacher
    ? `${subjectTeacher.firstName} ${subjectTeacher?.lastName}`
    : "";
};
