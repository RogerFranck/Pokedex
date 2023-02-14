import { useEffect, useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";

export default function useGetDamageInfo(id: number | string) {
  const [damageInfo, setDamageInfo] = useState("");
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });

  const getDamageInfo = async () => {
    try {
      setError({
        showError: false,
        msg: "",
      });
      setLoader(true);
      const { data } = await pokeAxios
        .get(`type/${id}`)
        .finally(() => setLoader(false));
      //! AQUI vas a editar data para tener la info que necesitamos
      //! Le creas una interfaz y para renderizar sera en un modal
      console.log(data.damage_relations)
      setDamageInfo(data.damage_relations);
    } catch (error) {
      setError({
        showError: true,
        msg: "Información no encontrada",
      });
    }
  };
  useEffect(() => {
    getDamageInfo()
  }, [id])
  
  return {
    damageInfo,
    loader,
    error,
  };
}