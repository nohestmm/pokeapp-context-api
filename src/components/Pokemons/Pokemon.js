import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
import ButtonChange from "../Common/ButtonChange";
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  imageCard: {
    objectFit: "contain",

  },
  textCard: {
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
    color: "#fff"
  },
  linkbuttom:{
      justifyContent: 'center'
  },
  cardContainer:{
    background: '#454545'
  }

}));

const Pokemon = ({ name, id, sprites, weight }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={3}>
    <Link className="buttonPrimary" to={`/pokemon/${id}`}>
      <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="120"
            image={sprites.front_default}
            alt={name}
            className={classes.imageCard}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="h3" className={classes.textCard}>
              {name.toUpperCase()}
            </Typography>
            <Typography variant="body2" className={classes.textCard}>
              Number: {id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.linkbuttom}>
          <ButtonChange type="vermas" to={`/pokemon/${id}`}/>
        </CardActions>
      </Card>
      </Link>
    </Grid>
  );
};

export default Pokemon;
