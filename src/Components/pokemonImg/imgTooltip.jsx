import React from 'react';

/**
 * 
 * @param classes Aditional classes
 * @param src Img src
 * @param alt Img Alt is required 
 */
const ImgTooltip = ({ classes, src, alt }) => {
    return (
        <img data-bs-toggle="tooltip"
            data-bss-tooltip="" className={`${classes}`} src={src} title={alt} alt={alt}></img>
    );
}
export default ImgTooltip;