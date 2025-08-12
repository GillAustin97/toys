//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Image} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing buy image for the main screen
import tradeLogo from '../assets/buySellTrade/tradeImage.png';

const onboarding3 = () => {
  return (
    <View style={styles.container}>

        {/*Trade logo */}
        <Image source={tradeLogo} style={styles.logo} />

        {/*Main Screen title */}
        <Text style={styles.title}>Trade</Text>

        {/*Links for each page that is created, basically a button to go to that page will be displayed on this screen. */}
        <Link href="/loginORcreateAccount"   style={styles.button}>Next</Link>

    </View>
  )
}

export default onboarding3

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#8C9867',
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
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 0,
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