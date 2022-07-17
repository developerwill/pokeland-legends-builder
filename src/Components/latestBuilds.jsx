import React from 'react';
import BuildInfo from './latestBuilds/buildInfo';
let builds = []

if (localStorage.getItem('builds')) {
    builds.push(JSON.parse(localStorage.getItem('builds')))
}

const LatestBuilds = (props) => {
    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9">
            <div className='row' id="latest-builds">

                {builds.length > 1 &&
                    // eslint-disable-next-line
                    builds.map((build) => {
                        <BuildInfo key={build.build_key} likes={build.likes} dislikes={build.dislikes} />
                    })
                }

                {builds[0] &&
                    <BuildInfo key={builds[0].build_key} likes={builds[0].likes} dislikes={builds[0].dislikes} />
                }

            </div>
        </div>
    );
}
export default LatestBuilds;