import { StyleSheet, View } from "react-native";

export default function TopDecoration() {
  return (
    <View style={styles.container}>
      <View style={styles.mayorCircle}>
        <View style={styles.minorCircle} />
      </View>
      <View style={styles.minicircleList}>
        <View style={styles.miniCricleRed} />
        <View style={styles.miniCricleYellow} />
        <View style={styles.miniCricleGreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '10%',
    marginTop: 40,
    flexDirection: "row",
  },
  mayorCircle: {
    width: 75,
    height: 75,
    backgroundColor: "#DFDFDF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 0.5,
  },
  minorCircle: {
    width: 62,
    height: 62,
    backgroundColor: "#176A9F",
    borderRadius: 100,
  },
  minicircleList: {
    flexDirection: "row",
    width: "auto",
    height: "auto",
    marginLeft: 20
  },
  miniCricleRed: {
    width: 15,
    height: 15,
    backgroundColor: "#AA0722",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    marginLeft: 15,
    marginTop: 5
  },
  miniCricleYellow: {
    width: 15,
    height: 15,
    backgroundColor: "#DCC846",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    marginLeft: 15,
    marginTop: 5
  },
  miniCricleGreen: {
    width: 15,
    height: 15,
    backgroundColor: "#447C49",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    marginLeft: 15,
    marginTop: 5
  },
});
