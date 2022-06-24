import React from 'react';
import BtnModal from './btnModal';

const AddButton = ({ disabled, id }) => {
    return (
        <div className="col-6 col-sm-3 col-md-2 col-lg-3 col-xl-2 d-flex flex-column justify-content-center align-items-center rounded-circle my-2">
            {disabled
                ? <BtnModal id={id} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " disabled='disabled' animated={true} modal="#modal-1">+</BtnModal>
                : <BtnModal id={id} classes="border rounded-circle d-flex justify-content-center align-items-center add-button box btn-primary " disabled='' animated={true} modal="#modal-1">+</BtnModal>
            }
        </div>
    );
}
export default AddButton;