import { client } from '../apollo/client';
import { CREATE_TRANSACTION, GET_TRANSACTIONS } from '../apollo/queries';

export const TransactionService = {
  create: async (input) => {
    const { data } = await client.mutate({
      mutation: CREATE_TRANSACTION,
      variables: { input }
    });
    return data.createTransaction;
  },

  getByType: async (type) => {
    const { data } = await client.query({
      query: GET_TRANSACTIONS,
      variables: { type },
      fetchPolicy: 'network-only'
    });
    return data.transactions;
  }
};