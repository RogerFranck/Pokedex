export interface IPokemonType {
  name: string,
  url: string
}

export interface IPokemon {
  id: number | string;
  name?: string;
  image?: string;
  type?: IPokemonType[];
  moves?: Array<string>
}
