import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IncomeScreen, ExpenseScreen, TaxesScreen } from '../screens/Main';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Income" 
        component={IncomeScreen}
        options={{ title: 'Receitas' }}
      />
      <Tab.Screen 
        name="Expense" 
        component={ExpenseScreen}
        options={{ title: 'Despesas' }}
      />
      <Tab.Screen 
        name="Taxes" 
        component={TaxesScreen}
        options={{ title: 'Impostos' }}
      />
    </Tab.Navigator>
  );
}
