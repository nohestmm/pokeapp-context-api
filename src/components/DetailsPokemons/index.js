import React, { Fragment, useContext } from "react";
import Message from "../Common/Message";
import { DetailsContext } from "../../contexts/DetailsContext";
import Details from "./Details";
import ButtonChange from "../Common/ButtonChange";

const DetailsPokemons = () => {
  const { pokemon, doneFetchPokemon, doneFetchPokemonAbility, effect } = useContext(DetailsContext);
  return (
    <Fragment>
      {doneFetchPokemon ? (
        Object.entries(pokemon).length ? (
          <Details pokemon={pokemon} doneFetchPokemonAbility={doneFetchPokemonAbility} effect={effect}/>
        ) : (
          <Message title="Pokemon sin detalle" />
        )
      ) : (
        "Loading..."
      )}
      <ButtonChange type="Volver" to="/" />
    </Fragment>
  );
};

export default DetailsPokemons;
