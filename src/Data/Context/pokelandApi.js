import React, { useEffect, useState, createContext } from 'react';

export const PokedexContext = createContext();

export const PokedexProvider = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch("https://pokeland-legends.club/api/pokemon/all")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPokedex(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {
        return (
            <PokedexContext.Provider value={[pokedex, setPokedex]}>
                {props.children}
            </PokedexContext.Provider>
        );
    }
}