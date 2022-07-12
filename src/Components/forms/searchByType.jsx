import React, { useContext, useState, useRef } from 'react';
import uuid from 'uuidv4';
import { PokedexContext } from '../../Data/Context/pokemonData';
import pokemonTypes from '../../Data/pokemonTypes.js'
import { BuildContext } from '../../Data/Context/buildData';

let counter = 0

const SearchByType = ({ dismiss, teammate }) => {
    const type_1 = useRef()
    const type_2 = useRef()
    const { fetchByType, pokemonList, fetchPokemon } = useContext(PokedexContext)
    const [isSearching, setIsSearching] = useState()
    const [showResult, setShowResult] = useState(false)
    const { updateTeammate } = useContext(BuildContext)
    const [type_1_selected, setType_1_selected] = React.useState('')
    const [type_2_selected, setType_2_selected] = React.useState('')

    function onSelectType(type) {

        if (counter === 0) {
            setType_1_selected(type)
            type_1.current = type
            fetchByType(type_1.current)
        } else if (counter === 1) {
            setType_2_selected(type)
            type_2.current = type
            fetchByType(type_1.current, type_2.current)
        } else {
            setType_1_selected(type)
            setType_2_selected()
            type_1.current = type
            type_2.current = ''
            fetchByType(type_1.current)
            counter = 0
        }
        setIsSearching(true)
        counter++
    }

    function onSearch() {
        setShowResult(true)
    }

    function onPokemonSelect(pokemonID) {
        fetchPokemon(pokemonID)
        clearSelection()
    }

    function clearSelection() {
        setShowResult(false)
        type_1.current = ''
        type_2.current = ''
        counter = 0
        setType_1_selected()
        setType_2_selected()
        setIsSearching(false)
    }

    function onUpdateTeammate(pokemonID) {
        updateTeammate(pokemonID)
        clearSelection()
    }

    return (
        <>
            <div className="col search-by-types">
                {showResult
                    ?
                    <div className="search-result">
                        <div className="list-group">
                            <>
                                {pokemonList.length > 0
                                    ?
                                    <>
                                        {teammate
                                            ?
                                            pokemonList.map((pokemon) => (
                                                <li onClick={() => onPokemonSelect(pokemon.id)} key={uuid()} data-bs-dismiss={dismiss} aria-label="Close" className="list-group-item list-group-item-action">
                                                    {pokemon.name.pokeland}
                                                </li>
                                            ))
                                            :
                                            pokemonList.map((pokemon) => (
                                                <li onClick={() => onUpdateTeammate(pokemon.id)} key={uuid()} data-bs-dismiss={dismiss} aria-label="Close" className="list-group-item list-group-item-action">
                                                    {pokemon.name.pokeland}
                                                </li>
                                            ))
                                        }
                                    </>
                                    :
                                    <>
                                        <p>No Pokémon were found with these personalities.</p>
                                        <h5>Tip</h5>
                                        <p>If the Pokémon you're shearching is Fire/Water you must choose in that same order.</p>
                                    </>
                                }

                            </>
                        </div>
                    </div>
                    :
                    <>
                        <h4 className="text-center">Search by Type</h4>
                        <div className='text-center'>
                            {pokemonTypes.map((type) => (
                                <>
                                    {(type_1_selected && type_1_selected === type) || (type_2_selected && type_2_selected === type)
                                        ?
                                        <span key={type}>
                                            <button onClick={() => onSelectType(type)} className={`iconType type-${type} disabled`}>{type}</button>
                                        </span>
                                        :
                                        <span key={type}>
                                            <button onClick={() => onSelectType(type)} className={`iconType type-${type}`}>{type}</button>
                                        </span>
                                    }

                                </>
                            ))}
                        </div>
                    </>
                }
            </div>
            <div className='text-center mt-4'>
                {isSearching
                    ?
                    <div className='d-flex justify-content-around'>
                        <button onClick={() => onSearch()} className='btn box searchByTypeBtn'>Search by Type</button>
                        <button onClick={() => clearSelection()} className='btn box searchByTypeBtn'>Clear Selection</button>
                    </div>
                    :
                    <button className='btn box searchByTypeBtn' disabled>Search by Type</button>
                }
            </div>
        </>
    );
}
export default SearchByType;