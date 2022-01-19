import React, { createContext, useState, useEffect } from "react";
import { getList, getAll } from "./../constants";

export const PokemonsContext = createContext();

const PokemonsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [title, setTitle] = useState("Pokemones");
  const [pokemons, setPokemons] = useState([]);
  const [term, setTerm] = useState();
  const [size, setSize]= useState();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let arrayPokemons = [];
    fetch(getList())
      .then((res) => res.json())
      .then((data) => {
          setSize(data.count)
        data.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((data) => {
              arrayPokemons = [...arrayPokemons, data];
              setPokemons(arrayPokemons.sort((a,b)=> a.id > b.id ? 1 : -1));
              setTitle(arrayPokemons.length ? "Pokemons" : "No Results");
              setDoneFetch(true);
            })
            .catch((err) => console.log(err));
        });
        
      })
      .catch((err) => console.log(err));
     
  };

  const getSearch = (terms) => {
    let arrayPokemons = [];
    fetch(getAll(size))
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((el) => {
            fetch(el.url)
              .then((res) => res.json())
              .then((data) => {
                  if(data.name.toLowerCase().includes(terms))
                    arrayPokemons = [...arrayPokemons, data];
                    setPokemons(arrayPokemons.sort((a,b)=> a.id > b.id ? 1 : -1));
                    setTitle(arrayPokemons.length ? "Pokemons" : "No Results");
                    setDoneFetch(true);
              })
              .catch((err) => console.log(err));
          });  
        
      })
      .catch((err) => console.log(err));
     
  };

  const validateTerm = (
    e,
   terms = document.querySelector("#terms").value.toLowerCase().trim()
  ) => {
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