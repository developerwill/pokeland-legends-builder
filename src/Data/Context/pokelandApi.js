import React, { useEffect, useState, createContext } from 'react';

export const PokedexContext = createContext();

export const PokedexProvider = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonData, setPokemonData] = useState({})

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
    }, [isLoaded]);

    if (error) {
        return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
        return <p>Loading...</p>;
    } else {

        function fetchPokemon(pokemonID) {
            const pokemonInfo = { ...pokedex.filter(pokemon => pokemon.id === pokemonID) }

            //Pokemon personal info
            const type_1 = pokemonInfo[0].types.type_1;
            const type_2 = pokemonInfo[0].types.type_2;
            const pokedexID = pokemonInfo[0].pokedex_id;
            const pokelandName = pokemonInfo[0].name.pokeland;
            const variation = pokemonInfo[0].variation;

            //SEO
            const alt = `Pokeland Legends Builder - ${pokelandName}`;
            const type_1_alt = `Pokeland Legends Builder - ${type_1}`;
            const type_2_alt = `Pokeland Legends Builder - ${type_2}`;

            //Path for pictures
            const picture = 'assets/img/pokedex/pokemon-home/';
            const typeImg = 'assets/img/header_types/types/';
            const spritePath = 'assets/img/pokedex/pokeland/';

            setPokemonData(
                {
                    id: pokemonInfo[0].id,
                    pokedexID: pokedexID,
                    name: {
                        pokedex: pokemonInfo[0].name.pokedex,
                        pokeland: pokelandName
                    },
                    variation: variation,
                    sprites: {
                        pokeland: spritePath + variation + '/' + pokemonInfo[0].sprites.pokeland,
                        pokemonHome: pokemonInfo[0].sprites.home
                    },
                    types: {
                        type_1: type_1,
                        type_2: type_2
                    },
                    seo: {
                        alt: alt,
                        type_1_alt: type_1_alt,
                        type_2_alt: type_2_alt
                    },
                    assets: {
                        avatar: picture + pokedexID + '.webp',
                        type_1: typeImg + type_1 + '.webp',
                        type_2: typeImg + type_2 + '.webp'
                    }
                }
            )
        }

        if (!Object.keys(pokemonData).length) fetchPokemon(643)

        return (
            <PokedexContext.Provider value={{ pokedex, fetchPokemon, pokemonData }}>
                {props.children}
            </PokedexContext.Provider>
        );
    }
}