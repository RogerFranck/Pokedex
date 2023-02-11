import axios from "axios";
import { useState } from "react";
import { IPokemon } from "../interfaces/IPokemon";

export default function useGetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });
  const [pokemonData, setPokemonData] = useState<IPokemon>({});

  const getPokemon = async () => {
    try {
      setError({
        showError: false,
        msg: "",
      });
      const { data } = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .finally(() => setLoader(false));

      const pokeType: string[] = data.types.map((pk: any) => pk.type.name);

      const poke: IPokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: pokeType,
      };
      setPokemonData(poke);
    } catch (error) {
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
    getPokemon,
  };
}
