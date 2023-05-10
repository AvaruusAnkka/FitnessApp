import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/home'
import History from '../pages/history'
import Header from './header'
import Profile from '../pages/profile'
import InfoScreen from '../pages/info'

const Tab = createBottomTabNavigator()

export default function Tabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: 'red',
            height: 50,
            margin: -1,
          },
          tabBarItemStyle: {
            backgroundColor: 'red',
            margin: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Info') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'
            } else if (route.name === 'History') {
              iconName = focused ? 'newspaper' : 'newspaper-outline'
            } else if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='History'
          component={History}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Info'
          component={InfoScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  )
}
