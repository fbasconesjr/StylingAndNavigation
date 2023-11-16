import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Content from "./src/components/Content";


export default function App() {
  return (
        <View style={styles.box}>
          <Header />
          <Content style={styles.buttons}/>
        </View>

  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    position: 'absolute',
    bottom: 300,
    width: '100%',
  },
  buttons: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
});
