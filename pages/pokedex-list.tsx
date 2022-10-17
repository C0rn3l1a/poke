import { NextPage } from 'next';
import Link from 'next/link';
import { GetPokemonResponse } from '../services/pokemon.service';

export interface PokedexListProps {
  pokemons: GetPokemonResponse['results'];
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30',
  );
  const response: GetPokemonResponse = await data.json();

  const pokemons = response.results;
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      pokemons,
    },
  };
}

const PokedexList: NextPage<PokedexListProps> = ({ pokemons }) => {
  const base_url = '';

  return (
    <>
      <h1>Pokemons Go Here!!!</h1>

      <ul>
        {pokemons.map((pokemon: any) => (
          <li className='"pokemon"' key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokedexList;
