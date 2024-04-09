/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($input: LoginInput) {\n    login(input: $input) {\n      id\n      accessToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation CreateSubject($createSubjectInput: SubjectInput) {\n    createSubject(createSubjectInput: $createSubjectInput) {\n      id\n    }\n  }\n": types.CreateSubjectDocument,
    "\n  mutation DeleteSubject($deleteSubjectId: ID!) {\n    deleteSubject(id: $deleteSubjectId) {\n      isSuccess\n      message\n    }\n  }\n": types.DeleteSubjectDocument,
    "\n  mutation EditSubject($editSubjectId: ID!, $editSubjectInput: SubjectInput) {\n    editSubject(id: $editSubjectId, editSubjectInput: $editSubjectInput) {\n      isSuccess\n      message\n    }\n  }\n": types.EditSubjectDocument,
    "\n  mutation CreateTeacher($createTeacherInput: TeacherInput) {\n    createTeacher(createTeacherInput: $createTeacherInput) {\n      id\n    }\n  }\n": types.CreateTeacherDocument,
    "\n  mutation DeleteTeacher($deleteTeacherId: ID!) {\n    deleteTeacher(id: $deleteTeacherId) {\n      message\n      isSuccess\n    }\n  }\n": types.DeleteTeacherDocument,
    "\n  mutation EditTeacher($editTeacherId: ID!, $editTeacherInput: TeacherInput) {\n    editTeacher(id: $editTeacherId, editTeacherInput: $editTeacherInput) {\n      isSuccess\n      message\n    }\n  }\n": types.EditTeacherDocument,
    "\n  query GetSubjects {\n    subjects: getSubjects {\n      id\n      name\n      teacherId\n    }\n  }\n": types.GetSubjectsDocument,
    "\n  query GetTeachers {\n    teachers: getTeachers {\n      id\n      firstName\n      lastName\n    }\n  }\n": types.GetTeachersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($input: LoginInput) {\n    login(input: $input) {\n      id\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Login($input: LoginInput) {\n    login(input: $input) {\n      id\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateSubject($createSubjectInput: SubjectInput) {\n    createSubject(createSubjectInput: $createSubjectInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSubject($createSubjectInput: SubjectInput) {\n    createSubject(createSubjectInput: $createSubjectInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteSubject($deleteSubjectId: ID!) {\n    deleteSubject(id: $deleteSubjectId) {\n      isSuccess\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteSubject($deleteSubjectId: ID!) {\n    deleteSubject(id: $deleteSubjectId) {\n      isSuccess\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditSubject($editSubjectId: ID!, $editSubjectInput: SubjectInput) {\n    editSubject(id: $editSubjectId, editSubjectInput: $editSubjectInput) {\n      isSuccess\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation EditSubject($editSubjectId: ID!, $editSubjectInput: SubjectInput) {\n    editSubject(id: $editSubjectId, editSubjectInput: $editSubjectInput) {\n      isSuccess\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTeacher($createTeacherInput: TeacherInput) {\n    createTeacher(createTeacherInput: $createTeacherInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTeacher($createTeacherInput: TeacherInput) {\n    createTeacher(createTeacherInput: $createTeacherInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteTeacher($deleteTeacherId: ID!) {\n    deleteTeacher(id: $deleteTeacherId) {\n      message\n      isSuccess\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteTeacher($deleteTeacherId: ID!) {\n    deleteTeacher(id: $deleteTeacherId) {\n      message\n      isSuccess\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditTeacher($editTeacherId: ID!, $editTeacherInput: TeacherInput) {\n    editTeacher(id: $editTeacherId, editTeacherInput: $editTeacherInput) {\n      isSuccess\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation EditTeacher($editTeacherId: ID!, $editTeacherInput: TeacherInput) {\n    editTeacher(id: $editTeacherId, editTeacherInput: $editTeacherInput) {\n      isSuccess\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSubjects {\n    subjects: getSubjects {\n      id\n      name\n      teacherId\n    }\n  }\n"): (typeof documents)["\n  query GetSubjects {\n    subjects: getSubjects {\n      id\n      name\n      teacherId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTeachers {\n    teachers: getTeachers {\n      id\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  query GetTeachers {\n    teachers: getTeachers {\n      id\n      firstName\n      lastName\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;