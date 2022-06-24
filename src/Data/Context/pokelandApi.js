import React, { useEffect, useState, createContext } from 'react';
import cryptoRandomString from 'crypto-random-string';

export const PokedexContext = createContext();

export const PokedexProvider = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonData, setPokemonData] = useState({})
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        //fetch("https://pokeland-legends.club/api/pokemon/all")
        fetch("assets/pokedex.json")
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

        function getPokemonList(pokemonName) {
            setPokemonList(
                [...pokedex.filter(pokemon => pokemon.name.pokeland.toLowerCase().includes(pokemonName))]
            )
        }

        function fetchPokemon(pokemonID) {
            const pokemonInfo = { ...pokedex.filter(pokemon => pokemon.id === pokemonID) }
            const buildKey = cryptoRandomString({ length: 11, type: 'alphanumeric' })

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
                    },
                    buildKey: buildKey
                }
            )
        }

        if (!Object.keys(pokemonData).length) fetchPokemon(643)

        return (
            <PokedexContext.Provider value={{ pokedex, fetchPokemon, pokemonData, getPokemonList, pokemonList }}>
                {props.children}
            </PokedexContext.Provider>
        );
    }
}