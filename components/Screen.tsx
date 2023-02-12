import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import useGetPokemon from "../hooks/useGetPokemon";
import PokeView from "./PokeView";

export default function Screen() {
  const { pokemon, setPokemon, loader, error, pokemonData, getPokemon } =
    useGetPokemon();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Pokemon..."
        value={pokemon}
        onChangeText={(pokemonName) => setPokemon(pokemonName)}
        onSubmitEditing={() => getPokemon()}
        style={styles.input}
      />
      <PokeView pokemonData={pokemonData} loader={loader} error={error} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
