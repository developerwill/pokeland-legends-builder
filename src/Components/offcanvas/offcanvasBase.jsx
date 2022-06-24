import React from 'react';

const OffcanvasBase = ({ children, id }) => {
    return (
        <div className="offcanvas offcanvas-end purple-bk-darker" tabIndex="-1" id={id}>
            <div className="offcanvas-body">
                {children}
            </div>
            <div className='offcanvas-close'>
                <a href=" " data-bs-dismiss="offcanvas" aria-label="Close">
                    <span>Close</span>
                    <i className="fa-solid fa-rectangle-xmark ms-2"></i>
                </a>
            </div>
        </div>
    );
}
export default OffcanvasBase;