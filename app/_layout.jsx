//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'


const _layout = () => {

  return (
    <Stack screenOptions={{headerStyle:{backgroundColor: '#8C9867'},
    headerTintColor: '#000',

    }}>

      <Stack.Screen name="index" options={{title: 'Home', headerShown: false}} />
      <Stack.Screen name="login" options={{title: 'Login'}} />
      <Stack.Screen name="stores" options={{title: 'Stores'}} />
      <Stack.Screen name="toys" options={{title: 'Toys'}} />
      <Stack.Screen name="feedback" options={{title: 'Feedback'}} />
      <Stack.Screen name="camera" options={{title: 'Camera'}} />
      <Stack.Screen name="settings" options={{title: 'Settings'}} />
    
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})