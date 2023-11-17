import { View } from 'react-native'
import { PaperProvider, Button , TextInput, Text, Appbar} from 'react-native-paper';
import * as React from 'react';


export default function DashboardForm(props) {
  console.log(props);
  const [text, setText] = React.useState("");

  return (
    <PaperProvider>
    <View>
      <View style = {{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Congratulations!</Text>
        <Text style = {{fontSize: 14, fontStyle: 'italic', color: '#00491E',}}variant="displaySmall">"You have finished the activity!"</Text>
      </View>
      
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
      LOGOUT
    </Button>
  </View>
  </PaperProvider>
  )
}