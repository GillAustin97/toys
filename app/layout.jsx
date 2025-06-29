import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'


const layout = () => {

  return (
    <Stack screenOptions={{
      headerStyle:{backgroundColor: '#ddd' },
      headerTintColor: '#333',
    }}>

      <Stack.Screen name="index" options={{title: 'Home'}} />
    
    </Stack>
  )
}

export default layout

const styles = StyleSheet.create({})