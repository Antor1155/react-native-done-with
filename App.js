import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
  },
});
