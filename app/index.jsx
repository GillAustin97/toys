//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>



    {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
      <Link href="/login">Login</Link>
      <Link href="/toys">Toys</Link>
      <Link href="/stores">Stores</Link>
      <Link href="/camera">Camera</Link>
      <Link href="/feedback">Feedback</Link>
      

    </View>
  )
}

export default index

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    mainScreenButton:{
        backgroundColor: '#3A5F0B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20
    },
})