import React from 'react';
import ImgTooltip from '../pokemonImg/imgTooltip';
import ProgressCircle from '../progressBars/circle';
import BuildRatio from '../progressBars/buildRatio';

const BuildInfo = (props) => {
    return (
        <>
            <div className='build-info mb-3 purple-bk-darker custom-border rounded-3 py-1'>
                <div className='row my-2'>

                    <div className='col-12 col-sm-7 col-md-6 col-lg-7 col-xxl-5 d-flex justify-content-center justify-content-sm-start align-items-center mt-3 mt-sm-0'>
                        <BuildRatio likes={117} dislikes={100} />
                        <ProgressCircle likes={117} dislikes={100}>
                            <img className="pokemon-ratio-img" src={'assets/img/150_mega_shadow_mewtwo-x.webp'} alt="title"></img>
                        </ProgressCircle>

                        <div className='col' id="build-info">
                            <p className='mb-1'>Resonance Spell Of The Unown</p>
                            <p>Created by: Vir7uaL</p>
                            <p>Personality: Timid</p>
                        </div>

                    </div>


                    <div className='col-12 col-sm-3 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto my-2 my-sm-0'>
                        <p className='m-0'>Teams</p>
                        <div className='me-3 me-sm-0'>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src="assets/img/150_mega_shadow_mewtwo-x.webp" alt="butt"></ImgTooltip>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src="assets/img/150_mega_shadow_mewtwo-x.webp" alt="butt"></ImgTooltip>
                        </div>
                        <div>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src="assets/img/150_mega_shadow_mewtwo-x.webp" alt="butt"></ImgTooltip>
                            <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src="assets/img/150_mega_shadow_mewtwo-x.webp" alt="butt"></ImgTooltip>
                        </div>
                    </div>

                    <div className='col-12 col-sm-2 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto'>
                        <span className='m-1'><i className="fa-solid fa-thumbs-up"></i> 117</span>
                        <p className='m-1'>Votes</p>
                        <span className='m-1'><i className="fa-solid fa-thumbs-down"></i> 69</span>
                    </div>

                </div>
            </div>
        </>
    );
}
export default BuildInfo;