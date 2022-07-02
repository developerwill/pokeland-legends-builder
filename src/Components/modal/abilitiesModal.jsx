import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import ImgSelect from '../pokemonImg/imgSelect';

const Modal = () => {
    const { itemList } = useContext(PokedexContext)
    const itemsListArray = []

    if (itemList.length > 0) {
        // eslint-disable-next-line
        itemList.map(function (item) {
            itemsListArray.push(item.abilities[0])
        })
    }

    // eslint-disable-next-line
    Object.values(itemsListArray).map(function (item) {
        itemsListArray.push(item)
    })

    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="abilities-modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker text-center">
                        {itemsListArray.length > 0 &&
                            Object.values(itemsListArray[0]).map(function (item, index) {
                                return (
                                    <ImgSelect key={index + 1} item={item} itemIndex={index + 1} classes="purple-border border-small m-1 img-fluid img-select" src={`assets/img/abilities/${item}`} alt="butt"></ImgSelect>
                                )
                            })
                        }
                        <>
                        </>
                        {/* {itemsListArray.map((name, index) =>
                            <ImgSelect key={index + 1} position={index + 1} item={name} classes="purple-border border-small m-1 img-fluid img-select" src={`assets/img/abilities/${name}`} alt="butt"></ImgSelect>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;