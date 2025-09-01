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
import disneylogo from '../assets/storeLogos/logo_disney.png';
import gamestoplogo from '../assets/storeLogos/logo_gamestop.png';
import universallogo from '../assets/storeLogos/logo_universal.png';
import hotTopiclogo from '../assets/storeLogos/logo_hotTopic.png';
import boxLunchlogo from '../assets/storeLogos/logo_boxLunch.png';
import toysRusLogo from '../assets/storeLogos/logo_ToysRus.png';
import amazonLogo from '../assets/storeLogos/logo_amazon.png';
import barnesLogos from '../assets/storeLogos/logo_BnN.png';
import hasbroLogo from '../assets/storeLogos/logo_hasbro.png';
import costcologo from '../assets/storeLogos/logo_costco.png';  
import samsLogo from '../assets/storeLogos/logo_sams.png';

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
  const disneySite = () => {
    Linking.openURL('https://www.disneystore.com/')
  };
  const gamestopSite = () => {
    Linking.openURL('https://www.gamestop.com/')
  };
  const universalSite = () => {
    Linking.openURL('https://shop.universalorlando.com/shop/')
  };
  const hotTopicSite = () => {
    Linking.openURL('https://www.hottopic.com/')
  };
  const boxLunchSite = () => {
    Linking.openURL('https://www.boxlunch.com/')
  }
  const toysRusSite = () => {
    Linking.openURL('https://www.toysrus.com/')
  }
  const amazonSite = () => {
    Linking.openURL('https://www.amazon.com/')
  }
  const barnesSite = () => {
    Linking.openURL('https://www.barnesandnoble.com/')
  }
  const hasbroSite = () => {
    Linking.openURL('https://shop.hasbro.com/en-us')
  }
  const costcoSite = () => {
    Linking.openURL('https://www.costco.com/')
  }
  const samsSite = () => {
    Linking.openURL('https://www.samsclub.com/')
  }

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

      <Pressable style={styles.button} onPress={disneySite}>
        <Image source={disneylogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={gamestopSite}>
        <Image source={gamestoplogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={universalSite}>
        <Image source={universallogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={hotTopicSite}>
        <Image source={hotTopiclogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={boxLunchSite}>
        <Image source={boxLunchlogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={toysRusSite}>
        <Image source={toysRusLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={amazonSite}>
        <Image source={amazonLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={barnesSite}>
        <Image source={barnesLogos} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={hasbroSite}>
        <Image source={hasbroLogo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={costcoSite}>
        <Image source={costcologo} style={styles.logo} />
      </Pressable>

      <Pressable style={styles.button} onPress={samsSite}>
        <Image source={samsLogo} style={styles.logo} />
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