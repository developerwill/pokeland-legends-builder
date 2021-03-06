import React, { useContext } from 'react';
import Span from './span/span';
import PokemonImg from './pokemonImg/pokemonImg';
import BtnOffcanvas from './btn/btnOffcanvas';
import BtnRounded from './btn/btnRounded';
import BestTeams from './bestTeams';
import AddItemBtn from './btn/addItemBtn';
import uuid from 'uuidv4';

import { PokedexContext } from '../Data/Context/pokemonData';

const PokemonInfo = ({ isBuilding }) => {
    let teamMates = [];
    const { pokemonData } = useContext(PokedexContext)

    for (let i = 1; i <= 6; i++) {
        if (i === 1) teamMates.push(<div key={uuid()} className='row mt-3 best-teams options'><p className='text-center'>Team 1</p></div>)
        if (i === 4) teamMates.push(<div key={uuid()} className='row mt-3 best-teams options'><p className='text-center'>Team 2</p></div>)
        teamMates.push(
            <AddItemBtn key={uuid()} index={i} itemType={'pokemon'} modal={'#teammates-modal'} classes={'mx-1'}></AddItemBtn>
        );
    }

    return (
        <>
            <div className="row">
                <div className="col-12 py-3 text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3">
                            <Span classes={'me-0'} type={pokemonData.types.type_1}></Span>
                            {pokemonData.types.type_2 &&
                                <Span classes={'ms-2 me-0'} type={pokemonData.types.type_2}></Span>
                            }
                        </div>
                        <p className="box col mb-3">{pokemonData.name.pokeland}</p>
                        <PokemonImg borderType="blue-border" src={pokemonData.sprites.pokeland} alt={pokemonData.name.pokeland} animated={true} />

                        {isBuilding
                            ? <BtnOffcanvas classes="btn-primary mt-3" offcanvas="offcanvas-search-1" text="Change Pokémon"></BtnOffcanvas>
                            :
                            <div className='row d-flex justify-content-center build-vote mt-3'>
                                <p className='yellow'>Vote on this build!</p>
                                <div className='col-2'>
                                    <a href=" ">
                                        <i className="fa-solid fa-thumbs-up"></i>
                                    </a>
                                </div>
                                <div className='col-2 mt-1'>
                                    <a href=" ">
                                        <i className="fa-solid fa-thumbs-down"></i>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <BtnRounded classes="mx-2">Top Builds</BtnRounded>
                        <BtnRounded classes="mx-2">Pokédex Info</BtnRounded>
                    </div>
                </div>
            </div>

            <BestTeams id="best-teams" title="Teammates for" pokemonName={pokemonData.name.pokeland}>
                {teamMates}
            </BestTeams>
        </>
    );
}
export default PokemonInfo;