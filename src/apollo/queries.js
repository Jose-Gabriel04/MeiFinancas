import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: TransactionInput!) {
    createTransaction(input: $input) {
      id
      amount
      description
      type
      createdAt
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query GetTransactions($type: TransactionType!) {
    transactions(type: $type) {
      id
      amount
      description
      createdAt
    }
  }
`;