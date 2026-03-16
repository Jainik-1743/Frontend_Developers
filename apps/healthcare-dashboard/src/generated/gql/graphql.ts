/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ClinicCapacity = {
  __typename?: "ClinicCapacity";
  availableBeds: Scalars["Int"]["output"];
  occupiedBeds: Scalars["Int"]["output"];
  totalBeds: Scalars["Int"]["output"];
};

export type Patient = {
  __typename?: "Patient";
  department: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getClinicCapacity: ClinicCapacity;
  getPatientById?: Maybe<Patient>;
  getPatients: Array<Patient>;
};

export type QueryGetPatientByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type GetPatientsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPatientsQuery = {
  __typename?: "Query";
  getPatients: Array<{
    __typename?: "Patient";
    id: string;
    name: string;
    status: string;
    department: string;
  }>;
};

export type GetClinicCapacityQueryVariables = Exact<{ [key: string]: never }>;

export type GetClinicCapacityQuery = {
  __typename?: "Query";
  getClinicCapacity: {
    __typename?: "ClinicCapacity";
    totalBeds: number;
    occupiedBeds: number;
    availableBeds: number;
  };
};

export const GetPatientsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPatients" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getPatients" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "department" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPatientsQuery, GetPatientsQueryVariables>;
export const GetClinicCapacityDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetClinicCapacity" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getClinicCapacity" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "totalBeds" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "occupiedBeds" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "availableBeds" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetClinicCapacityQuery,
  GetClinicCapacityQueryVariables
>;
