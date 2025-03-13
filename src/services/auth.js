import { client } from '../apollo/client';
import { LOGIN } from '../apollo/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthService = {
  login: async (email, password) => {
    try {
      const { data } = await client.mutate({
        mutation: LOGIN,
        variables: { email, password }
      });
      
      await AsyncStorage.setItem('authToken', data.login.token);
      return data.login.user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      client.resetStore();
    } catch (error) {
      throw new Error('Erro ao fazer logout');
    }
  },

  getCurrentUser: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) return null;
      
      // Implementar query para obter usuário atual
      return { name: 'MEI User' }; // Exemplo
    } catch (error) {
      throw new Error(error.message);
    }
  }
};