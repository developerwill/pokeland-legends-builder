import React from 'react';

const InputText = (props) => {
    return (
        <div className="form-floating mb-3">
            <input value={props.value} onChange={e => props.setPokemonName(e.target.value)} type="text" className="form-control search-input" id={props.name} placeholder={props.placeholder} name={props.name}></input>
            <label htmlFor={props.name}>{props.children}</label>
        </div>
    );
}
export default InputText;