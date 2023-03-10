import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useGetPokemon from "../hooks/useGetPokemon";
import PokeView from "./PokeView";

export default function Screen() {
  const { pokemon, setPokemon, loader, error, pokemonData, getPokemon } =
    useGetPokemon();
  return (
    <KeyboardAwareScrollView>
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
    </KeyboardAwareScrollView>
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
    marginTop: 3,
    backgroundColor: "#e8e8e8",
  },
});
