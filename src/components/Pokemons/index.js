import React, { Fragment, useContext} from 'react';
import Message from '../Common/Message';
import { PokemonsContext } from "../../contexts/PokemonsContext"
import PokemonsList from './PokemonsList';
import SearchPokemons from './SearchPokemons';


const Pokemons = () => {
    const { doneFetch, title, pokemons, validateTerm } = useContext(PokemonsContext)
    return (
        <Fragment>
        <SearchPokemons validateTerm={validateTerm} />
       {doneFetch ? (pokemons.length ? (<PokemonsList title={title} pokemons={pokemons} />) : (<Message title={title} />)) : ( "Loading...")}
      
        </Fragment>
    )
}

export default Pokemons
