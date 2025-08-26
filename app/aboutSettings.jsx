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
              <Text style={styles.name}>Austin Gill</Text>

              <Text style={styles.title}>Software Developer</Text>
              <Text style={styles.title}>Full Sail University Student</Text>
            
            <Text style={styles.name}>About Me:</Text>
            <Text style={styles.title}>I am a software developer with a passion for creating innovative solutions.
            I enjoy learning new technologies and improving my skills. In my free time, I like to play video games, 
            atch movies, and spend time with my friends and family.</Text>

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
    name:{
        fontSize: 20,
        color: 'Black',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        color: 'Black',
        marginBottom: 10,
        textAlign: 'center',
    },
    logo:{
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
    },
})