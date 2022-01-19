const list_pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
const search_pokemon = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_abilities = "https://pokeapi.co/api/v2/ability/"
const get_search = "https://pokeapi.co/api/v2/pokemon/?limit="

export const getPokemon = query => `${search_pokemon}${query}`
export const getAbilities = query => `${pokemon_abilities}${query}`
export const getList = () => `${list_pokemons}`
export const getAll = query => `${get_search}${query}`