import React from 'react';

const InputText = ({ children, reference, name, placeholder, setPokemonName, setBuildTitle, search }) => {
    return (
        <>
            {search
                ?
                <div className="form-floating mb-3">
                    <input ref={reference} onChange={e => setPokemonName(e.target.value)} type="text" className="form-control search-input" id={name} placeholder={placeholder} name={name}></input>
                    <label htmlFor={name}>{children}</label>
                </div>
                :
                <div className="form-floating mb-3">
                    <input ref={reference} onChange={e => setBuildTitle(e.target.value)} type="text" className="form-control search-input" id={name} placeholder={placeholder} name={name}></input>
                    <label htmlFor={name}>{children}</label>
                </div>
            }
        </>

    );
}
export default InputText;