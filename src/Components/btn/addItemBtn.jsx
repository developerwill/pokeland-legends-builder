import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokemonData';
import { BuildContext } from '../../Data/Context/buildData';

const AddItemBtn = ({ modal, index, btnIndex, itemType, classes }) => {
    const { getPokemonAbilities, pokemonData } = useContext(PokedexContext)
    const { getBtnKey, buildData, teammates, pokemonPersonalities, pokemonHeldItems } = useContext(BuildContext)//Ponto 1 adicioanar variável equivalente à pokemonPersonalities
    const btnStyle = 'btn border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary'
    const personalitiesBtn = []//Ponto extra 2 criar um novo array
    const heldItemsBtn = []

    function getItems(btnIndex) {
        if (itemType === 'ability')
            getPokemonAbilities(`ability_set_${index}`)

        getBtnKey(btnIndex)
    }

    //Ponto extra 3 criar novo loop
    for (let i = 1; i <= 4; i++) {
        personalitiesBtn.push(
            <div className='my-2 mx-3 my-xl-0' key={i}>
                <button onClick={() => getItems(i)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                    +<small>Personality {i}</small>
                </button>
            </div>
        )
    }

    for (let i = 1; i <= 4; i++) {
        heldItemsBtn.push(
            <div className='my-2 mx-3 my-xl-0' key={i}>
                <button onClick={() => getItems(i)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                    +<small>Held Item {i}</small>
                </button>
            </div>
        )
    }

    if (itemType === 'pokemon') {
        if (index === 1 || index === 4)
            return (
                <button className={`${btnStyle} ${classes}`} type="button" disabled>
                    <img className='border rounded-circle add-button btn-primary' alt='alt' src={pokemonData.sprites.pokeland}></img>
                </button>
            )
        else
            return (
                <button onClick={() => getBtnKey(index)} className={`${btnStyle} ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                    {teammates && teammates['teammate_' + index]
                        ? <img className='border rounded-circle add-button btn-primary' alt='alt' src={teammates['teammate_' + index]}></img>
                        : '+'
                    }
                </button>
            )
    }

    if (itemType === 'ability') {
        return (
            <button onClick={() => getItems(btnIndex)} key={btnIndex} className={btnStyle} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                {buildData && buildData.abilities['ability_' + btnIndex]
                    ? <img className='border rounded-circle add-button btn-primary' alt='alt' src={`assets/img/abilities/${buildData.abilities['ability_' + btnIndex]}`}></img>
                    : '+'
                }
            </button>
        )
    }

    //Ponto 2 Duplicar esta condição AQUI
    if (itemType === 'personality' && !pokemonPersonalities) {
        return (personalitiesBtn)
    }

    if (itemType === 'heldItem' && !pokemonHeldItems) {
        return (heldItemsBtn)
    }

    if (itemType === 'personality' && pokemonPersonalities) {
        return (
            <>
                {pokemonPersonalities.map((personality, index) => {
                    return (
                        <div key={index} className='my-2 mx-3 my-xl-0'>
                            <div onClick={() => getItems(index + 1)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                {personality
                                    ?
                                    <>
                                        <img className='border rounded-circle add-button btn-primary' alt='alt' src={`assets/img/personalities/${personality}.webp`}></img>
                                        <small>{personality}</small>
                                    </>
                                    :
                                    <div className='my-2 mx-3 my-xl-0'>
                                        <button onClick={() => getItems(index + 1)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                            +<small>Personality {index + 1}</small>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    //Ponto 3 Duplicar esta condição AQUI
    if (itemType === 'heldItem' && pokemonHeldItems) {
        return (
            <>
                {pokemonHeldItems.map((heldItem, index) => {
                    return (
                        <div key={index} className='my-2 mx-3 my-xl-0'>
                            <div onClick={() => getItems(index + 1)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                {heldItem
                                    ?
                                    <>
                                        <img className='border rounded-circle add-button btn-primary' alt='alt' src={`assets/img/held_items/${heldItem.replaceAll(' ', '_')}.webp`}></img>
                                        <small>{heldItem}</small>
                                    </>
                                    :
                                    <div className='my-2 mx-3 my-xl-0'>
                                        <button onClick={() => getItems(index + 1)} key={btnIndex} className={`itemsBtn ${btnStyle}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                                            +<small>Held Item {index + 1}</small>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default AddItemBtn;