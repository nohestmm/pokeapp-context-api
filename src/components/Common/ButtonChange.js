import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ButtonChange = ({type, to}) => (
    <Link  to={ to } className={`${type === "vermas" ? "seemore" : "buttonBack"}`}>
    <Button variant="contained" color="secondary" className={`${type === "vermas" ? "seemore" : "back"}`}>
      { type === "vermas" ? "See more": "Back" }
    </Button>
  </Link>
)

export default ButtonChange
