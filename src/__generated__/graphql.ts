/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LoggedUser = {
  __typename?: 'LoggedUser';
  accessToken: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSubject: Subject;
  createTeacher: Teacher;
  deleteSubject?: Maybe<SubjectSuccess>;
  deleteTeacher?: Maybe<TeacherSuccess>;
  editSubject?: Maybe<SubjectSuccess>;
  editTeacher?: Maybe<TeacherSuccess>;
  login?: Maybe<LoggedUser>;
};


export type MutationCreateSubjectArgs = {
  createSubjectInput?: InputMaybe<SubjectInput>;
};


export type MutationCreateTeacherArgs = {
  createTeacherInput?: InputMaybe<TeacherInput>;
};


export type MutationDeleteSubjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditSubjectArgs = {
  editSubjectInput?: InputMaybe<SubjectInput>;
  id: Scalars['ID']['input'];
};


export type MutationEditTeacherArgs = {
  editTeacherInput?: InputMaybe<TeacherInput>;
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};

export type Query = {
  __typename?: 'Query';
  getSubjects?: Maybe<Array<Maybe<Subject>>>;
  getTeachers?: Maybe<Array<Maybe<Teacher>>>;
  getUserById: User;
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  teacherId?: Maybe<Scalars['ID']['output']>;
};

export type SubjectInput = {
  name: Scalars['String']['input'];
  teacherId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubjectSuccess = {
  __typename?: 'SubjectSuccess';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
};

export type Teacher = {
  __typename?: 'Teacher';
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type TeacherInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type TeacherSuccess = {
  __typename?: 'TeacherSuccess';
  isSuccess?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoggedUser', id?: string | null, accessToken: string } | null };

export type CreateSubjectMutationVariables = Exact<{
  createSubjectInput?: InputMaybe<SubjectInput>;
}>;


export type CreateSubjectMutation = { __typename?: 'Mutation', createSubject: { __typename?: 'Subject', id: string } };

export type DeleteSubjectMutationVariables = Exact<{
  deleteSubjectId: Scalars['ID']['input'];
}>;


export type DeleteSubjectMutation = { __typename?: 'Mutation', deleteSubject?: { __typename?: 'SubjectSuccess', isSuccess?: boolean | null, message: string } | null };

export type EditSubjectMutationVariables = Exact<{
  editSubjectId: Scalars['ID']['input'];
  editSubjectInput?: InputMaybe<SubjectInput>;
}>;


export type EditSubjectMutation = { __typename?: 'Mutation', editSubject?: { __typename?: 'SubjectSuccess', isSuccess?: boolean | null, message: string } | null };

export type CreateTeacherMutationVariables = Exact<{
  createTeacherInput?: InputMaybe<TeacherInput>;
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', createTeacher: { __typename?: 'Teacher', id: string } };

export type DeleteTeacherMutationVariables = Exact<{
  deleteTeacherId: Scalars['ID']['input'];
}>;


export type DeleteTeacherMutation = { __typename?: 'Mutation', deleteTeacher?: { __typename?: 'TeacherSuccess', message: string, isSuccess?: boolean | null } | null };

export type EditTeacherMutationVariables = Exact<{
  editTeacherId: Scalars['ID']['input'];
  editTeacherInput?: InputMaybe<TeacherInput>;
}>;


export type EditTeacherMutation = { __typename?: 'Mutation', editTeacher?: { __typename?: 'TeacherSuccess', isSuccess?: boolean | null, message: string } | null };

export type GetSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubjectsQuery = { __typename?: 'Query', subjects?: Array<{ __typename?: 'Subject', id: string, name: string, teacherId?: string | null } | null> | null };

export type GetTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeachersQuery = { __typename?: 'Query', teachers?: Array<{ __typename?: 'Teacher', id: string, firstName: string, lastName: string } | null> | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const DeleteSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteSubjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const EditSubjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditSubject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editSubject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editSubjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editSubjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<EditSubjectMutation, EditSubjectMutationVariables>;
export const CreateTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTeacherInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TeacherInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTeacherInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTeacherInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const DeleteTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteTeacherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteTeacherId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}}]}}]}}]} as unknown as DocumentNode<DeleteTeacherMutation, DeleteTeacherMutationVariables>;
export const EditTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTeacherId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editTeacherInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TeacherInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editTeacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTeacherId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editTeacherInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editTeacherInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<EditTeacherMutation, EditTeacherMutationVariables>;
export const GetSubjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"subjects"},"name":{"kind":"Name","value":"getSubjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"teacherId"}}]}}]}}]} as unknown as DocumentNode<GetSubjectsQuery, GetSubjectsQueryVariables>;
export const GetTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"getTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetTeachersQuery, GetTeachersQueryVariables>;