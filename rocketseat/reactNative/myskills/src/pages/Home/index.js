import React, { useState } from 'react';
import { 
  Platform,
  StyleSheet, 
  View, 
  Text, 
  TextInput
} from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { SkillCard } from '../../components/SkillCard';


export const Home = () => {

  const [ newSkill, setNewSkill ] = useState('')
  const [ mySkills, setMySkills ] = useState([])

  const handleAddNewSkill = () => {
    //setMySkills([...mySkills, newSkill])
    setMySkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hy Philipe </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor='#555555'
        onChangeText={setNewSkill}
      />

      <ButtonAdd onPress={handleAddNewSkill} />


      <Text style={[styles.title, { marginTop: 50 }]}>
        Skills
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard skill={ skill }/>
        ))
      }

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
  }
})