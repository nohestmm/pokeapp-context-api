import React, { createContext, useState, useEffect } from "react";
import { getList } from "./../constants";

export const PokemonsContext = createContext();

const PokemonsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [title, setTitle] = useState("Pokemones");
  const [pokemons, setPokemons] = useState([]);
  const [term, setTerm] = useState();
  const [search, setSearch] = ([])

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let arrayPokemons = [];
    fetch(getList(20))
      .then((res) => res.json())
      .then((data) => {
        data.results.map((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((data) => {
              arrayPokemons = [...arrayPokemons, data];
              setPokemons(arrayPokemons);
              setTitle(arrayPokemons.length ? "Pokemons" : "No Results");
              setDoneFetch(true);
            })
            .catch((err) => console.log(err));
        });
        
      })
      .catch((err) => console.log(err));
     
  };

  const getSearch = (terms) => {
      console.log(terms)
    let arrayPokemons = [];
    fetch(getList(152))
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
      data.results.map((el) => {
        fetch(el.url)
          .then((res) => res.json())
          .then((data) => {
              if(data.name.toLowerCase().includes(terms))
                arrayPokemons = [...arrayPokemons, data];
                console.log(arrayPokemons)
                setPokemons(arrayPokemons);
                setTitle(arrayPokemons.length ? "Pokemons" : "No Results");
                setDoneFetch(true);
          })
          .catch((err) => console.log(err));
      });  

        
      })
      .catch((err) => console.log(err));
     
  };
console.log(search)
  const validateTerm = (
    e,
   terms = document.querySelector("#terms").value.toLowerCase().trim()
  ) => {
      console.log(terms)
    if (e.type === "keypress" && e.key !== "Enter") return;
    const letters = terms.match(/\w+/g);
    terms = letters && letters.join(" ");
    if (terms && terms !== term) {
        setTerm(terms);
      setDoneFetch(false);
      getSearch(terms);
    }
  };

  return (
    <PokemonsContext.Provider value={{ doneFetch, title, pokemons, validateTerm }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsContextProvider;
//uso del Provider