//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>

      <Link href="/login">login</Link>
      <Link href="/stores">login</Link>
      <Link href="/feedback">login</Link>
      <Link href="/camera">login</Link>
      <Link href="/toys">login</Link>


    </View>
  )
}

export default index

const styles = StyleSheet.create({})