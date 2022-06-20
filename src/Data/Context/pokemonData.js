import React, { useContext, createContext } from 'react';
import { PokedexContext } from './pokelandApi';

export const PokemonDataContext = createContext();

export const PokemonDataProvider = props => {
    const [pokedex] = useContext(PokedexContext);
    const pokemonInfo = { ...pokedex.filter(pokemon => pokemon.id === props.pokemonID) };

    //Pokemon personal info
    const type_1 = pokemonInfo[0].types.type_1;
    const type_2 = pokemonInfo[0].types.type_2;
    const pokedexID = pokemonInfo[0].pokedex_id;
    const pokelandName = pokemonInfo[0].name.pokeland;

    //SEO
    const alt = `Pokeland Legends Builder - ${pokelandName}`;
    const type_1_alt = `Pokeland Legends Builder - ${type_1}`;
    const type_2_alt = `Pokeland Legends Builder - ${type_2}`;

    //Path for pictures
    const picture = 'assets/img/pokedex/pokemon-home/';
    const typeImg = 'assets/img/header_types/types/';

    const pokemonData =
    {
        id: pokemonInfo[0].id,
        pokedexID: pokedexID,
        name: {
            pokedex: pokemonInfo[0].name.pokedex,
            pokeland: pokelandName
        },
        variation: pokemonInfo[0].variation,
        sprites: {
            pokeland: pokemonInfo[0].sprites.pokeland,
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

    return (
        <PokemonDataContext.Provider value={pokemonData}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}