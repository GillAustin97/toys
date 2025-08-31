import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

import { Link } from 'expo-router'

import appleQRcode from '../assets/appleQR.png'

//importing store review for funds
import * as StoreReview from 'expo-store-review';

const addFunds = () => {

  const funds = async () => {

    if (await StoreReview.hasAction()) {
      await StoreReview.requestReview()
      Alert.alert('Funds have been added!');
}
    else {
      Alert.alert('Adding funds is not available at this time');
    }
  }
  return (
    <View style={styles.container}>

    <Text style={styles.feedbackBox}> Current Amount: $14.89</Text>  

    <Image source={appleQRcode} style={styles.logo} />

      <Text>Add Funds</Text>

      <TextInput style ={styles.feedbackBox}

      placeholder="$0.00" multiline={true} numberOfLines={1} />

      <TouchableOpacity style={styles.button} onPress={funds}>
        <Text style={styles.Text}>Add Funds</Text>
      </TouchableOpacity>

      <Text style = {styles.smalltext}>or</Text>

      <TouchableOpacity style={styles.button} onPress={funds}>
        <Text style={styles.Text}>$10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={funds}>
        <Text style={styles.Text}>$15</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={funds}>
        <Text style={styles.Text}>$20</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={funds}>
        <Text style={styles.Text}>$25</Text>
      </TouchableOpacity>

    </View>
  )
}
export default addFunds

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
        fontSize: 40,
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
        width: '50%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    smalltext:{
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10,
    },
})