//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Pressable, Image, Linking} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing web browser for external internet use
import * as WebBrowser from 'expo-web-browser';

//importing scrolling view for screen
import { ScrollView } from 'react-native';

//importing images for the toy screen
import lordOfRingsToy1 from '../assets/toyImages/lordOfRingsImage1.png';

const toys = () => {

  const lordOfRings1 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')
  };

  return (
    <View style={styles.screenFiller}>

      <ScrollView>
        <View style={styles.container}>

          <Pressable style={styles.button} onPress={lordOfRings1}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

        </View>
      </ScrollView>

      <View style={styles.bottomBar}></View>

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
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    },
    button:{
        backgroundColor: '#ffffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        flexWrap: 'wrap',
        width: '30%',
        alignItems: 'center',
    },
    buttonText:{
      color: 'black',
      fontWeight: '',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'Black',
        textShadowColor: '#000',
    },
    logo:{
        width: 100,
        height: 100,
        borderRadius: 25,
        marginTop: 5,
        marginBottom: 2,
        borderColor: 'black',
        borderWidth: 2,
    },
    bottomBar:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#616161ff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderColor: 'black',
        borderWidth: 1,
    },
    screenFiller: {
        flex: 1,
    },
})