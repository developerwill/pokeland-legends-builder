import React, { useContext } from 'react';
import HeaderBase from './headerBase';
import { PokedexContext } from '../../../Data/Context/pokelandApi';

const CopyLinkHeader = () => {
    const { pokemonData } = useContext(PokedexContext)

    function copyLink(link) {
        navigator.clipboard.writeText(link)
    }

    return (
        <HeaderBase>
            <div className="col-12 col-lg-5 col-xl-4 col-xxl-3 mb-4 mb-lg-0 text-center">
                <h1 className="mb-0 site-title box">Pokémon Legends Builder</h1>
            </div>
            <div className="col-12 col-lg-6 ms-md-auto">
                <div className="input-group" data-bs-toggle="tooltip" data-bs-placement="left" title="Copy &amp; Share!">
                    <input className="form-control custom-border purple-bk" type="text" value={pokemonData.build_url} readOnly="Test"></input>
                    <button onClick={() => copyLink(pokemonData.build_url)} className="btn btn-primary" type="button">Copy &amp; Share!</button>
                </div>
            </div>
        </HeaderBase>
    );
}
export default CopyLinkHeader;