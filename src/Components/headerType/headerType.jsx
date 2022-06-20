import './headerType.css';
import React, { useContext } from 'react';
import { PokemonDataContext } from '../../Data/Context/pokemonData';

const HeaderType = (props) => {
    const pokemon = useContext(PokemonDataContext);

    return (
        <div className={`row builder-header rounded-top header-type-color-${pokemon.types.type_1}`}>
            <div className="col header-type-pokemon-container">
                <div className='row'>
                    <div className='col-12 pt-2'>
                        <img className="header-type-type"
                            src={pokemon.assets.type_1}
                            alt={pokemon.seo.type_1_alt}></img>
                        {pokemon.types.type_2 &&
                            <img className="header-type-type"
                                src={pokemon.assets.type_2}
                                alt={pokemon.seo.type_2_alt}></img>
                        }
                    </div>
                </div>

                <div className='col-12 mt-3 mt-sm-0'>
                    {pokemon.types.type_2
                        ? <h3 className='text-center text-uppercase fw-bold'>
                            {pokemon.types.type_1 === 'non-type' ? 'non-' : pokemon.types.type_1 + ' / ' + pokemon.types.type_2 + ' '}type</h3>
                        :
                        <h2 className='text-center text-uppercase fw-bold'>{pokemon.types.type_1 === 'non-type' ? 'non-' : pokemon.types.type_1 + ' '}type</h2>
                    }

                    <img className="header-type-pokemon float-end"
                        src={pokemon.assets.avatar} alt={pokemon.seo.alt}></img>
                </div>
            </div>
        </div>
    );
}
export default HeaderType;