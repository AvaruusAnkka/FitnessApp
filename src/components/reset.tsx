import { useState, useContext } from 'react'
import { Button, View } from 'react-native'

import { PolarContext } from '../context/polarContext'
import IntakeStorage from '../utils/intakeStorage'

export default function Reset() {
  const [pressed, setPressed] = useState(false)
  const { reload } = useContext(PolarContext)

  return (
    <View style={{ justifyContent: 'center' }}>
      {pressed ? (
        <Button
          title='Reset'
          onPress={() => {
            IntakeStorage.clear()
            reload()
            setPressed(false)
          }}
        />
      ) : (
        <Button title='' onPress={() => setPressed(true)} />
      )}
    </View>
  )
}
