import { View } from 'react-native'
import { PaperProvider, Button , TextInput, Text, Appbar} from 'react-native-paper';
import * as React from 'react';


export default function SignUpForm(props) {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");

  return (
    <PaperProvider>
    <View>
      <View style = {{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Create Account</Text>
      </View>
      <TextInput
        activeOutlineColor="green"
        style={{marginTop: 10,}}
        label="Name"
        value={text}
        onChangeText={text => setText(text)}
        mode='outlined'
        
      />
      <TextInput
        activeOutlineColor="green"
        style={{marginTop: 10,}}
        label="Email"
        value={text1}
        onChangeText={text1 => setText1(text1)}
        mode='outlined'
        
      />
      
      <TextInput 
        activeOutlineColor="green"
        style={{marginTop: 10,}}
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        mode='outlined'
      />
      <Button style={{
            justifyContent: 'flex-end',
            borderWidth: 1,
            width: 350,
            marginTop: 25,
            height: 45,
            paddingLeft: 10,
            marginBottom: 10,
            justifyContent: 'flex-end',
            backgroundColor: "#00491E",
            
          }}mode="contained" onPress={() => props.navigation.navigate("LoginPage")}>
      SIGN UP
    </Button>
    <View style = {{justifyContent: "center", alignItems: "center", flexDirection:'row'}}>
        <Text style = {{fontSize: 14, fontWeight: 'bold', color: 'gray',}}variant="displaySmall">Already have an account? </Text><Text style = {{fontSize: 14, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall" onPress={() => props.navigation.navigate("LoginPage")}>Log in </Text>
      </View>
  </View>
  </PaperProvider>
  )
}