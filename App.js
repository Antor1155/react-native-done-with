import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
      <Text style={styles.text} numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },

  text: {
    fontSize: 30,
  },
});
