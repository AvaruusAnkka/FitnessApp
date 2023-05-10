import React, { useEffect, useState, useContext } from 'react'
import {
  SafeAreaView,
  LayoutAnimation,
  View,
  ScrollView,
  UIManager,
  Platform,
} from 'react-native'

import { PolarContext } from '../context/polarContext'
import getCalories from '../functions/getCalories'

import ExpandableComponent from './expandableComponent'

const App = () => {
  const [listDataSource, setListDataSource] = useState([])
  const [refresh] = useState(useContext(PolarContext).refresh)

  useEffect(() => {
    setListDataSource(getCalories())
  }, [refresh])

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const array = [...listDataSource]

    array.map((placeIndex) =>
      placeIndex === index
        ? (array[placeIndex]['isExpanded'] = true)
        : (array[placeIndex]['isExpanded'] = false)
    )

    setListDataSource(array)
  }

  console.log('listDataSource: ', listDataSource)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', padding: 10 }}></View>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key)
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default App
