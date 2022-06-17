import React from 'react';

const BtnModal = (props) => {
    if (props.animated)
        return (
            <>
                {props.disabled
                    ?
                    <button id={props.id} className={`btn ${props.classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={props.modal} data-bss-hover-animate="tada">
                        {props.children}
                    </button>
                    :
                    <button id={props.id} className={`btn ${props.classes}`} type="button" data-bs-toggle="modal" data-bs-target={props.modal} data-bss-hover-animate="tada">
                        {props.children}
                    </button>
                }
            </>
        );
    else
        return (
            <>
                {props.disabled
                    ?
                    <button id={props.id} className={`btn ${props.classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={props.modal}>
                        {props.children}
                    </button>
                    :
                    <button id={props.id} className={`btn ${props.classes}`} type="button" data-bs-toggle="modal" data-bs-target={props.modal}>
                        {props.children}
                    </button>
                }
            </>
        );
}

export default BtnModal;