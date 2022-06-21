import React, { useState } from 'react';
import InputText from './inputText';
import { QueryProvider } from '../../Data/Context/queries';
import SearchResults from '../searchResults';

const SearchPokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState('');

    let searching = false;

    if (pokemonName.length >= 2)
        searching = true;

    return (
        <>
            <div className="col-12">
                <form>
                    <InputText placeholder="Type a Pokémon name" name="pokemon-name" setPokemonName={setPokemonName}>Search by name</InputText>
                </form>
                {props.searchByAbility &&
                    <form>
                        <InputText placeholder="Type the name of an ability" name="ability">Search by Ability</InputText>
                    </form>
                }
            </div>

            {searching
                ?
                <div className="search-result">
                    <div className="list-group">
                        <QueryProvider pokemonName={pokemonName}>
                            <SearchResults />
                        </QueryProvider>
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