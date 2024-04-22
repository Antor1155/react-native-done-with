import { StatusBar } from "expo-status-bar";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function App() {
  const statusBarHeight = () => {
    if (Platform.OS === "android") {
      return getStatusBarHeight();
    }
    return 0;
  };

  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: statusBarHeight() }]}>
      <StatusBar backgroundColor="dodgerblue" />
      <Text style={styles.text} onPress={handlePress}>
        Hello from native
      </Text>

      <Image
        blurRadius={10}
        style={styles.logo}
        source={require("./assets/icon.png")}
      />
      <Image
        blurRadius={2}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 30,
  },

  logo: {
    width: 200,
    height: 200,
  },
});
