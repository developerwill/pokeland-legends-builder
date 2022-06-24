import React from 'react';

const InputText = ({ children, value, name, placeholder, setPokemonName }) => {
    return (
        <div className="form-floating mb-3">
            <input value={value} onChange={e => setPokemonName(e.target.value)} type="text" className="form-control search-input" id={name} placeholder={placeholder} name={name}></input>
            <label htmlFor={name}>{children}</label>
        </div>
    );
}
export default InputText;