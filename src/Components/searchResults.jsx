import React, { useContext } from 'react';
import { QueryContext } from '../Data/Context/queries';

const SearchResults = () => {
    const queryResult = useContext(QueryContext)
    return (
        <>
            {queryResult.map((pokemon) => (
                <a href={`/${pokemon.id}`} key={pokemon.id} className="list-group-item list-group-item-action">
                    {pokemon.name.pokeland}
                </a>
            ))
            }
        </>
    );
}
export default SearchResults;