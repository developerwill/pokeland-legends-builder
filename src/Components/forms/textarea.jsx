import React from 'react';

const Textarea = (props) => {
    return (
        <div className="form-floating">
            <textarea className={`form-control custom-border purple-bk ${props.classes}`} placeholder={props.placeholder} id={props.id}></textarea>
            <label htmlFor={props.id}> {props.children} </label>
        </div>
    );
}
export default Textarea;