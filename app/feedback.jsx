//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing store review for feedback
import * as StoreReview from 'expo-store-review';

const feedback = () => {
  const storeRate = async () => {
    if (await StoreReview.hasAction()) {
      await StoreReview.requestReview()
}
  }
  return (
    <View style={styles.container}>
      <Text>Love the app? Leave a Review</Text>
      <TouchableOpacity style={styles.button} onPress={storeRate}>
        <Text style={styles.Text}>Rate us</Text>
      </TouchableOpacity>
    </View>
  )
}

export default feedback

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
})