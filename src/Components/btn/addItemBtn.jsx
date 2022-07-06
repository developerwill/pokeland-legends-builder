import React, { useContext, useEffect } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';

const AddItemBtn = ({ modal, index, btnIndex, itemType, classes }) => {
    const { getItemList } = useContext(PokedexContext)
    const { getBtnKey, buildData, teammates } = useContext(BuildContext)
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'

    function getItems(btnIndex) {
        getItemList(`ability_set_${index}`)
        getBtnKey(btnIndex)
    }

    if (itemType === 'pokemon') {
        return (
            <button onClick={() => getBtnKey(index)} key={btnIndex} className={`${btnStyle} ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                {teammates && teammates['teammate_' + index]
                    ? <img className='border rounded-circle add-button btn-primary' alt='alt' src={teammates['teammate_' + index]}></img>
                    : '+'
                }
            </button>
        )
    } else {
        return (
            <button onClick={() => getItems(btnIndex)} key={btnIndex} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                {buildData.current && buildData.current.abilities['ability_' + btnIndex]
                    ? <img className='border rounded-circle add-button btn-primary' alt='alt' src={`assets/img/abilities/${buildData.current.abilities['ability_' + btnIndex]}`}></img>
                    : '+'
                }
            </button>
        )
    }
}
export default AddItemBtn;