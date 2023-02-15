import { useEffect, useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";

interface Idescription {
  data: {
    flavor_text_entries: [{
      flavor_text: string,
      language: {
        name: string
      }
    }]
  }
}

export default function useGetDescription(id: number | string) {
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });

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
      //! AQUI vas a editar data para tener la info que necesitamos
      //! Le creas una interfaz y para renderizar sera en un modal
      let indexOfDescription = data?.flavor_text_entries?.findIndex(({ language }) => language.name == "es")
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
    description,
    loader,
    error,
  };
}