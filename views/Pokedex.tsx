import { View, StyleSheet } from "react-native";
import BottomDecoration from "../components/BottomDecoration";
import Display from "../components/Display";
import TopDecoration from "../components/TopDecoration";

export default function Pokedex() {
  return (
    <View style={styles.container}>
      <TopDecoration />
      <Display />
      <BottomDecoration />
    </View>
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
