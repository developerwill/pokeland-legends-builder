import React/* , { useContext } */ from 'react';
//import ImgTooltip from '../pokemonImg/imgTooltip';
import ProgressCircle from '../progressBars/circle';
import BuildRatio from '../progressBars/buildRatio';
let builds = []

const BuildInfo = ({ likes, dislikes }) => {
    if (localStorage.getItem('builds')) {
        builds.push(JSON.parse(localStorage.getItem('builds')))
    }

    return (
        <>
            {builds.map((build) => {
                return (
                    <div key={build.buildKey} className='build-info mb-3 purple-bk-darker custom-border rounded-3 py-1'>
                        <div className='row my-2'>
                            <div className='col-12 col-sm-7 col-md-6 col-lg-7 col-xxl-5 d-flex justify-content-center justify-content-sm-start align-items-center mt-3 mt-sm-0'>
                                <BuildRatio likes={build.likes} dislikes={build.dislikes} />
                                <ProgressCircle likes={build.likes} dislikes={build.dislikes}>
                                    <img className="pokemon-ratio-img" src={build.buildData.picture} alt="title"></img>
                                </ProgressCircle>
                                <div className='col' id="build-info">
                                    <p className='mb-1'>{build.buildData.name}</p>
                                    <p>Created by: Vir7uaL</p>
                                    <p>Created at: 06/07/2022</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-2 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto'>
                                <span className='m-1'><i className="fa-solid fa-thumbs-up"></i> {likes}</span>
                                <p className='m-1'>Votes</p>
                                <span className='m-1'><i className="fa-solid fa-thumbs-down"></i> {dislikes}</span>
                            </div>

                        </div>
                    </div>
                )
            })}


            {/* <div className='col-12 col-sm-7 col-md-6 col-lg-7 col-xxl-5 d-flex justify-content-center justify-content-sm-start align-items-center mt-3 mt-sm-0'>
                        <BuildRatio likes={likes} dislikes={dislikes} />
                        <ProgressCircle likes={likes} dislikes={dislikes}>
                            <img className="pokemon-ratio-img" src={pokemonData.sprites.pokeland} alt="title"></img>
                        </ProgressCircle>

                        <div className='col' id="build-info">
                            <p className='mb-1'>{pokemonData.name.pokeland}</p>
                            <p>Created by: Vir7uaL</p>
                            <p>Created at: 06/07/2022</p>
                        </div>

                    </div> */}


            {/* <div className='col-12 col-sm-3 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto my-2 my-sm-0'>
                        <p className='m-0'>Teams</p>
                        <div className='me-3 me-sm-0'>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                        </div>
                        <div>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={pokemonData.sprites.pokeland} alt="butt"></ImgTooltip>
                        </div>
                    </div> */}
        </>
    );
}
export default BuildInfo;