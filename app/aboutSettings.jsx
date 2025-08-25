//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing austins image
import austinImage from '../assets/aboutAustin.png'

const aboutSettings = () => {
  return (
    <View style={styles.container}>

              {/*Main Screen logo */}
              <Image source={austinImage} style={styles.logo} />
      
              {/*Main Screen title */}
              <Text style={styles.title}>Austin Gill</Text>
      
    </View>
  )
}

export default aboutSettings

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