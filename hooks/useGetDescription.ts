import { useEffect, useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";

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
      const { data } = await pokeAxios
        .get(`pokemon-species/${id}`)
        .finally(() => setLoader(false));
      //! AQUI vas a editar data para tener la info que necesitamos
      //! Le creas una interfaz y para renderizar sera en un modal
      console.log(data.flavor_text_entries[26].flavor_text)
      setDescription(data.flavor_text_entries[26].flavor_text);
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