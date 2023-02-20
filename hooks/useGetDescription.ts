import { useEffect, useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";
import { Idescription } from "../interfaces/IDescription";
import { IEvolutionNode } from "../interfaces/IEvolution";
import useGetevolution from "./useGetEvolution";

export default function useGetDescription(id: number | string) {
  const [description, setDescription] = useState("");
  const [evolution, setEvolution] = useState<IEvolutionNode[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });

  const { getEvolution } = useGetevolution();

  const getDescription = async () => {
    try {
      setError({
        showError: false,
        msg: "",
      });
      setLoader(true);
      const { data } : Idescription = await pokeAxios
        .get(`pokemon-species/${id}`)
        .finally(() => setLoader(false));

      let evolutionURL = data?.evolution_chain?.url;
      const evolution = await getEvolution(evolutionURL)
      setEvolution(evolution)

      let indexOfDescription = data?.flavor_text_entries?.findIndex(({ language }) => language.name == "es");
      setDescription(data.flavor_text_entries[indexOfDescription].flavor_text);
    } catch (error) {
      setError({
        showError: true,
        msg: "descripción no encontrada",
      });
    }
  };
  useEffect(() => {
    getDescription()
  }, [id])
  
  return {
    evolution,
    description,
    loader,
    error,
  };
}