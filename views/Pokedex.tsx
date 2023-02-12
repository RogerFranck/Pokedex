import { View, StyleSheet, SafeAreaView } from "react-native";
import BottomDecoration from "../components/BottomDecoration";
import Display from "../components/Display";
import TopDecoration from "../components/TopDecoration";

export default function Pokedex() {
  return (
    <SafeAreaView style={styles.container}>
      <TopDecoration />
      <Display />
      <BottomDecoration />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC092C",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
