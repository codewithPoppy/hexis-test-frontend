import { gql } from "@apollo/client";

export const GET_MACROS = gql`
  query GetMacros($from: String!, $to: String!) {
    macros(from: $from, to: $to) {
      id
      createdAt: created_at
      calories
      carbs
      protein
      fat
      date
    }
  }
`;

export const ADD_MACRO = gql`
  mutation AddMacro($date: String!) {
    addMacro(date: $date) {
      id
      createdAt: created_at
      calories
      carbs
      protein
      fat
      date
    }
  }
`;

export const DELETE_MACRO = gql`
  mutation DeleteMacro($id: String!) {
    deleteMacro(id: $id)
  }
`;
