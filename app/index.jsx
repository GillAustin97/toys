//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>

        <Text style={styles.title}>RareToys</Text>


    {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
      <Link href="/login"   style={styles.mainScreenButton}>Login</Link>
      <Link href="/toys"    style={styles.mainScreenButton}>Toys</Link>
      <Link href="/stores"  style={styles.mainScreenButton}>Stores</Link>
      <Link href="/camera"  style={styles.mainScreenButton}>Camera</Link>
      <Link href="/feedback"style={styles.mainScreenButton}>Feedback</Link>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffff',
    },
    mainScreenButton:{
        backgroundColor: '#3A5F0B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'Black',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
})