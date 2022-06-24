import React from 'react';

const PokemonImg = ({ animated, borderType, src, alt }) => {
    if (animated)
        return (
            <img className={`animated tada ${borderType} border-small`} src={src} alt={alt}></img>
        );
    else
        return (
            <img className={`${borderType} border-small`} src={src} alt={alt}></img>
        );
}
export default PokemonImg;