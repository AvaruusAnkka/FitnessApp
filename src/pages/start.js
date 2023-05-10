import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

function checkSwitch(param) {
  switch (param) {
    case '1':
      this.ONE()
      break

    case '1.2':
      this.TWO()
      break

    case '1.375':
      this.THREE()
      break

    case '1.55':
      this.FOUR()
      break
    case '1.725':
      this.FIVE()
      break
    case '1.9':
      this.SIX()
      break

    default:
      Alert.alert('Err')
  }
}
ONE = () => {
  Alert.alert('You are dead')
}
TWO = () => {
  Alert.alert(
    'Sedentary',
    'If you’re sedentary, your daily activities include: \n- Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.\n No moderate of vigorous activities.\n- Unless you do at least 30 minutes per day of intentional exercise, you are considered sedentary. \n - Spending most of the day sitting (e.g. bank teller, desk job)'
  )
}
THREE = () => {
  Alert.alert(
    'Lightly Active',
    'If you’re lightly active, your daily activities include:  \n- Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.\n - Daily exercise that is equal to walking for 30 minutes at 4mph.  For an adult of average weight, this amount of exercise will burn about 130-160 additional calories. \n - More intense exercise can be performed for less time to achieve the same goal.  For example, 15-20 minutes of vigorous activity, such as aerobics, skiing or jogging on a daily basis would put you in this category. \n - Spending a good part of the day on your feet (e.g. teacher, salesman)'
  )
}
FOUR = () => {
  Alert.alert(
    'Active',
    'If you’re active, your daily activities include:\n- Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.\n - Daily exercise that is equal to walking for 1 hour and 45 minutes at 4mph.  For an adult of average weight, this amount of exercise will burn about 470-580 additional calories. \n - More intense exercise can be performed for less time.  For example, jogging for 50 minutes per day. \n - Spending a good part of the day doing some physical activity (e.g. waitress, mailman)'
  )
}
FIVE = () => {
  Alert.alert(
    'Active',
    'If you’re active, your daily activities include:\n- Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.\n - Daily exercise that is equal to walking for 1 hour and 45 minutes at 4mph.  For an adult of average weight, this amount of exercise will burn about 470-580 additional calories. \n - More intense exercise can be performed for less time.  For example, jogging for 50 minutes per day. \n - Spending a good part of the day doing some physical activity (e.g. waitress, mailman)'
  )
}
SIX = () => {
  Alert.alert(
    'Active',
    'If you’re active, your daily activities include:\n- Activities of daily living only, such as shopping, cleaning, watering plants, taking out the trash, walking the dog, mowing the lawn and gardening.\n - Daily exercise that is equal to walking for 1 hour and 45 minutes at 4mph.  For an adult of average weight, this amount of exercise will burn about 470-580 additional calories. \n - More intense exercise can be performed for less time.  For example, jogging for 50 minutes per day. \n - Spending a good part of the day doing some physical activity (e.g. waitress, mailman)'
  )
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text')
  const [textAge, onChangeAge] = React.useState('')
  const [textHeight, onChangeHeight] = React.useState('')
  const [textWeight, onChangeWeight] = React.useState('')
  const [selectedLanguage, setSelectedLanguage] = React.useState()
  const [selectedActivity, setSelectedActivity] = React.useState()

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        backgroundColor='#FFFFFF'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={textAge}
        placeholder='How old are you?'
        keyboardType='numeric'
        backgroundColor='#FFFFFF'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeHeight}
        value={textHeight}
        placeholder='How tall are you (cm)? '
        keyboardType='numeric'
        backgroundColor='#FFFFFF'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeWeight}
        value={textWeight}
        placeholder='How much you weight? (Kg)'
        keyboardType='numeric'
        backgroundColor='#FFFFFF'
      />

      <View style={styles.column}>
        <Picker
          style={styles.choose}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label='Male' value='male' />
          <Picker.Item label='Female' value='female' />
        </Picker>
        <View></View>
      </View>
      <View style={styles.row}>
        <Picker
          style={styles.choose}
          selectedValue={selectedActivity}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedActivity(itemValue)
          }
        >
          <Picker.Item label='Resting' value='1' />
          <Picker.Item label='Sedentary' value='1.2' />
          <Picker.Item label='Light' value='1.375' />
          <Picker.Item label='Moderate' value='1.55' />
          <Picker.Item label='Active' value='1.725' />
          <Picker.Item label='Very activity' value='1.9' />
        </Picker>
        <TouchableOpacity
          onPress={() => checkSwitch(selectedActivity)}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text>INFO</Text>
        </TouchableOpacity>
      </View>
      <Text>Hello, world!</Text>

      <Button title='Save' onPress={() => Alert.alert('Button pressed')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  label: {
    margin: 8,
  },
  buttLay: {
    flexDirection: 'row',
    left: 100,
  },
  background: {
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  choose: {
    flex: 3,
    backgroundColor: 'red',
    height: 50,
  },
  row: {
    paddingTop: 10,
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    height: 50,
  },

  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    backgroundColor: 'grey',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  label: {
    margin: 8,
  },
  buttLay: {
    flexDirection: 'row',
    left: 100,
  },
  button: {
    flex: 1,
    width: '80%',
    height: 50,
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
})

export default TextInputExample
