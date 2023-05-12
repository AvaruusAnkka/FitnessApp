import { useContext } from 'react'
import { View } from 'react-native'
import { PolarContext } from '../../context/polarContext'
import Heart from './heart'

interface ExerciseData {
  heart_rate: {
    average: number
    maximum: number
  }
}

export default function HeartBeat() {
  const { exerciseData } = useContext(PolarContext)
  let average = 0
  let max = 0

  if (exerciseData.length !== 0) {
    average =
      exerciseData
        .map((i: ExerciseData) => i.heart_rate.average)
        .reduce((a, b) => a + b) / exerciseData.length

    max = Math.max(
      ...exerciseData.map((i: ExerciseData) => i.heart_rate.maximum)
    )
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Heart title={'avg'} value={average} />
      <Heart title={'max'} value={max} />
    </View>
  )
}
