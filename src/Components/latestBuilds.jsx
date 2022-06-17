import React from 'react';
import BuildInfo from './latestBuilds/buildInfo';

const LatestBuilds = (props) => {
    return (
        <div className="col-lg-7 col-xl-8 col-xxl-9">
            <div className='row' id="latest-builds">
                <BuildInfo />
                <BuildInfo />
                <BuildInfo />
            </div>
        </div>
    );
}
export default LatestBuilds;