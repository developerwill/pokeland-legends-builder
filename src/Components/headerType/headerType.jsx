import './headerType.css';
import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';

const HeaderType = (props) => {
    const { pokemonData } = useContext(PokedexContext);

    return (
        <div className={`row builder-header rounded-top header-type-color-${pokemonData.types.type_1}`}>
            <div className="col header-type-pokemon-container">
                <div className='row'>
                    <div className='col-12 pt-2'>
                        <img className="header-type-type"
                            src={pokemonData.assets.type_1}
                            alt={pokemonData.seo.type_1_alt}></img>
                        {pokemonData.types.type_2 &&
                            <img className="header-type-type"
                                src={pokemonData.assets.type_2}
                                alt={pokemonData.seo.type_2_alt}></img>
                        }
                    </div>
                </div>

                <div className='col-12 mt-3 mt-sm-0'>
                    {pokemonData.types.type_2
                        ? <h3 className='text-center text-uppercase fw-bold'>
                            {pokemonData.types.type_1 === 'non-type' ? 'non-' : pokemonData.types.type_1 + ' / ' + pokemonData.types.type_2 + ' '}type</h3>
                        :
                        <h2 className='text-center text-uppercase fw-bold'>{pokemonData.types.type_1 === 'non-type' ? 'non-' : pokemonData.types.type_1 + ' '}type</h2>
                    }

                    <img className="header-type-pokemon float-end"
                        src={pokemonData.assets.avatar} alt={pokemonData.seo.alt}></img>
                </div>
            </div>
        </div>
    );
}
export default HeaderType;