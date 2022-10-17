import { NumberString, URLString } from '../utils/types/string.types';

// [getPokemons]
export interface GetPokemonsParams {
  limit: number;
  offset: number;
}

export interface GetPokemonsResponse {
  count: number;
  next: URLString;
  previous: URLString;
  results: {
    name: string;
    url: URLString;
  }[];
}

// [getPokemon]
export interface GetPokemonParams {
  name: string;
}

export type GetPokemonResponse = any;

/**
 * @description Service to interact with the /pokemon/ endpoint of pokeapi.co
 */
export class PokemonService {
  url: URLString = `${
    process.env.POKE_API ?? 'https://pokeapi.co/api/v2'
  }/pokemon/`;

  constructor() {}

  /**
   * @description Calls Poke API to fetch a paginated list of pokemons
   * @example 
   * const pokemon_list = pokemonService.getPokemon({offset: 5, limit: 10});
   * 
   * console.log(pokemon_list.count); 
   * // expected output: 123 (some number)
   * 
   * console.log(pokemon_list.next); 
   * // expected output: 'path/to/get/next/page'
   * 
   * console.log(pokemon_list.previous); 
   * // expected output: 'path/to/get/previous/page'
   * 
   * console.log(pokemon_list.results.length === 10); 
   * // expected output: true
   * 
   * console.log(pokemon_list.results[1]); 
   * // expected output: {name: 'pikachu', url: 'path/to/get/pikachu/record'}
   * @param params 
   * @returns 
   */
  async getPokemons({
    offset,
    limit,
  }: GetPokemonsParams): Promise<GetPokemonsResponse> {
    const data = await fetch(`${this.url}?offset=${offset}&limit=${limit}`);
    return data.json();
  }
  
  async getPokemon({
    name
  }: GetPokemonParams): Promise<GetPokemonResponse> {
    const data = await fetch(`${this.url}${name}`);
    return data.json();
  }
  
  async getAllPokemon() {
    const sample = await this.getPokemons({ offset: 0, limit: 1 });
    const total = sample.count;
    return this.getPokemons({ offset: 0, limit: total });
  }
}
