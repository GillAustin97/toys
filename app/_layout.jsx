//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

import { Stack } from 'expo-router'

const _layout = () => {

  return (
    <Stack screenOptions={{headerStyle:{backgroundColor: '#8C9867'},
    headerTintColor: '#000',

    }}>

      <Stack.Screen name="index" options={{title: '', headerShown: false}} />

      <Stack.Screen name="onboarding1" options={{title: '', headerShown: false}} />
      <Stack.Screen name="onboarding2" options={{title: '', headerShown: false}} />
      <Stack.Screen name="onboarding3" options={{title: '', headerShown: false}} />

      <Stack.Screen name="loginORcreateAccount" options={{title: 'Login or Create Account', headerShown: false}} />

      <Stack.Screen name="mainOptions" options={{title: '', headerShown: false}} />

      <Stack.Screen name="user_login" options={{title: 'Login', headerShown: false}} />

      <Stack.Screen name="stores" options={{title: 'Stores'}} />
      <Stack.Screen name="toys" options={{title: 'Toys'}} />
      <Stack.Screen name="feedback" options={{title: 'Feedback'}} />
      <Stack.Screen name="camera" options={{title: 'Camera'}} />

      <Stack.Screen name="settings" options={{title: 'Settings'}} />
      <Stack.Screen name="aboutSettings" options={{title: 'About'}} />
      <Stack.Screen name="accountSettings" options={{title: 'Account'}} />
      <Stack.Screen name="buyingSettings" options={{title: 'Buying'}} />
      <Stack.Screen name="sellingSettings" options={{title: 'Selling'}} />
      <Stack.Screen name="preferencesSettings" options={{title: 'Preferences'}} />
      <Stack.Screen name="notificationsSettings" options={{title: 'Notifications'}} />
      <Stack.Screen name="supportSettings" options={{title: 'Support'}} />
      


      
      
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})