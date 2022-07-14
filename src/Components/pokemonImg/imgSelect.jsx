import React, { useContext } from 'react';
import { BuildContext } from '../../Data/Context/buildData';
import { Link } from 'react-router-dom';

/**
 * 
 * @param classes Aditional classes
 * @param src Img src
 * @param alt Img Alt is required 
 */
const ImgSelect = ({ children, classes, src, alt, item, itemType, itemName }) => {
    const { updateBuild, updatePersonality } = useContext(BuildContext) //Ponto 7 chamar o equivalente ao updatePersonality

    if (!itemType)
        return (
            <div className='text-center'>
                <Link to="#">
                    <img onClick={() => updateBuild(item, itemName)} data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bss-tooltip="" className={`${classes}`} src={src} title={alt} alt={alt}></img>
                    <p className='text-center'><small>{children}</small></p>
                </Link>
            </div>
        );

    if (itemType === 'personality')//Ponto 8 Duplicar e modificar
        return (
            <div className='text-center'>
                <Link to="#">
                    <img onClick={() => updatePersonality(item)} data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bss-tooltip="" className={`${classes}`} src={src} title={alt} alt={alt}></img>
                    <p className='text-center'><small>{children}</small></p>
                </Link>
            </div>
        );

}
export default ImgSelect;