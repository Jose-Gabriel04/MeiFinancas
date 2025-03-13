import { client } from '../apollo/client';
import { LOGIN } from '../apollo/queries';

export const AuthService = {
  login: async (email, password) => {
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: { email, password }
    });
    return data.login;
  },

  logout: async () => {
    await AsyncStorage.removeItem('authToken');
    client.resetStore();
  },
};