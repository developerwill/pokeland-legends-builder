import React from 'react';

const BtnOffcanvas = (props) => {
    return (
        <button
            className={`btn ${props.classes}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={`#${props.offcanvas}`}>
            {props.text} <i className={props.icon}></i>
            {props.children}
        </button>
    );
}
export default BtnOffcanvas;