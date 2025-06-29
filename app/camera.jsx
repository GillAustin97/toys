//this is the main point of the application where you add all components to this page
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

import React, {useState} from 'react'

//importing camera permissions
import { CameraView, useCameraPermissions } from 'expo-camera'


export default function cameraScreen() {

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  function cameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  return(
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={cameraFacing}>
            <Text style={styles.text}>Switch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={cameraFacing}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>


        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#3A5F0B',
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    },
    buttonContainer: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    text:{
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black'
    },
    camera:{
      flex: 1
    },
})