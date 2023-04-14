import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export default function Home() {
  const [boxes, setboxes] = useState([
    { name: 'Enter calories', key: '1' },
    { name: 'Graph', key: '2' },
    { name: 'Settings', key: '3' },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={boxes}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'red',
    fontSize: 24,
  },
})