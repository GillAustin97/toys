//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing buy image for the main screen
import mainLogo from '../assets/logo_toy.png';

const loginORcreateAccount = () => {
  return (
    <View style={styles.container}>

        {/*Main Screen logo */}
        <Image source={mainLogo} style={styles.logo} />

        {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
        <Link href="user_login"   style={styles.button}>Login</Link>

        {/*Create a Account */}
        <Text style={styles.title}>or</Text>

        {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
        <Link href="user_CreateAccount"   style={styles.button}>Create Account</Link>

        {/* link to forgot password page */}
        <Link href= "forgotPassword"><Text style={styles.linktext}>Forgot Password?</Text></Link>

    </View>
  )
}

export default loginORcreateAccount

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffff',
        height: '100%',
        width: '100%',
    },
    button:{
        backgroundColor: '#3A5F0B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    title:{
        fontSize: 20,
        fontWeight: '',
        color: 'Black',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
        marginTop: 10,
        marginBottom: 5,
    },
    logo:{
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
    },
    linktext:{
        color: 'black',
        fontSize: 14,
        underlineColor: 'black',
        textDecorationLine: 'underline',
        marginTop: 50,
        
    }
})