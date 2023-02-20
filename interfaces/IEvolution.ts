export interface IEvolution {
  chain: {
    evolves_to: [],
  }
}

export interface IEvolutionObject {
  evolves_to: [],
  species: {
    name: string,
    url: string
  }
}

export interface IEvolutionNode {
  name: string,
  url: string,
  order: number
}