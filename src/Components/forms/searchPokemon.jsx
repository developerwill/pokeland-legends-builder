import React, { useContext, useState, useEffect } from 'react';
import InputText from './inputText';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';
import uuid from 'uuidv4';

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
                <div className="col search-by-types">
                    <h4 className="text-center">Search by Type</h4>
                    <div className='text-center'>
                        <span className="iconType type-normal">normal</span>
                        <span className="iconType type-fire">fire</span>
                        <span className="iconType type-water">water</span>
                        <span className="iconType type-electric">electric</span>
                        <span className="iconType type-grass">grass</span>
                        <span className="iconType type-ice">ice</span>
                        <span className="iconType type-fighting">fighting</span>
                        <span className="iconType type-poison">poison</span>
                        <span className="iconType type-ground">ground</span>
                        <span className="iconType type-flying">flying</span>
                        <span className="iconType type-psychic">psychic</span>
                        <span className="iconType type-bug">bug</span>
                        <span className="iconType type-rock">rock</span>
                        <span className="iconType type-ghost">ghost</span>
                        <span className="iconType type-dragon">dragon</span>
                        <span className="iconType type-dark">dark</span>
                        <span className="iconType type-steel">steel</span>
                        <span className="iconType type-fairy">fairy</span>
                        <span className="iconType type-non-type">non-type</span>
                        <span className="iconType type-infinity">infinity</span>
                    </div>
                </div>
            }
        </>
    );
}
export default SearchPokemonForm;