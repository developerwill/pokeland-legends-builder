import React from 'react';

const SideInfo = ({ children, classes }) => {
    return (
        <div className={`purple-bk rounded ${classes}`}>
            {children}
        </div>
    );
}
export default SideInfo;