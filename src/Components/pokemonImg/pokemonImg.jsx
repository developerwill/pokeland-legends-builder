import React from 'react';

const PokemonImg = (props) => {
    if (props.animated)
        return (
            <img className={`animated tada ${props.borderType} border-small`} src={props.src} alt="alt"></img>
        );
    else
        return (
            <img className={`${props.borderType} border-small`} src={props.src} alt="alt"></img>
        );
}
export default PokemonImg;