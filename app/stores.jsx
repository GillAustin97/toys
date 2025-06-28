//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Linking, Pressable } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const stores = () => {

  {/*Links for websites for the buttons */}
  const funkoSite = () => {
    Linking.openURL('https://www.funko.com')
  };
    const targetSite = () => {
    Linking.openURL('https://www.target.com')
  };
    const walmartSite = () => {
    Linking.openURL('https://www.walmart.com')
  };
    const mercariSite = () => {
    Linking.openURL('https://www.mercari.com')
  };
    const legoSite = () => {
    Linking.openURL('https://www.lego.com')
  };
  const ebaySite = () => {
    Linking.openURL('https://www.ebay.com')
  };


  return (
    <View style={styles.container}>

      <Pressable style={styles.button} onPress={funkoSite}>
        <Text style={styles.buttonText}>Funko</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={targetSite}>
        <Text style={styles.buttonText}>Target</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={walmartSite}>
        <Text style={styles.buttonText}>Walmart</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={mercariSite}>
        <Text style={styles.buttonText}>Mercari</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={legoSite}>
        <Text style={styles.buttonText}>Lego</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={ebaySite}>
        <Text style={styles.buttonText}>Ebay</Text>
      </Pressable>

    </View>
  )
}

export default stores

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
        flexWrap: 'wrap',
    },
    buttonText:{
      color: 'white',
      fontWeight: 'bold',
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'Black',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
})