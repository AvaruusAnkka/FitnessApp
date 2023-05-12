import React, { useState, useContext, useRef } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native'

import IntakeStorage from '../utils/intakeStorage'
import { PolarContext } from '../context/polarContext'

const Enter: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [food, setFood] = useState<string>('')
  const [calories, setCalories] = useState<string>('')
  const { reload } = useContext(PolarContext)
  const caloriesInputRef = useRef<TextInput | null>(null)

  const saveData = (): void => {
    if (food !== '' && calories !== '') {
      let currentData = IntakeStorage.get()
      currentData.push({ date: Date.now(), food: food, calories: calories })
      IntakeStorage.store(currentData)

      setCalories('')
      setFood('')
      reload()
    }
    setExpanded(false)
  }

  return (
    <>
      {expanded ? (
        <View style={styles.main}>
          <TextInput
            autoFocus={true}
            onChangeText={(text) => setFood(text)}
            onSubmitEditing={() => caloriesInputRef.current?.focus()}
            placeholder='What did you eat?'
            returnKeyType='next'
            style={styles.input}
            value={food}
          />
          <TextInput
            keyboardType='number-pad'
            onChangeText={(text) => setCalories(text)}
            onSubmitEditing={() => saveData()}
            placeholder='Enter calories'
            ref={caloriesInputRef}
            returnKeyType='done'
            style={styles.input}
            value={calories}
          />
          <Button title='Submit' onPress={() => saveData()} />
        </View>
      ) : (
        <TouchableOpacity style={styles.main} onPress={() => setExpanded(true)}>
          <Text style={{ fontSize: 40 }}>Enter calories</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF0',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    fontSize: 20,
    alignItems: 'center',
  },
})

export default Enter
