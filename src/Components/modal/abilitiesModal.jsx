import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import ImgSelect from '../pokemonImg/imgSelect';

const AbilitiesModal = () => {
    const { pokemonAbilities } = useContext(PokedexContext)
    const pokemonAbilitiesArray = []

    if (pokemonAbilities.length > 0) {
        // eslint-disable-next-line
        pokemonAbilities.map(function (item) {
            pokemonAbilitiesArray.push(item.abilities[0])
        })
    }

    // eslint-disable-next-line
    Object.values(pokemonAbilitiesArray).map(function (item) {
        pokemonAbilitiesArray.push(item)
    })

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="abilities-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker d-flex flex-wrap justify-content-center">
                        {pokemonAbilitiesArray.length > 0 &&
                            Object.values(pokemonAbilitiesArray[0]).map(function (item, index) {
                                return (
                                    <ImgSelect key={index + 1} item={item} itemIndex={index + 1} classes="purple-border border-small m-1 img-fluid img-select" src={`assets/img/abilities/${item}`} alt="butt"></ImgSelect>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AbilitiesModal;