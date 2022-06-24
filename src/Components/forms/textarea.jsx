import React from 'react';

const Textarea = ({ children, classes, placeholder, id }) => {
    return (
        <div className="form-floating">
            <textarea className={`form-control custom-border purple-bk ${classes}`} placeholder={placeholder} id={id}></textarea>
            <label htmlFor={id}> {children} </label>
        </div>
    );
}
export default Textarea;