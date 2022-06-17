import React from 'react';

const SideInfo = (props) => {
    return (
        <div className={`purple-bk rounded ${props.classes}`}>
            {props.children}
        </div>
    );
}
export default SideInfo;