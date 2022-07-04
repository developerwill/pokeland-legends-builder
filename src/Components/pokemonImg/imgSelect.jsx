import React, { useContext } from 'react';
import { BuildContext } from '../../Data/Context/buildData';
import { Link } from 'react-router-dom';

/**
 * 
 * @param classes Aditional classes
 * @param src Img src
 * @param alt Img Alt is required 
 */
const ImgSelect = ({ classes, src, alt, item }) => {
    const { updateBuild } = useContext(BuildContext)

    return (
        <Link to="#">
            <img onClick={() => updateBuild(item)} data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bss-tooltip="" className={`${classes}`} src={src} title={alt} alt={alt}></img>
        </Link>

    );
}
export default ImgSelect;