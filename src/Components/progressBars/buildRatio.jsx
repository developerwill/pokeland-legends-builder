import React from 'react';

const BuildRatio = (props) => {
    const likes = props.likes;
    const dislikes = props.dislikes;

    const ratio = (10 / (likes + dislikes) * likes).toFixed(1);

    return (
        <div className='build-ratio'>
            <p>{ratio}</p>
            <p>/10</p>
            <p>Rating</p>
        </div>
    );
}
export default BuildRatio;