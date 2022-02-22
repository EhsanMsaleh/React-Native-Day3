import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box ,Button} from "native-base";
import HomeL from './ListApi';
import Details from './details';
import CommetProvider from '../context/context'
import { createContext, useReducer } from "react";
export const CommetContext = createContext();
const Stack = createNativeStackNavigator();
export default function Test() {
  return (
    <CommetProvider>
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeL} />
      <Stack.Screen name="Details" component={Details} />

    </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
  </CommetProvider>
  );
}