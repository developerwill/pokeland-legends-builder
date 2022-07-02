import React, { useContext, useEffect, useState } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';

const AddItemBtn = ({ modal, index, btnIndex }) => {
    const { getItemList } = useContext(PokedexContext)
    const { getBtnKey, buildData, buildUpdated } = useContext(BuildContext)
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'

    function getItems(btnIndex) {
        getItemList(`ability_set_${index}`)
        getBtnKey(btnIndex)
    }

    useEffect(() => {
        console.log(buildUpdated);
    }, [buildUpdated])

    return (
        <button onClick={() => getItems(btnIndex)} key={btnIndex} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
            {buildData.current && buildData.current.abilities['ability_' + btnIndex]
                ? <img src={`assets/img/abilities/${buildData.current.abilities['ability_' + btnIndex]}`}></img>
                : '+'
            }
        </button>
    )
}
export default AddItemBtn;