import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
      <Button
        title="I am a button"
        onPress={() =>
          Alert.alert("My title", "button pressed", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
            { text: "maybe" },
          ])
        }
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
