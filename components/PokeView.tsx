import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useModal from "../hooks/useModal";
import { IPokemon } from "../interfaces/IPokemon";
import BtnDescription from "./BtnGeneral";
import ErrorView from "./Error";
import LoaderView from "./Loader";
import ModalGeneral from "./ModalGeneral";
import useGetDescription from "../hooks/useGetDescription";

interface Props {
  pokemonData: IPokemon;
  loader: boolean;
  error: {
    showError: boolean;
    msg: string;
  };
}

export default function PokeView({
  pokemonData: { name, type, image, id },
  loader,
  error,
}: Props) {
  const { open, handleClose, handleOpen } = useModal()
  if (loader) {
    return <LoaderView />;
  }
  if (error.showError) {
    return <ErrorView msg={error.msg} />;
  }
  return (
    <View style={styles.center}>
      <ModalGeneral id={id} handleClose={handleClose} open={open} title="Description"/>
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
        {type?.map((typeText, i) => (
          <View key={i} style={styles.boxType}>
            <Text style={{ color: "white" }}>{typeText}</Text>
          </View>
        ))}
      </View>
      <View style={styles.btnRow}>
       <BtnDescription handlePress={() => handleOpen()}>Description</BtnDescription>
       <BtnDescription handlePress={() => handleOpen()}>Evolution</BtnDescription>
       <BtnDescription handlePress={() => handleOpen()}>Moves</BtnDescription>
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
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  }
});
