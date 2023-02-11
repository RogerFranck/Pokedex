import { StyleSheet, View } from "react-native";
import Screen from "./Screen";

export default function Display() {
  return (
    <View style={styles.container}>
      <View style={styles.miniflex}>
        <View style={styles.circleRed} />
        <View style={styles.circleRed} />
      </View>
      <View style={styles.display}>
        <Screen />
      </View>
      <View style={styles.mayorflex}>
        <View style={styles.circleRedMayor} />
        <View style={styles.lineList}>
          <View style={styles.lineGray} />
          <View style={styles.lineGray} />
          <View style={styles.lineGray} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFDFDF",
    width: "90%",
    height: "65%",
    borderRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 0.5,
  },
  display: {
    backgroundColor: "black",
    width: "90%",
    height: "85%",
    borderRadius: 5,
  },
  circleRed: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: "#DC092C",
    margin: 15,
    borderColor: "black",
    borderWidth: 0.5,
  },
  circleRedMayor: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "#DC092C",
    margin: 15,
    borderColor: "black",
    borderWidth: 0.5,
  },
  miniflex: {
    flexDirection: "row",
  },
  mayorflex: {
    flexDirection: "row",
    width: 325,
    justifyContent: "space-between",
  },
  lineGray: {
    width: 40,
    height: 5,
    backgroundColor: "gray",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
  lineList: {
    marginTop: 10,
    flexDirection: "column",
  },
});
