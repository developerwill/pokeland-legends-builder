import React, { useContext } from 'react';
import pokedexDataContext from '../../Data/pokedexDataContext';

import './headerType.css';

const HeaderType = (props) => {
    const { state } = useContext(pokedexDataContext);

    const pokemonInfo = { ...state.filter(pokemon => pokemon.id === props.pokemonID) };

    //Pokemon personal info
    const type_1 = pokemonInfo[0].type_1;
    const type_2 = pokemonInfo[0].type_2;
    const pokedexID = pokemonInfo[0].pokedex_id;
    const pokelandName = pokemonInfo[0].name;

    //SEO
    const alt = `Pokeland Legends Builder - ${pokelandName}`;
    const type_1_alt = `Pokeland Legends Builder - ${type_1}`;
    const type_2_alt = `Pokeland Legends Builder - ${type_2}`;

    //Path for pictures
    const picture = 'assets/img/pokedex/pokemon-home/';
    const typeImg = 'assets/img/header_types/types/';

    return (
        <div className={`row builder-header rounded-top header-type-color-${type_1}`}>

            <div className="col header-type-pokemon-container">
                <div className='row'>
                    <div className='col-12 pt-2'>
                        <img className="header-type-type"
                            src={typeImg + type_1 + ".webp"}
                            alt={type_1_alt}></img>
                        {type_2 &&
                            <img className="header-type-type"
                                src={typeImg + type_2 + ".webp"}
                                alt={type_2_alt}></img>
                        }
                    </div>
                </div>

                <div className='col-12 mt-3 mt-sm-0'>
                    {type_2
                        ? <h3 className='text-center text-uppercase fw-bold'>
                            {type_1 === 'non-type' ? 'non-' : type_1 + ' / ' + type_2 + ' '}type</h3>
                        :
                        <h2 className='text-center text-uppercase fw-bold'>{type_1 === 'non-type' ? 'non-' : type_1 + ' '}type</h2>
                    }

                    <img className="header-type-pokemon float-end"
                        src={picture + pokedexID + ".webp"} alt={alt}></img>
                </div>
            </div>
        </div>
    );
}
export default HeaderType;