import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/stacks/authStack'
import AppStack from './src/stacks/appStack'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <NavigationContainer>
            <GestureHandlerRootView style={{ flex: 1 }}>

      {/* <AppStack/> */}
      <AuthStack/>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})