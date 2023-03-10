import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import usePlayDitto from "../hooks/usePlayDitto";

export default function BottomDecoration() {
  const { dittoView, handleDitto } = usePlayDitto();
  return (
    <View style={styles.container}>
      <View style={styles.mayorCircle} />
      <View style={styles.boxColum}>
        <View style={styles.boxRow}>
          <View style={styles.redPoint} />
          <View style={styles.bluePoint} />
        </View>
        <TouchableOpacity onPress={handleDitto}>
          <View style={styles.greenBox}>
            {dittoView && (
              <Image
                style={styles.ditto}
                source={require("../assets/ditto/ditto.gif")}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.crossUp} />
        <View style={styles.crossFlat} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: "15%",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  mayorCircle: {
    width: 50,
    height: 50,
    backgroundColor: "#002E2A",
    borderRadius: 100,
  },
  boxColum: {
    flexDirection: "column",
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  greenBox: {
    width: 100,
    height: 70,
    backgroundColor: "#4FAE5D",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1.5,
  },
  redPoint: {
    width: 45,
    height: 10,
    backgroundColor: "red",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1.5,
  },
  bluePoint: {
    width: 45,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1.5,
  },
  crossUp: {
    backgroundColor: "#002E2A",
    height: 100,
    width: 30,
  },
  crossFlat: {
    backgroundColor: "#002E2A",
    height: 30,
    width: 100,
    position: "absolute",
    left: -35,
    top: 35,
  },
  ditto: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
});
