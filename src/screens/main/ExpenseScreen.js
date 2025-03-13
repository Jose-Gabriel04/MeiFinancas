import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TRANSACTION, GET_TRANSACTIONS } from '../../apollo/queries';
import TransactionForm from '../../components/forms/TransactionForm';

export default function ExpenseScreen() {
  const [createTransaction] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ 
      query: GET_TRANSACTIONS,
      variables: { type: 'EXPENSE' }
    }],
  });

  const { data } = useQuery(GET_TRANSACTIONS, {
    variables: { type: 'EXPENSE' }
  });

  const handleSubmit = async (values) => {
    await createTransaction({
      variables: {
        input: {
          ...values,
          type: 'EXPENSE',
          amount: parseFloat(values.amount),
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <TransactionForm onSubmit={handleSubmit} />
      
      <FlatList
        data={data?.transactions || []}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.amount}>- R$ {item.amount.toFixed(2)}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}