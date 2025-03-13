import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaxCard = ({ name, amount, dueDate, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.amount}>R$ {amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.dueDate}>Vencimento: {dueDate}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#E74C3C',
  },
  dueDate: {
    color: '#7F8C8D',
    marginBottom: 4,
  },
  description: {
    color: '#34495E',
  },
});

export default TaxCard;