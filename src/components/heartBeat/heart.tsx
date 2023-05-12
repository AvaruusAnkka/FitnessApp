import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import HeartbeatAnimation from './heartAnimation'

interface Props {
  title: string
  value: number
}

const { width } = Dimensions.get('window')
const boxDiv = 2.5
const iconDiv = 4

const Heart: React.FC<Props> = ({ title, value }) => {
  return (
    <View style={styles.box}>
      <View>
        <HeartbeatAnimation heartRate={value}>
          <Ionicons
            name='heart'
            style={{
              color: '#E41717',
              fontSize: width / iconDiv,
            }}
          />
        </HeartbeatAnimation>
        <Ionicons name='pulse-outline' style={styles.pulseIcon} />
      </View>
      <Text style={{ color: '#E41717', fontSize: width / (iconDiv + 15) }}>
        {title} {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderColor: '#E41717',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / boxDiv,
    height: width / boxDiv,
    backgroundColor: '#15171B',
  },
  pulseIcon: {
    ...StyleSheet.absoluteFillObject,
    fontSize: width / (iconDiv + 3),
    color: '#15171B',
    top: '24%',
    left: '16%',
  },
})

export default Heart
