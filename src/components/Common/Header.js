import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo  from "./../../assets/logos/Logo.png"
const Header = () => {
    return (
      <AppBar position='sticky' color="secondary">
          <Toolbar>
              <img src= {Logo} alt="Logo" width="150" height="50"/>
          </Toolbar>
      </AppBar>
    )
}

export default Header
