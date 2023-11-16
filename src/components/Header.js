import { View, Image} from "react-native";
import Logo from "../../assets/cmu.png";

export default function Header() {
    return (
        <View>
            <Image source={Logo} style={{width:175, height: 175}} />
        </View>
    );
}