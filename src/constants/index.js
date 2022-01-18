const list_pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=";
const search_pokemon = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_abilities = "https://pokeapi.co/api/v2/ability/"

export const getPokemon = query => `${search_pokemon}${query}`
export const getAbilities = query => `${pokemon_abilities}${query}`
export const getList = query => `${list_pokemons}${query}`
