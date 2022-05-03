import React, { useState } from 'react';
import { 
  Platform,
  StyleSheet, 
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from 'react-native';

export const Home = () => {

  const [ newSkill, setNewSkill ] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hy Philipe </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555555'
        onChangeText={setNewSkill}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7} >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>
        { newSkill }
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 50,
    paddingVertical: 70
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius:7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',

  }
})