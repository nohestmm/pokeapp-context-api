import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 200,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  calugas: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Details = ({ pokemon, doneFetchPokemonAbility, effect }) => {
  const { name, sprites, weight, types, abilities, height, stats } =
    pokemon;
  const classes = useStyles();
  return (
    <div className="root-container">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="container-image">
              <img
                src={sprites.front_default ? sprites.front_default : null}
                alt={name}
                height="150"
              />
            </div>
            <div className="container-image">
              <img
                src={sprites.back_default ? sprites.back_default : null}
                alt={name}
                height="150"
              />
            </div>
            <div className="container-name">
              {" "}
              <p className="text-name">Name: {name}</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>

        {doneFetchPokemonAbility && effect.length ? (
          <Paper className={classes.calugas}>
          
              <div>
                <p className="text-name">Effect:</p>
                <p>{effect}</p>
              </div>
              </Paper>
            ): (
              "")}
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.calugas}>
            {" "}
            <p className="text-name">Type:</p>
            {types.map((el) => {
              return (
                <p key={el.type.name} className={`type ${el.type.name}`}>
                  {el.type.name}
                </p>
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.calugas}>
            <p className="text-name">Ability:</p>
            {abilities.map((el) => {
              return <p key={el.ability.name}>{el.ability.name}</p>;
            })}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.calugas}>
            <div>
              {" "}
              <p className="text-name">Height:</p>
              <p>{height}</p>
            </div>
            <div>
              {" "}
              <p className="text-name">Weight:</p>
              <p>{weight}</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.calugas}>
            <p className="stats-text text-name">Stats:</p>
            {stats.map((el) => {
              return (
                <p key={el.stat.name} className="stats-text">
                  {el.stat.name}: {el.base_stat}
                </p>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
