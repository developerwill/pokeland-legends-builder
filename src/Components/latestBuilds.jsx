import React, { useState } from 'react';
import BuildRatio from './progressBars/buildRatio';
import ProgressCircle from './progressBars/circle'
import ImgTooltip from './pokemonImg/imgTooltip'

const LatestBuilds = (props) => {
    const [builds, setBuilds] = useState(JSON.parse(localStorage.getItem('builds')))

    if (!builds)
        setBuilds([{ "id": "RppDpC7LqOO", "buildData": { "id": 460, "name": "Probopass", "picture": "assets/img/pokedex/pokeland/normal/476_probopass.webp", "abilities": {}, "teammates": { "teammate_2": "mega/460_mega_abomasnow.webp", "teammate_3": "normal/758_salazzle.webp", "teammate_5": "normal/171_lanturn.webp", "teammate_6": "mega/94_mega_gengar.webp" } }, "likes": 150, "dislikes": 15 }])

    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9">
            <div className='row' id="latest-builds">
                {builds &&
                    builds.map((build) => {
                        return (
                            <div key={build.id} className='build-info mb-3 purple-bk-darker custom-border rounded-3 py-1'>
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
                                    <div className='col-12 col-sm-3 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto my-2 my-sm-0'>

                                        {build.buildData.teammates &&
                                            <>
                                                <p className='m-0'>Teams</p>
                                                <div className='me-3 me-sm-0'>
                                                    {build.buildData.teammates.teammate_2 &&
                                                        <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={`assets/img/pokedex/pokeland/${build.buildData.teammates.teammate_2}`} alt="butt"></ImgTooltip>
                                                    }
                                                    {build.buildData.teammates.teammate_3 &&
                                                        <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={`assets/img/pokedex/pokeland/${build.buildData.teammates.teammate_3}`} alt="butt"></ImgTooltip>
                                                    }
                                                </div>
                                                <div>
                                                    {build.buildData.teammates.teammate_5 &&
                                                        <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={`assets/img/pokedex/pokeland/${build.buildData.teammates.teammate_5}`} alt="butt"></ImgTooltip>
                                                    }
                                                    {build.buildData.teammates.teammate_6 &&
                                                        <ImgTooltip classes="team-mate-border border-small m-1 img-fluid" src={`assets/img/pokedex/pokeland/${build.buildData.teammates.teammate_6}`} alt="butt"></ImgTooltip>
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className='col-12 col-sm-2 d-flex flex-sm-column align-items-center justify-content-center ms-md-auto'>
                                        <span className='m-1'><i className="fa-solid fa-thumbs-up"></i> {build.likes}</span>
                                        <p className='m-1'>Votes</p>
                                        <span className='m-1'><i className="fa-solid fa-thumbs-down"></i> {build.dislikes}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }).slice(0, 10)}
            </div>
        </div>
    );
}
export default LatestBuilds;