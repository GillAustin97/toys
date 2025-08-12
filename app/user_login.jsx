//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image, TextInput} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing buy image for the main screen
import mainLogo from '../assets/logo_toy.png';

const user_login = () => {
  return (
    <View style={styles.container}>

        {/*Main Screen logo */}
        <Image source={mainLogo} style={styles.logo} />

        <TextInput placeholder='Username' style={styles.title} />
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.title} />

        <Link href="/mainOptions"   style={styles.button}>Login</Link>

    </View>
  )
}

export default user_login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#8C9867',
        height: '100%',
        width: '100%',
    },
    button:{
        backgroundColor: '#3A5F0B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
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
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        height: 40,
        width: '80%',
        marginBottom: 20,
    },
    logo:{
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
    },
})