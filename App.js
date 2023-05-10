import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PolarContextProvider } from "./src/context/polarContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./src/components/tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PolarContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="homeScreen" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PolarContextProvider>
  );
}
