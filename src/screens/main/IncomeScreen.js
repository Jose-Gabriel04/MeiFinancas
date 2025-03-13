import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TRANSACTION, GET_TRANSACTIONS } from '../../apollo/queries';
import TransactionForm from '../../components/forms/TransactionForm';

export default function IncomeScreen() {
  const [createTransaction] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: [{ 
      query: GET_TRANSACTIONS,
      variables: { type: 'INCOME' }
    }],
  });

  const { data } = useQuery(GET_TRANSACTIONS, {
    variables: { type: 'INCOME' }
  });

  const handleSubmit = async (values) => {
    await createTransaction({
      variables: {
        input: {
          ...values,
          type: 'INCOME',
          amount: parseFloat(values.amount),
        }
      }
    });
  };

  return (
    <View>
      <TransactionForm onSubmit={handleSubmit} />
      
      <FlatList
        data={data?.transactions || []}
        renderItem={({ item }) => (
          <View>
            <Text>R$ {item.amount}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}