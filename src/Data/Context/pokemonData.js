import React, { useEffect, useState, createContext, useContext } from 'react';
import cryptoRandomString from 'crypto-random-string';
import { AppConfigContext } from '../../Config/App';

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {

    const { site_url } = useContext(AppConfigContext)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pokedex, setPokedex] = useState([]);
    const [pokemonData, setPokemonData] = useState({})
    const [pokemonList, setPokemonList] = useState([])

    //Builder related. This should be moved
    const [pokemonAbilities, setPokemonAbilities] = useState([])

    let abilitiesNum = 0;

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
                [...pokedex.filter(pokemon => pokemon.name.pokeland.toLowerCase().includes(pokemonName))].slice(0, 10)
            )
        }

        function fetchPokemon(pokemonID) {
            const pokemonInfo = { ...pokedex.filter(pokemon => pokemon.id === pokemonID).slice(0, 10) }
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
                    build_url: site_url(pokelandName.toLowerCase().replace(/\s+/g, '-') + '/' + buildKey),
                    abilities: {
                        set_1: getAbilities(pokemonInfo[0].abilities.set_1),
                        set_2: getAbilities(pokemonInfo[0].abilities.set_2),
                        set_3: getAbilities(pokemonInfo[0].abilities.set_3),
                        set_4: getAbilities(pokemonInfo[0].abilities.set_4)
                    },
                    numberOf: {
                        abilities: abilitiesNum,
                        personalities: 4,
                        heldItems: 4,
                        gear: 4,
                        hiddenSkills: 12
                    }
                }
            )

            function getAbilities(ability_set) {
                if (ability_set !== undefined) {
                    abilitiesNum += 1;
                }
                return [ability_set]
            }
        }

        function getPokemonAbilities(item) {
            if (item === 'ability_set_1') {
                setPokemonAbilities([{
                    set: 1,
                    abilities: pokemonData.abilities.set_1
                }])
            } else if (item === 'ability_set_2')
                setPokemonAbilities([{
                    set: 2,
                    abilities: pokemonData.abilities.set_2
                }])
            else if (item === 'ability_set_3')
                setPokemonAbilities([{
                    set: 3,
                    abilities: pokemonData.abilities.set_3
                }])
            else if (item === 'ability_set_4')
                setPokemonAbilities([{
                    set: 4,
                    abilities: pokemonData.abilities.set_4
                }])
        }

        function getSprite(pokemonID) {
            const pokemonInfo = { ...pokedex.filter(pokemon => pokemon.id === pokemonID) }
            const variation = pokemonInfo[0].variation

            return variation + '/' + pokemonInfo[0].sprites.pokeland
        }

        function fetchByType(type_1, type_2) {
            if (type_1 && type_2) {
                setPokemonList([...pokedex.filter(pokemon => (pokemon.types.type_1.includes(type_1)) && (pokemon.types.type_2.includes(type_2)))].slice(0, 10))
            }
            else {
                setPokemonList([...pokedex.filter(pokemon => pokemon.types.type_1 === type_1)].slice(0, 10))
            }
        }

        if (!Object.keys(pokemonData).length) fetchPokemon(643)

        return (
            <PokedexContext.Provider value={{ pokedex, fetchPokemon, pokemonData, getPokemonList, pokemonList, getPokemonAbilities, pokemonAbilities, getSprite, fetchByType }}>
                {children}
            </PokedexContext.Provider>
        );
    }
}