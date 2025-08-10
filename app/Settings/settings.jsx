//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View } from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

const settings = () => {
  return (
     <View style={styles.container}>

      <Link href="/aboutSettings"style={styles.button}>About</Link>
      <Link href="/accountSettings"style={styles.button}>Account</Link>
      <Link href="/buyingSettings"style={styles.button}>Buying</Link>
      <Link href="/sellingSettings"style={styles.button}>Selling</Link>
      <Link href="/notificationsSettings"style={styles.button}>Notifications</Link>
      <Link href="/preferencesSettings"style={styles.button}>Preferences</Link>
      <Link href="/supportSettings"style={styles.button}>Support</Link>

    </View>
  )
}

export default settings

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