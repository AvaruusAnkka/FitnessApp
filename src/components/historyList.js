// Example of Expandable ListView in React Native
// https://aboutreact.com/expandable-list-view/

// Import React
import React, { useEffect, useState, useContext } from 'react'
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native'

import { PolarContext } from '../context/polarContext'
import getCalories from '../utils/getCalories'

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [card, setCard] = useState(0)
  const [layoutHeight, setLayoutHeight] = useState(0)

  useEffect(() => {
    if (item.isExpanded) {
      setCard(0)
      setLayoutHeight(null)
    } else {
      setLayoutHeight(0)
      setCard(1)
    }
  }, [item.isExpanded])

  var arrayimg = [
    require('../assets/32213.png'),
    require('../assets/32214.png'),
  ]

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}
      >
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerText}>{item.category_name} : </Text>
            <Text style={styles.headerText}>{item.total} cal</Text>
          </View>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode='contain'
            source={arrayimg[card]}
          />
        </View>
        <View
          style={{
            height: layoutHeight,
            overflow: 'hidden',
            rowGap: 7,
          }}
        >
          {/*Content under the header of the Expandable List Item*/}
          {item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}
              style={{
                flexDirection: 'row',
              }}
            >
              <Text style={[styles.text, { flex: 3 }]}>{item.id}</Text>
              <Text style={[styles.text, { flex: 1 }]}>{item.val} cal</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  )
}

const App = () => {
  const [listDataSource, setListDataSource] = useState([])
  const [multiSelect, setMultiSelect] = useState(false)
  const [refresh] = useState(useContext(PolarContext).refresh)

  useEffect(() => {
    setListDataSource(getCalories())
  }, [refresh])

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    //sssss
    const array = [...listDataSource]

    // If single select is enabled
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    )

    setListDataSource(array)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    borderRadius: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 25,
    padding: 20,
    rowGap: 7,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 5,
  },
  text: {
    height: null,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default App
