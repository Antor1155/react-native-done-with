import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar backgroundColor="dodgerblue" />
      <Text> ola</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    fontSize: 30,
  },

  logo: {
    width: 200,
    height: 200,
  },
});
