import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import DetailsContextProvider from "./contexts/DetailsContext";
import PokemonsContextProvider from "./contexts/PokemonsContext";
import Pokemons from "./components/Pokemons";
import DetailsPokemons from "./components/DetailsPokemons";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <PokemonsContextProvider>
          <Pokemons />
        </PokemonsContextProvider>
      </Route>
      <Route path="/pokemon/:pokemon_id">
        <DetailsContextProvider>
          <DetailsPokemons />
        </DetailsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
