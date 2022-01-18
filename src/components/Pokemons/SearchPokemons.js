import React from 'react';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchPokemons = ({validateTerm}) =>  (
    <div className="search-box">
    <TextField
      id="terms"
      label="Search pokemón by name"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateTerm(e)}
    />
    <IconButton onClick={(e) => validateTerm(e)}>
      <SearchIcon />
    </IconButton>
  </div>
    )


export default SearchPokemons
