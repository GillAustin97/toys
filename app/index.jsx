//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing main logo image for the main screen
import mainLogo from '../assets/logo_toy.png'

const index = () => {
  return (
    <View style={styles.container}>

        {/*Main Screen logo */}
        <Image source={mainLogo} style={styles.mainScreenLogo} />

        {/*Main Screen title */}
        <Text style={styles.title}>RareToys</Text>

        {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
        <Link href="/login"   style={styles.button}>Login</Link>
        <Link href="/toys"    style={styles.button}>Toys</Link>
        <Link href="/stores"  style={styles.button}>Stores</Link>
        <Link href="/camera"  style={styles.button}>Camera</Link>
        <Link href="/feedback"style={styles.button}>Feedback</Link>

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
    button:{
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
    },
    mainScreenLogo:{
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 25,
    },
})