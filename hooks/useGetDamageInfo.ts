import { useEffect, useState } from "react";
import { pokeAxios } from "../utils/pokeAxios";
import { IDamageInfo } from "../interfaces/IDamageInfo";

export default function useGetDamageInfo(id: number | string) {
  const defaultDamageInfo = {
    "double_damage_from":[],
    "double_damage_to":[],
    "half_damage_from":[],
    "half_damage_to":[],
    "no_damage_from":[],
    "no_damage_to":[],
  }
  
  const [damageInfo, setDamageInfo] = useState<IDamageInfo>(defaultDamageInfo);
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