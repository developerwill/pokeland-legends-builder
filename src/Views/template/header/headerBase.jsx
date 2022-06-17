import React from 'react';

const HeaderBase = (props) => {
    return (
        <div className="container my-4">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}
export default HeaderBase;