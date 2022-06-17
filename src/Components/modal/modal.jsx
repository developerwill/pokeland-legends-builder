import React from 'react';
import ImgTooltip from '../pokemonImg/imgTooltip';

const Modal = (props) => {
    return (
        <div className="modal fade" role="dialog" tabIndex="-1" id="modal-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body purple-bk-darker text-center">

                        <ImgTooltip classes="purple-border border-small m-1 img-fluid" src="assets/img/abilities/accuracy.webp" alt="butt"></ImgTooltip>
                        <ImgTooltip classes="purple-border border-small m-1 img-fluid" src="assets/img/abilities/accuracy.webp" alt="butt"></ImgTooltip>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;