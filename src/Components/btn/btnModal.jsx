import React, { useContext } from 'react';
import { PokedexContext } from '../../Data/Context/pokelandApi';

const BtnModal = ({ children, animated, disabled, id, classes, modal, itemList }) => {
    const { getItemList } = useContext(PokedexContext)



    if (animated)
        return (
            <>
                {disabled
                    ?
                    <button onClick={() => getItemList(itemList)} id={id} className={`btn ${classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={modal} data-bss-hover-animate="tada">
                        {children}
                    </button>
                    :
                    <button onClick={() => getItemList(itemList)} id={id} className={`btn ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal} data-bss-hover-animate="tada">
                        {children}
                    </button>
                }
            </>
        );
    else
        return (
            <>
                {disabled
                    ?
                    <button onClick={() => getItemList(itemList)} id={id} className={`btn ${classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                        {children}
                    </button>
                    :
                    <button onClick={() => getItemList(itemList)} id={id} className={`btn ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                        {children}
                    </button>
                }
            </>
        );
}

export default BtnModal;