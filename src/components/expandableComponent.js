import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const ExpandableComponent = ({ item, onClickFunction }) => {
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

  var images = [require('../assets/32213.png'), require('../assets/32214.png')]

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
            source={images[card]}
          />
        </View>
        <View
          style={{
            height: layoutHeight,
            overflow: 'hidden',
            rowGap: 7,
          }}
        >
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

const styles = StyleSheet.create({
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
  text: {
    height: null,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    flex: 1,
    borderRadius: 30,
    fontSize: 22,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ExpandableComponent
