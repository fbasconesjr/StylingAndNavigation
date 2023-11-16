import { Text, View } from 'react-native'
import { PaperProvider, Button } from 'react-native-paper';
import * as React from 'react';

const Content = () => {
  return (
    <PaperProvider>
    <Button style={{
          justifyContent: 'flex-end',
          borderWidth: 1,
          width: 350,
          marginTop: 15,
          height: 45,
          paddingLeft: 10,
          marginBottom: 10,
          justifyContent: 'flex-end',
          backgroundColor: "#00491E",
          
        }}mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
  <Button style={{
          color: "#00491E",
          textColor: "#00491E",
          borderWidth: 2,
        }}mode="outlined" onPress={() => console.log('Pressed')}>
    <Text style={{color:"#00491E"}}>Sign Up</Text>
  </Button>
  </PaperProvider>
  )
}

export default Content