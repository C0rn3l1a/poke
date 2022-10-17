import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { PokemonService } from "../../services/pokemon.service";
export interface PokemonInfoPageProps {

}

export interface PokemonInfoPageParams extends ParsedUrlQuery {
  name: string;
}

export interface PokemonInfoPageProps {
  pokemon: any;
}

export const getStaticPaths: GetStaticPaths<PokemonInfoPageParams> = async () => {
  const pokemonService = new PokemonService();
  const pokemons = await pokemonService.getAllPokemon();
  
  const paths = pokemons.results.map(pokemon => ({
    params: {
      name: pokemon.name
    }
  }))

  console.log(paths[0]);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PokemonInfoPageProps, PokemonInfoPageParams> = async ({ params }) => {
  if(!params) return { props: { pokemon: {} }}
  const pokemonService = new PokemonService();
  const pokemon = await pokemonService.getPokemon({ name: params.name });

  return {
    props: { pokemon },
  }
}

const PokemonInfoPage: NextPage<PokemonInfoPageProps> = ({pokemon}) => {
  return <>
    {pokemon?.name ?? 'Pokemon Does Not Exists'}
  </>
}

export default PokemonInfoPage;