//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing web browser for external internet use
import * as WebBrowser from 'expo-web-browser';

const toys = () => {
  return (
    <View style={styles.container}>
      <Text>toys</Text>
    </View>
  )
}

export default toys

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