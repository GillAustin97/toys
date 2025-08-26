//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const donate = () => {
  
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Want to donate to make the app better?</Text>
      <Text style={styles.title}>Type in an amount below!</Text>
    
        <TextInput style ={styles.feedbackBox} placeholder='$0.00'></TextInput>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Thanks for donating!')}>
            <Text style={styles.Text}>Donate</Text>
        </TouchableOpacity>

    </View>
  )
}

export default donate

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
        borderColor: 'black',
        borderWidth: 2,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'Black',
        textShadowColor: '#000',
    },
    logo:{
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
    },
    feedbackBox: {
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
    },
})