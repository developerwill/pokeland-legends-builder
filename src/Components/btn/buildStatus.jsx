import React from 'react';

const BuildStatus = ({ isPublic }) => {
    if (isPublic)
        return (
            <button className='btn btn-primary m-2' type="button"><i className="fa-solid fa-eye"></i> Make Build Public</button>
        )

    else
        return (
            <button className='btn btn-danger m-2' type="button"><i className="fa-solid fa-eye-slash"></i> Make Build Private</button>
        )

}
export default BuildStatus;