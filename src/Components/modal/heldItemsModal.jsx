import React, { useContext } from 'react';
import ImgSelect from '../pokemonImg/imgSelect';
import { BuildContext } from '../../Data/Context/buildData';

const HeldItemsModal = () => {//Ponto 5 criar um modal novo e alterar os caminhos para ler os dados 
    const { heldItems } = useContext(BuildContext) //Ponto 6 carregar os dados do json

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="heldItems-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div id="heldItems" className="modal-body purple-bk-darker d-flex flex-wrap justify-content-center">
                        {heldItems.length > 0 &&
                            Object.values(heldItems).map(function (helItem, index) {
                                return (
                                    <div key={index}>
                                        <div className="d-md-none">
                                            <ImgSelect item={helItem.info.name} itemType={'helItem'} itemIndex={index + 1} classes="m-1 img-fluid img-select" src={`assets/img/held_items/mobile/${helItem.info.picture}`} alt="butt">{helItem.info.name}</ImgSelect>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <ImgSelect item={helItem.info.name} itemType={'helItem'} itemIndex={index + 1} classes="m-1 img-fluid img-select" src={`assets/img/held_items/mobile/${helItem.info.picture}`} alt="butt">{helItem.info.name}</ImgSelect>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeldItemsModal;