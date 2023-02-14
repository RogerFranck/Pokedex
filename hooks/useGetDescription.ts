import { useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";

export default function useGetDescription() {
  const [description, setdescription] = useState({});
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });

  const getDescription = async (id: number | string) => {
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
      console.log(data)
      // setdescription(description);
    } catch (error) {
      setError({
        showError: true,
        msg: "descripción no encontrada",
      });
    }
  };

  return {
    description,
    loader,
    error,
    getDescription,
  };
}