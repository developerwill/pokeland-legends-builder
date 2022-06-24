import React from 'react';

const BtnOffcanvas = ({ children, classes, text, icon, offcanvas }) => {
    return (
        <button
            className={`btn ${classes}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={`#${offcanvas}`}>
            {text} <i className={icon}></i>
            {children}
        </button>
    );
}
export default BtnOffcanvas;