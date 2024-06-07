import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/stacks/authStack'
import AppStack from './src/stacks/appStack'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppStack/> */}
      <AuthStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})