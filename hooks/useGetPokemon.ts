import { useState } from "react";
import { IPokemon, IPokemonType } from "../interfaces/IPokemon";
import { pokeAxios } from "../utils/pokeAxios";
import * as Speech from 'expo-speech';

export default function useGetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });
  const [pokemonData, setPokemonData] = useState<IPokemon>({ id: 0 });

  const speakName = (thingToSay: string) => {
    Speech.speak(thingToSay, {
      language: 'en-US',
      pitch: 0.4,
      rate: 1.1
    });
  };

  const getPokemon = async () => {
    try {
      setError({
        showError: false,
        msg: "",
      });
      setLoader(true);
      const { data } = await pokeAxios
        .get(`pokemon/${pokemon.toLocaleLowerCase()}`)
        .finally(() => setLoader(false));
      const pokeType: IPokemonType[] = data.types.map((pk: any) => ({ name: pk.type.name, url: pk.type.url }));
      const poke: IPokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: pokeType,
        moves: data.moves.map((e: any) => e.move.name).sort()
      };
      speakName(poke.name || 'Not Found')
      setPokemonData(poke);
    } catch (error) {
      speakName('Not Found')
      setError({
        showError: true,
        msg: "Pokemon no encontrado",
      });
    }
  };

  return {
    pokemon,
    setPokemon,
    loader,
    error,
    pokemonData,
    getPokemon
  };
}
