import React from 'react';

const BtnRounded = (props) => {
    return (
        <button className={`btn border rounded-pill border-2 outlined-button ${props.classes}`} type="button">{props.children}</button>
    );
}
export default BtnRounded;