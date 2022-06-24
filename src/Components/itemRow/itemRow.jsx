import React from 'react';

const ItemRow = ({ children, id, title }) => {
    return (
        <div id={id} className="row d-flex justify-content-center builder-body rounded purple-bk-darker my-4 mx-2 pb-4">
            <div className="col-12 d-flex justify-content-center align-items-center text-center items-title">
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    );
}
export default ItemRow;