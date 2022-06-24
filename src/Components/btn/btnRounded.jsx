import React from 'react';

const BtnRounded = ({ children, classes }) => {
    return (
        <button className={`btn border rounded-pill border-2 outlined-button ${classes}`} type="button">{children}</button>
    );
}
export default BtnRounded;