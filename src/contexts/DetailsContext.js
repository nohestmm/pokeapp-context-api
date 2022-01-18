import React, { createContext, useState, useEffect } from "react";
import { getPokemon, getAbilities } from "./../constants";
export const DetailsContext = createContext();


const DetailsContextProvider = ({children}) => {
    const common_id = window.location.pathname.split("/")[2];
    const [doneFetchPokemon, setDoneFetchPokemon] = useState(false);
    const [pokemon, setPokemon] = useState([]);
    const [doneFetchPokemonAbility, setDoneFetchPokemonAbility] = useState(false);
    const [effect, setEffect] = useState([]);

    useEffect(() => Pokemonget(common_id ), [common_id] );
    useEffect(() => Pokemonability(common_id ), [common_id] );
    const Pokemonget = (common_id) => {
        fetch(getPokemon(common_id))
          .then((res) => res.json())
          .then((data) => {
          console.log(data)
          setPokemon(data)
          setDoneFetchPokemon(true)
          })
          .catch((err) => console.log(err));
      };
      const Pokemonability = (common_id) => {
        fetch(getAbilities(common_id))
          .then((res) => res.json())
          .then((data) => {
          
          if(data.effect_entries){
              data.effect_entries.filter(el=>{
                  if(el.language.name === "en"){
                    setEffect(el.effect)
                    setDoneFetchPokemonAbility(true)
                  }

              })
          }
         
          })
          .catch((err) => console.log(err));
      };
      console.log(effect)
    return (
        <DetailsContext.Provider value={{ pokemon, doneFetchPokemon, doneFetchPokemonAbility, effect}}>
        { children }
      </DetailsContext.Provider>
    )
}

export default DetailsContextProvider
//uso del Provider