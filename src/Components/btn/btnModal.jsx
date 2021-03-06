import React from 'react';
import uuid from 'uuidv4';

const BtnModal = ({ children, animated, disabled, id, classes, modal }) => {
    if (animated)
        return (
            <>
                {disabled
                    ?
                    <button key={uuid()} id={id} className={`btn ${classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={modal} data-bss-hover-animate="tada">
                        {children}
                    </button>
                    :
                    <button key={uuid()} id={id} className={`btn ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal} data-bss-hover-animate="tada">
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
                    <button key={uuid()} id={id} className={`btn ${classes}`} type="button" disabled data-bs-toggle="modal" data-bs-target={modal}>
                        {children}
                    </button>
                    :
                    <button key={uuid()} id={id} className={`btn ${classes}`} type="button" data-bs-toggle="modal" data-bs-target={modal}>
                        {children}
                    </button>
                }
            </>
        );

}

export default BtnModal;