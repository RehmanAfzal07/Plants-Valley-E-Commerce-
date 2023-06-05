import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Payment = ({ totalPrice }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlePayment = (paymentMethod) => {
    // Logic for processing the payment based on the selected paymentMethod
    switch (paymentMethod) {
      case 'creditCard':
        // Handle credit card payment
        console.log('Processing credit card payment');
        break;
      case 'debitCard':
        // Handle debit card payment
        console.log('Processing debit card payment');
        break;
      case 'paypal':
        // Handle PayPal payment
        console.log('Processing PayPal payment');
        break;
      case 'applePay':
        // Handle Apple Pay payment
        console.log('Processing Apple Pay payment');
        break;
      case 'googlePay':
        // Handle Google Pay payment
        console.log('Processing Google Pay payment');
        break;
      default:
        // Invalid payment method
        console.log('Invalid payment method');
        break;
    }

    // Close the payment menu
    toggleMenu();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed Payment</Text>
      </TouchableOpacity>
      <Modal visible={showMenu} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />
          <View style={styles.menu}>
            <TouchableOpacity style={styles.button} onPress={() => handlePayment('creditCard')}>
              <Text style={styles.buttonText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePayment('debitCard')}>
              <Text style={styles.buttonText}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePayment('paypal')}>
              <Text style={styles.buttonText}>PayPal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePayment('applePay')}>
              <Text style={styles.buttonText}>Apple Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePayment('googlePay')}>
              <Text style={styles.buttonText}>Google Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:-20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#349302',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  proceedText: {
    fontSize: 18,
    fontWeight:400,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#349302',
    padding: 15,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
    },
    });
    
    export default Payment;