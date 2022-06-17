import React from 'react';

/**
 * 
 * @param classes Aditional classes
 * @param src Img src
 * @param alt Img Alt is required 
 */
const ImgTooltip = (props) => {
    return (
        <img data-bs-toggle="tooltip"
            data-bss-tooltip="" className={`${props.classes}`} src={props.src} title={props.alt} alt={props.alt}></img>
    );
}
export default ImgTooltip;