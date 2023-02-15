import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Pokedex from "./views/Pokedex";


export default function App() {
  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <Pokedex />
      <StatusBar style="auto" />
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
