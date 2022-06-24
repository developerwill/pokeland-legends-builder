import React from 'react';

const HeaderBase = ({ children }) => {
    return (
        <div className="container my-4">
            <div className="row">
                {children}
            </div>
        </div>
    );
}
export default HeaderBase;