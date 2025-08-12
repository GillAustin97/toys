//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing buy image for the main screen
import buyLogo from '../assets/buySellTrade/buyImage.png';

const onboarding1 = () => {
  return (
    <View style={styles.container}>

        {/*Main Screen logo */}
        <Image source={buyLogo} style={styles.logo} />

        {/*Main Screen title */}
        <Text style={styles.title}>Buy</Text>

        {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
        <Link href="/onboarding2"   style={styles.button}>Next</Link>

    </View>
  )
}

export default onboarding1

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
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
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