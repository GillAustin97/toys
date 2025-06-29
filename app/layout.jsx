import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const layout = () => {

  return (
    <Stack screenOptions={{
          
    }}>

      <Stack.Screen name="index" options={{title: 'Home'}} />
      <Stack.Screen name="login" options={{title: 'Home'}} />
      <Stack.Screen name="stores" options={{title: 'Home'}} />
      <Stack.Screen name="toys" options={{title: 'Home'}} />
      <Stack.Screen name="feedback" options={{title: 'Home'}} />
      <Stack.Screen name="camera" options={{title: 'Home'}} />
    
    </Stack>
  )
}

export default layout

const styles = StyleSheet.create({})