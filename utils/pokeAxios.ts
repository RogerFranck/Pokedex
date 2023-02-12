import axios from "axios";

export const pokeAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
