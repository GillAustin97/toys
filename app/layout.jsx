//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const layout = () => {

  return (
    <Stack screenOptions={{

    }}>

      <Stack.Screen name="index" options={{title: 'Home'}} />
      <Stack.Screen name="login" options={{title: 'Login'}} />
      <Stack.Screen name="stores" options={{title: 'Stores'}} />
      <Stack.Screen name="toys" options={{title: 'Toys'}} />
      <Stack.Screen name="feedback" options={{title: 'Feedback'}} />
      <Stack.Screen name="camera" options={{title: 'Camera'}} />
    
    </Stack>
  )
}

export default layout

const styles = StyleSheet.create({})