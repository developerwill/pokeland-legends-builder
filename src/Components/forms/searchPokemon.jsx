import React, { useContext, useState, useEffect } from 'react';
import InputText from './inputText';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';
import uuid from 'uuidv4';
import SearchByType from './searchByType';

const SearchPokemonForm = ({ searchType, dismiss }) => {
    const [pokemonName, setPokemonName] = useState('');
    const { getPokemonList, pokemonList, fetchPokemon } = useContext(PokedexContext)
    const { updateTeammate } = useContext(BuildContext)

    //Tentar resetar o input depois de escolher o pokemon
    //resetar a lista de pokemons tambem
    function onPokemonSelect(pokemonID) {
        fetchPokemon(pokemonID, searchType)
    }

    useEffect(() => {
        getPokemonList(pokemonName)
        // eslint-disable-next-line
    }, [pokemonName])

    function onUpdateTeammate(pokemonID) {
        updateTeammate(pokemonID)
    }

    let searching = false;

    if (pokemonName.length >= 3)
        searching = true;

    return (
        <>
            <div className="col-12">
                <form>
                    <InputText placeholder="Type a Pokémon name" name="pokemon_name" setPokemonName={setPokemonName}>Search by name</InputText>
                </form>
            </div>

            {searching
                ?
                <div className="search-result">
                    <div className="list-group">
                        {pokemonList && (
                            <>
                                {pokemonList.map((pokemon) => (
                                    <div key={uuid()}>
                                        {searchType === 'teamSearch'
                                            ?
                                            <li onClick={() => onUpdateTeammate(pokemon.id)} key={uuid()} data-bs-dismiss={dismiss} aria-label="Close" className="list-group-item list-group-item-action">
                                                {pokemon.name.pokeland}
                                            </li>
                                            :
                                            <li onClick={() => onPokemonSelect(pokemon.id)} key={uuid()} data-bs-dismiss={dismiss} aria-label="Close" className="list-group-item list-group-item-action">
                                                {pokemon.name.pokeland}
                                            </li>
                                        }
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                :
                <SearchByType dismiss={dismiss}></SearchByType>
            }
        </>
    );
}
export default SearchPokemonForm;