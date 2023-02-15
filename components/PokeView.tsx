import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useModal from "../hooks/useModal";
import { IPokemon } from "../interfaces/IPokemon";
import BtnDescription from "./BtnGeneral";
import ErrorView from "./Error";
import LoaderView from "./Loader";
import ModalDescription from "./ModalDescription";
import ModalType from "./ModalType";

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
  const { open: openDescription, handleClose: handleCloseDescription, handleOpen: handleOpenDescription } = useModal()
  const { open:openEvolution, handleClose:handleCloseEvolution, handleOpen:handleOpenEvolution } = useModal()
  const { open:openMoves, handleClose:handleCloseMoves, handleOpen:handleOpenMoves } = useModal()
  const { open:openTypes, handleClose:handleCloseTypes, handleOpen:handleOpenTypes } = useModal()
  if (loader) {
    return <LoaderView />;
  }
  if (error.showError) {
    return <ErrorView msg={error.msg} />;
  }
  return (
    <View style={styles.center}>
      <ModalDescription id={id} handleClose={handleCloseDescription} open={openDescription} title="Description"/>
      <ModalDescription id={id} handleClose={handleCloseEvolution} open={openEvolution} title="Evolution"/>
      <ModalType id={id} handleClose={handleCloseTypes} open={openTypes} title="Types"/>
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
       <BtnDescription handlePress={() => handleOpenDescription()}>Description</BtnDescription>
       <BtnDescription handlePress={() => handleOpenEvolution()}>Evolution</BtnDescription>
       <BtnDescription handlePress={() => handleOpenMoves()}>Moves</BtnDescription>
       <BtnDescription handlePress={() => handleOpenTypes()}>Type</BtnDescription>
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
