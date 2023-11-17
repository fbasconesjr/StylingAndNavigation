import { View } from 'react-native'
import { PaperProvider, Button , TextInput, Text, Appbar} from 'react-native-paper';
import * as React from 'react';


export default function LoginForm(props) {
  console.log(props);
  const [text, setText] = React.useState("");

  return (
    <PaperProvider>
    <View>
      <View style = {{justifyContent: "center", alignItems: "center"}}>
        <Text  style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Welcome back.</Text>
      </View>
      <TextInput
        activeOutlineColor="green"
        style={{marginTop: 10,}}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
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
      <View>
        <Text style = {{textAlign: 'right', fontSize: 14, fontWeight: 'bold', color: '#00491E',paddingRight: 15,}}variant="displaySmall" onPress={() => props.navigation.navigate("RestorePasswordPage")}>Forgot your password?</Text>
    </View>
      <Button style={{
            justifyContent: 'flex-end',
            borderWidth: 1,
            width: 350,
            marginTop: 5,
            height: 45,
            paddingLeft: 10,
            marginBottom: 10,
            justifyContent: 'flex-end',
            backgroundColor: "#00491E",
            
          }}mode="contained" onPress={() => props.navigation.navigate("DashboardPage")}>
      LOGIN
    </Button>
    <View style = {{justifyContent: "center", alignItems: "center", flexDirection:'row'}}>
        <Text style = {{fontSize: 14, fontWeight: 'bold', color: 'gray',}}variant="displaySmall">Don't have an account? </Text><Text style = {{fontSize: 14, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall" onPress={() => props.navigation.navigate("SignUpPage")}>Sign Up </Text>
      </View>
  </View>
  </PaperProvider>
  )
}