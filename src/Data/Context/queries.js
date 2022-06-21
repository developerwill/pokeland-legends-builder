import React, { useState, createContext, useContext, useEffect } from 'react';
import { PokedexContext } from './pokelandApi';

export const QueryContext = createContext();

export const QueryProvider = props => {
    const [pokedex] = useContext(PokedexContext);

    const [query, setQuery] = useState([])

    useEffect(() => {
        setQuery([...pokedex.filter(pokemon => pokemon.name.pokeland.toLowerCase().includes(props.pokemonName))])
        // eslint-disable-next-line
    }, [props.pokemonName])

    return (
        <QueryContext.Provider value={query}>
            {props.children}
        </QueryContext.Provider>
    );
}