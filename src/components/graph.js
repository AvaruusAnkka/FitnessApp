import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { useContext } from 'react'
import { PolarContext } from '../context/polarContext'
import { StyleSheet, Dimensions } from 'react-native'

import IntakeStorage from '../utils/intakeStorage'

const Graph = () => {
  const { exerciseData } = useContext(PolarContext)
  const [calorieData, setCalorieData] = React.useState([])

  React.useEffect(() => {
    const data = []
    exerciseData.forEach((exercise) => {
      data.push({
        date: Date.parse(exercise['start_time']),
        calories: -exercise['calories'],
      })
    })

    if (IntakeStorage.get().length > 0) {
      IntakeStorage.get().forEach((intake) => {
        data.push({
          date: intake['date'],
          calories: intake['calories'],
        })
      })
    }

    data.sort((a, b) => a['date'] - b['date'])

    let currentCalories = [0]
    data.forEach((x) => {
      currentCalories.push(
        currentCalories[currentCalories.length - 1] + Number(x['calories'])
      )
    })
    setCalorieData(currentCalories)
  }, [])

  return (
    <>
      <LineChart
        data={{
          // labels: ['days:'],

          datasets: [
            {
              data: [0, ...calorieData],
              color: (opacity = 255) => `rgba(51, 255, 255, ${opacity})`,
            },
            {
              data: [
                2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
                2500, 2500, 2500, 2500,
              ],
              color: (opacity = 255) => `rgba(102, 240, 0, ${opacity})`,
              withDots: true,
            },
          ],
        }}
        withShadow={false}
        width={Dimensions.get('window').width - 16}
        height={250}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#000000',
          backgroundGradientTo: '#E41717',
          decimalPlaces: 2,
          color: (opacity = 255) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 10,
          marginHorizontal: 7,
          borderRadius: 16,
        }}
      />
    </>
  )
}

export default Graph

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
})
