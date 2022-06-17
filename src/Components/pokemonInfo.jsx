import React from 'react';
import Span from './span/span';
import PokemonImg from './pokemonImg/pokemonImg';
import BtnOffcanvas from './btn/btnOffcanvas';
import BtnRounded from './btn/btnRounded';
import BestTeams from './bestTeams';
import BtnModal from './btn/btnModal';
import ImgTooltip from './pokemonImg/imgTooltip';

const PokemonInfo = (props) => {
    let teamMates = [];

    if (!props.isLoggedIn)
        for (let i = 1; i <= 6; i++) {
            if (i === 3 || i === 5) {
                teamMates.push(<div className='row best-teams-fix'></div>)
            }

            teamMates.push(
                <BtnModal key={i} animated={true} id={`team-mate-${i}`} modal="#modal-1" classes="border rounded-circle d-flex justify-content-center align-items-center add-button box mx-2 my-2"></BtnModal>
            );
        }
    else
        for (let i = 1; i <= 9; i++)
            teamMates.push(
                <ImgTooltip classes="col-3 col-md-2 col-lg-3 blue-border border-small m-1" src="assets/img/150_mega_shadow_mewtwo-x.webp" alt="butt"></ImgTooltip>
            )

    return (
        <>
            <div className="row">
                <div className="col-12 py-3 text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="mb-3">
                            <Span type="grass"></Span>
                            <Span type="poison"></Span>
                        </div>
                        <p className="box col mb-3">Resonance Shadow Mewtwo X</p>
                        <PokemonImg borderType="blue-border" animated={true} />

                        {props.isLoggedIn

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

            <BestTeams id="best-teams" title="Teammates for" pokemonName="Resonance Spell Of The Unown">
                {teamMates}
            </BestTeams>
        </>
    );
}
export default PokemonInfo;