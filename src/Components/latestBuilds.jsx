import React from 'react';
import BuildInfo from './latestBuilds/buildInfo';

const LatestBuilds = (props) => {
    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9">
            <div className='row' id="latest-builds">

                <BuildInfo likes={1051} dislikes={100} />
                <BuildInfo likes={117} dislikes={83} />
                <BuildInfo likes={50} dislikes={350} />

            </div>
        </div>
    );
}
export default LatestBuilds;