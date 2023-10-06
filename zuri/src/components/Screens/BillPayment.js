import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BillPaymentsScreen = () => {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const makePayment = () => {
    // Implement logic to make a bill payment
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bill Payments</Text>
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <Text>Recurring Payment</Text>
        <Button
          title={isRecurring ? 'On' : 'Off'}
          onPress={() => setIsRecurring(!isRecurring)}
        />
      </View>
      <Button title="Make Payment" onPress={makePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default BillPaymentsScreen;
