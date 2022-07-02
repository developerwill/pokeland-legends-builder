import React, { useContext } from 'react';
import { BuildContext } from '../../Data/Context/buildData';

/**
 * 
 * @param classes Aditional classes
 * @param src Img src
 * @param alt Img Alt is required 
 */
const ImgSelect = ({ classes, src, alt, item }) => {
    const { updateBuild } = useContext(BuildContext)

    return (
        <img onClick={() => updateBuild(item)} data-bs-toggle="tooltip" data-bss-tooltip="" className={`${classes}`} src={src} title={alt} alt={alt}></img>
    );
}
export default ImgSelect;