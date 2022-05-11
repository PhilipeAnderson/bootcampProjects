import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        { skill }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#1F1E25'
  },
  textSkill: {
    padding: 10,
    fontSize: 20,
    color: '#FFFFFF'

  }
})
