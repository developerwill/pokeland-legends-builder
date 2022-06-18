import React from 'react';
import './headerType.css';

const HeaderType = (props) => {
    return (
        <div className={`row builder-header rounded-top header-type-color-${props.type}`}>
            <div className="col header-type-pokemon-container">
                <div className='col-1 pt-2'>
                    <img className="img-fluid header-type-type" src={`assets/img/header_types/types/${props.type}.webp`} alt="alt"></img>
                </div>
                <div className='col-12'>
                    <h1 className='text-center text-uppercase fw-bold'>{props.type === 'non-type' ? 'non-' : props.type + ' '}type</h1>
                    <img className="img-fluid header-type-pokemon float-end" src={`assets/img/pokedex/builder-header/${props.pokemonId}.webp`} alt="alt"></img>
                </div>
            </div>
        </div>
    );
}
export default HeaderType;