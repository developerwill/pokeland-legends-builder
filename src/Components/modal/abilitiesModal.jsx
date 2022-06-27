import React, { useContext } from 'react';
import ImgTooltip from '../pokemonImg/imgTooltip';
import { PokedexContext } from '../../Data/Context/pokemonData';

const Modal = () => {
    const { itemList } = useContext(PokedexContext)
    const itemsListArray = []

    itemList.map((ability_set, i) => (
        Object.values(ability_set).map(function (name, i) {
            itemsListArray.push(name)
        })
    ))

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="abilities-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker text-center">
                        {
                            itemsListArray.map((name, index) =>
                                <ImgTooltip key={index} classes="purple-border border-small m-1 img-fluid" src={`assets/img/abilities/${name}`} alt="butt"></ImgTooltip>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;