import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native'

import React from 'react'

const forgotPassword = () => {

    const resetPassword = () => {
        Alert.alert('Password Link Sent');
    }

  return (
    <View styles={styles.container}>

        <Text style={styles.welcome}>Enter your email to receive a password reset link.</Text>

        <TextInput placeholder='Email' style={styles.title} />

        <TouchableOpacity onPress={resetPassword}>
            <Text style={styles.button}>Send Link</Text>
        </TouchableOpacity>

    </View>
  )
}

export default forgotPassword

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
        borderWidth: 2,
        alignSelf: 'center',
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
        marginBottom: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    welcome:{
        fontSize: 20,
        fontWeight: '',
        color: 'Black',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
        textalign: 'center',

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