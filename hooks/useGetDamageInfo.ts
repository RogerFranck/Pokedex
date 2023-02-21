import { useEffect, useState } from "react";
import { IDamageInfo, IDamageInfoName } from "../interfaces/IDamageInfo";
import { IPokemonType } from "../interfaces/IPokemon";
import axios from "axios";

export default function useGetDamageInfo(types?: IPokemonType[]) {
  const [damageInfo, setDamageInfo] = useState<IDamageInfo[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState({
    showError: false,
    msg: "",
  });

  const getDamageInfo = async (types?: IPokemonType[]) => {
    try {
      const promesas = await Promise.all(((types || []).map(async ({ name, url }) => {
        const { data: { damage_relations: {
          double_damage_from,
          double_damage_to,
          half_damage_from,
          half_damage_to,
          no_damage_from,
          no_damage_to
        } } } = await axios.get(url)
        return {
          name,
          double_damage_from: double_damage_from,
          double_damage_to: double_damage_to,
          half_damage_from: half_damage_from,
          half_damage_to: half_damage_to,
          no_damage_from: no_damage_from,
          no_damage_to: no_damage_to
        };
      })))
      setDamageInfo(promesas)
    } catch (error) {
      setError({
        showError: true,
        msg: "Información no encontrada",
      });
    }
  };
  useEffect(() => {
    getDamageInfo(types)
  }, [types])

  return {
    damageInfo,
    loader,
    error,
  };
}