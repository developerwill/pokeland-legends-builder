import React, { useContext } from 'react';
import ImgTooltip from '../pokemonImg/imgTooltip';
import ProgressCircle from '../progressBars/circle';
import BuildRatio from '../progressBars/buildRatio';
import { PokedexContext } from '../../Data/Context/pokemonData';

const BuildInfo = ({ likes, dislikes }) => {
    const { pokemonData } = useContext(PokedexContext)
    return (
        <>
            <div className='col-12 col-sm-7 col-md-6 col-lg-7 col-xxl-5 d-flex justify-content-center justify-content-sm-start align-items-center mt-3 mt-sm-0'>
                <BuildRatio likes={likes} dislikes={dislikes} />
                <ProgressCircle likes={likes} dislikes={dislikes}>
                    <img className="pokemon-ratio-img" src={pokemonData.sprites.pokeland} alt="title"></img>
                </ProgressCircle>

                <div className='col' id="build-info">
                    <p className='mb-1'>{pokemonData.name.pokeland}</p>
                    <p>Created by: Vir7uaL</p>
                    <p>Created at: 06/07/2022</p>
                </div>
            </div>

            <div className='col-12 col-sm-3 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto my-2 my-sm-0'>
                <p className='m-0'>Teams</p>
                <div className='me-3 me-sm-0'>
                    <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                    <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                </div>
                <div>
                    <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                    <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                </div>
            </div>
        </>
    );
}
export default BuildInfo;