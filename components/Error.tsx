import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

interface Props {
  msg: string;
}

export default function Error({ msg }: Props) {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: "100%",
          height: 300,
        }}
        source={require("../assets/Looties/404.json")}
      />
      <Text style={styles.text}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
