//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, Pressable, Image, Linking} from 'react-native'

//link for to attach to different screens
import {Link} from 'expo-router'

//importing scrolling view for screen
import { ScrollView } from 'react-native';

//importing images for the toy screen
import lordOfRingsToy1 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy1 from '../assets/toyImages/falloutImage1.png';
import starwarsToy1 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy2 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy2 from '../assets/toyImages/falloutImage1.png';
import starwarsToy2 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy3 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy3 from '../assets/toyImages/falloutImage1.png';
import starwarsToy3 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy4 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy4 from '../assets/toyImages/falloutImage1.png';
import starwarsToy4 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy5 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy5 from '../assets/toyImages/falloutImage1.png';
import starwarsToy5 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy6 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy6 from '../assets/toyImages/falloutImage1.png';
import starwarsToy6 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy7 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy7 from '../assets/toyImages/falloutImage1.png';
import starwarsToy7 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy8 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy8 from '../assets/toyImages/falloutImage1.png';
import starwarsToy8 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy9 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy9 from '../assets/toyImages/falloutImage1.png';
import starwarsToy9 from '../assets/toyImages/starwarsImage1.png';

import lordOfRingsToy10 from '../assets/toyImages/lordOfRingsImage1.png';
import falloutToy10 from '../assets/toyImages/falloutImage1.png';
import starwarsToy10 from '../assets/toyImages/starwarsImage1.png';

const toys = () => {

  const lordOfRings1 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout1 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars1 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

  const lordOfRings2 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout2 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars2 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

  const lordOfRings3 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout3 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars3 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

  const lordOfRings4 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout4 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars4 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

  const lordOfRings5 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout5 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars5 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

    const lordOfRings6 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout6 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars6 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

    const lordOfRings7 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout7 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars7 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

    const lordOfRings8 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout8 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars8 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

    const lordOfRings9 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout9 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars9 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

    const lordOfRings10 = () => {
    Linking.openURL('https://funko.com/pop-plus-frodo-baggins-glow/86430.html')};

  const fallout10 = () => {
    Linking.openURL('https://funko.com/pop-vault-boy/87075.html')};

  const starwars10 = () => {
    Linking.openURL('https://funko.com/pop-deluxe-lights-and-sounds-ig-12-with-grogu/81872.html')};

  return (
    <View style={styles.screenFiller}>

      <ScrollView>
        <View style={styles.container}>

          <Pressable style={styles.button} onPress={lordOfRings1}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout1}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars1}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings2}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout2}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars2}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings3}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout3}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars3}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings4}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout4}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars4}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings5}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout5}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars5}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings6}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout6}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars6}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings7}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout7}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars7}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings8}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout8}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars8}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings9}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout9}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars9}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={lordOfRings10}>
            <Image source={lordOfRingsToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={fallout10}>
            <Image source={falloutToy1} style={styles.logo} />
          </Pressable>

          <Pressable style={styles.button} onPress={starwars10}>
            <Image source={starwarsToy1} style={styles.logo} />
          </Pressable>

        </View>
      </ScrollView>

      <View style={styles.bottomBar}>

        <Pressable style={styles.browserButton} 
        onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={styles.buttonText}>Browser</Text>
        </Pressable>

      </View>

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
    browserButton:{
        backgroundColor: '#ffffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 1,
        marginTop: 10,
        flexWrap: 'wrap',
        width: '40%',
        alignItems: 'center',
        borderRadius: 5,
    },
    button:{
        backgroundColor: '#ffffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 1,
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
        borderRadius: 0,
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