//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Linking, Pressable, Image} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//scrolling view for screen
import { ScrollView } from 'react-native';

//image imports
import funkoLogo from '../assets/storeLogos/logo_funko.png';
import targetLogo from '../assets/storeLogos/logo_target.png';
import walmartLogo from '../assets/storeLogos/logo_walmart.png';
import mercariLogo from '../assets/storeLogos/logo_mercari.png';
import legoLogo from '../assets/storeLogos/logo_lego.png';
import ebayLogo from '../assets/storeLogos/logo_ebay.png';
import fbMarketplaceLogo from '../assets/storeLogos/logo_facebookMarketplace.png';


const stores = () => {

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
  const fbMarketplaceSite = () => {
    Linking.openURL('https://www.facebook.com/marketplace')
  };

  return (

    <ScrollView>
    <View style={styles.container}>

      <Pressable style={styles.button} onPress={funkoSite}>
        <Image source={funkoLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={targetSite}>
        <Image source={targetLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={walmartSite}>
        <Image source={walmartLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={mercariSite}>
        <Image source={mercariLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={legoSite}>
        <Image source={legoLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={ebaySite}>
        <Image source={ebayLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={fbMarketplaceSite}>
        <Image source={fbMarketplaceLogo} style={styles.logo} />
      </Pressable>

    </View>
    </ScrollView>
  )
}

export default stores

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
      color: 'white',
      fontWeight: 'bold',
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
})