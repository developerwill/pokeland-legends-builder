import React, { useContext, createContext, useState } from 'react';
import { PokedexContext } from './pokelandApi';

export const SearchPokemonContext = createContext();

export const SearchPokemonProvider = props => {
    const [pokedex] = useContext(PokedexContext);
    let query = '';
    let queryResult = pokedex;

    props.pokemonName ? query = props.pokemonName : query = '';

    const [searchResult] = useState(
        [
            ...pokedex.filter(pokemon => pokemon.name.pokeland.toLowerCase().includes(`${query}`))
        ]
    );

    if (props.pokemonName)
        queryResult = searchResult;

    return (
        <SearchPokemonContext.Provider value={queryResult}>
            <div className='custom-border'>
                {queryResult.map((pokemon, index) => (
                    <li key={index} className="list-group-item list-group-item-action">
                        {pokemon.name.pokeland}
                    </li>
                ))
                }
            </div>

            {props.children}
        </SearchPokemonContext.Provider>
    )
}