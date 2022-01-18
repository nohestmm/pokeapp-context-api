import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";
import Message from "../Common/Message";

const PokemonsList = ({ title, pokemons }) => (
  <Fragment>
    <Message title={title} />
    <div className="container-list">
      <Grid container spacing={3} justify="center">
        {pokemons.map((pokemon) => {
          const { id, name, sprites, weight } = pokemon;
          return (
            <Pokemon
             key={id}
              id={id}
              name={name}
              sprites={sprites}
              weight={weight}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);

export default PokemonsList;
