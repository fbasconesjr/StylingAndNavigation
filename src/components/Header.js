import { View, Text, Image} from "react-native";
import Logo from "../../assets/cmu.png";

export default function Header() {
    return (
        <View>
            <View>
                <Image source={Logo} style={{width:175, height: 175}} />
            </View>
            <View>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 12,
                
            }}>CENTRAL MINDANAO UNIVERSITY
            </Text>
            </View>
        </View>
    );
}