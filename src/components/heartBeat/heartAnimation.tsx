import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

interface Props {
  heartRate: number
  children: React.ReactNode
}

const HeartbeatAnimation: React.FC<Props> = ({ heartRate, children }) => {
  const [pulse] = useState(new Animated.Value(1))

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.2,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.delay(60000 / heartRate),
      ])
    )
    animation.start()
    return () => animation.stop()
  }, [pulse])

  const pulseStyle = {
    transform: [{ scale: pulse }],
  }

  return <Animated.View style={pulseStyle}>{children}</Animated.View>
}

export default HeartbeatAnimation
