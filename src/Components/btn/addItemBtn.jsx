import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';

const AddItemBtn = ({ modal, index, btnIndex }) => {
    const { getItemList } = useContext(PokedexContext)
    const { getBtnKey } = useContext(BuildContext)
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'

    function getItems() {
        getItemList(`ability_set_${index}`)
        getBtnKey(btnIndex)
    }

    return (
        <button onClick={() => getItems()} key={btnIndex} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
            +
        </button>
    );
}
export default AddItemBtn;