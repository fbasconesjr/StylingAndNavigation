import { View, Text, Image} from "react-native";
import Logo from "../../../assets/cmu.png";

export default function Header() {
    return (
        <View >
        <View style={{justifyContent: "center", alignItems: "center",}}>
            <Image source={Logo} style={{width:175, height: 175 }} />
            
        </View>
        <View style={{justifyContent: "center", alignItems: "center",}}>
            <Text style = {{fontSize: 24, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Central Mindanao University</Text>
            <Text style = {{fontStyle: 'italic', color: '#00491E',}}variant="displaySmall">"The Academic Paradise of the South"</Text>
        </View>
        </View>
    );
}