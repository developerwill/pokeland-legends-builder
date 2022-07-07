import React from 'react';
import HeaderBase from './headerBase';
import DropDownDark from '../../../Components/dropdown/dropdownDark';

const BuilderHeader = () => {

    return (
        <HeaderBase>
            <div className="col-12 col-lg-5 col-xl-4 col-xxl-3 mb-4 mb-lg-0 text-center">
                <h1 className="mb-0 site-title box">Pokémon Legends Builder</h1>
            </div>
            <div className="col d-flex justify-content-end">
                <DropDownDark />
            </div>
        </HeaderBase>
    );
}
export default BuilderHeader;