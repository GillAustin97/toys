//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image, TextInput} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing buy image for the main screen
import mainLogo from '../assets/logo_toy.png';

const user_CreateAccount = () => {
  return (
    <View style={styles.container}>

        {/*Main Screen logo */}
        <Image source={mainLogo} style={styles.logo} />

        {/*Welcome Message*/}
        <Text style={styles.welcome}>Welcome, Please create a account.</Text>   

        <TextInput placeholder='Firstname' style={styles.title} />
        <TextInput placeholder='Lastname' style={styles.title} />
        <TextInput placeholder='Create Username' style={styles.title} />
        <TextInput placeholder='Create Email' style={styles.title} />
        <TextInput placeholder='Create Password' secureTextEntry={true} style={styles.title} />

        <Link href="/mainOptions"   style={styles.button}>Create</Link>

    </View>
  )
}

export default user_CreateAccount

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
    welcome:{
        fontSize: 20,
        fontWeight: '',
        color: 'Black',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
        marginBottom: 10,
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