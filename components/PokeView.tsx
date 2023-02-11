import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IPokemon } from "../interfaces/IPokemon";
import ErrorView from "./Error";
import LoaderView from "./Loader";
import Initial from "./Initial";

interface Props {
  pokemonData: IPokemon;
  loader: boolean;
  error: {
    showError: boolean;
    msg: string;
  };
}

export default function PokeView({
  pokemonData: { name, type, image },
  loader,
  error,
}: Props) {
  if (loader) {
    <LoaderView />;
  }
  if (error.showError) {
    <ErrorView msg={error.msg} />;
  }
  return (
    <View style={styles.center}>
      <Image
        style={styles.pokeimg}
        source={{
          uri: image,
        }}
      />
      {name && (
        <View style={styles.nameText}>
          <Text style={{ color: "white", fontSize: 20 }}> {name} </Text>
        </View>
      )}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {type?.map((e, i) => (
          <View key={i} style={styles.boxType}>
            <Text style={{ color: "white" }}>{e}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokeimg: {
    width: 300,
    height: 200,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 5,
  },
  boxType: {
    marginLeft: 5,
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
  },
});
