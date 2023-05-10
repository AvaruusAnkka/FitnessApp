import React from 'react'
import { View } from 'react-native'

import Enter from '../components/enter'
import HeartBeat from '../components/heartBeats'
import Reset from '../components/reset'

export default function Home() {
  return (
    <View style={{ flex: 1, gap: 10, backgroundColor: '#15171B', padding: 10 }}>
      <Enter />
      <HeartBeat />
      <Reset />
    </View>
  )
}
