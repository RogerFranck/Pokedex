import { IEvolutionObject, IEvolutionNode } from "../interfaces/IEvolution";
import axios from "axios";


export default function useGetDescription() {

  const getImageURL = async (url: string) => {
    const newURL = url.replace("pokemon-species", "pokemon");
    const { data }: any = await axios
      .get(newURL)

    return data?.sprites?.front_default;
  }

  const recursiveEvolution = async ({ evolves_to, species }: IEvolutionObject, order: number, result: IEvolutionNode[]) => {

    const imageURL = await getImageURL(species.url)
    const nextNode: IEvolutionNode = {
      name: species.name,
      url: imageURL,
      order: order
    }
    result.push(nextNode)

    if (evolves_to.length > 0) {
      evolves_to.forEach((node) => {
        recursiveEvolution(node, order + 1, result)
      })
    } else {
      return result;
    }
  };

  const styleEvolutionChain = async ({ evolves_to, species }: IEvolutionObject) => {
    const order = 0;
    let result: IEvolutionNode[] = [];

    const imageURL = await getImageURL(species.url)
    const firstNode: IEvolutionNode = {
      name: species.name,
      url: imageURL,
      order: order
    }
    result.push(firstNode)

    evolves_to.forEach((node) => {
      recursiveEvolution(node, order + 1, result)
    })

    return result
  }

  const getEvolution = async (url: string) => {
    try {
      const { data }: any = await axios
        .get(url)
      let prettyEvolution = await styleEvolutionChain(data?.chain)
      return prettyEvolution
    } catch (error) {
      let result: IEvolutionNode[] = [];
      console.error('No hay información de evolución')
      return result
    }
  };

  return {
    getEvolution
  };
}