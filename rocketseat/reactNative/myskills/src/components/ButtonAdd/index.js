import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity
    style={styles.button}
      activeOpacity={0.7}
      onPress={ onPress }
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'

  }
})