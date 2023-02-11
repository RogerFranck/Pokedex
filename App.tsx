import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Pokedex from "./views/Pokedex";

export default function App() {
  return (
    <View style={styles.container}>
      <Pokedex />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
